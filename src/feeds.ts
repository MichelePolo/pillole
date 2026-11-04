// npm run feeds: legge i feed di feeds.txt e sceglie gli articoli nuovi da distillare,
// al massimo ARTICLES_PER_FEED per feed a ogni giro (i più recenti non ancora visti).
// Gli articoli scelti si segnano come visti in library/feeds.json, che sta nel repository:
// il job notturno di GitHub Actions non ha altra memoria tra una notte e l'altra.
// Un articolo che poi fallisce in distillazione resta visto: non lo si riprova ogni notte.
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { JSDOM } from 'jsdom';
import { LIBRARY_DIR } from './config.js';
import { loadIdeas } from './markdown.js';
import { stripControl } from './sanitize.js';

export const ARTICLES_PER_FEED = 3;
const FEEDS_FILE = 'feeds.txt';
const STATE_FILE = path.join(LIBRARY_DIR, 'feeds.json');
// Basta ricordare gli ultimi link di ogni feed: i feed mostrano al più qualche centinaio di voci.
const SEEN_PER_FEED = 500;
// Video e podcast non hanno testo da distillare (Aeon e Psyche li mettono nello stesso feed).
const NOT_TEXT = /\/(videos?|podcasts?|audio)\//i;

interface FeedState { seen: string[]; checkedAt?: string; error?: string }
type State = Record<string, FeedState>;
interface Item { link: string; title: string; date: number }

const { values } = parseArgs({
  options: {
    out: { type: 'string' }, // file in cui scrivere gli URL scelti (un elenco per distill)
    'dry-run': { type: 'boolean', default: false }, // mostra la scelta senza aggiornare lo stato
    max: { type: 'string', default: String(ARTICLES_PER_FEED) },
  },
});

// Tiene il link canonico: senza parametri di tracciamento né frammento.
function normalize(url: string): string {
  const u = new URL(url);
  u.hash = '';
  for (const k of [...u.searchParams.keys()]) if (/^(utm_|fbclid|gclid|ref$|source$)/.test(k)) u.searchParams.delete(k);
  return u.toString();
}

export function parseFeed(xml: string, base: string): Item[] {
  // Qualche feed (Il Post) ha spazi prima della dichiarazione XML, che il parser rifiuta.
  const { document } = new JSDOM(xml.trimStart(), { contentType: 'text/xml' }).window;
  const text = (el: Element | null | undefined) => el?.textContent?.trim() ?? '';
  const nodes = [...document.querySelectorAll('item, entry')];
  const items: Item[] = [];
  for (const n of nodes) {
    // RSS: <link>url</link>; Atom: <link rel="alternate" href="url"/> (rel assente = alternate).
    const atom = [...n.children].filter((c) => c.localName === 'link');
    const href = atom.find((l) => (l.getAttribute('rel') ?? 'alternate') === 'alternate' && l.getAttribute('href'))?.getAttribute('href');
    const raw = href ?? text(atom[0]) ?? '';
    if (!raw) continue;
    let link: string;
    try {
      link = normalize(new URL(raw, base).toString());
    } catch {
      continue;
    }
    if (!/^https?:/.test(link)) continue;
    const child = (name: string) => [...n.children].find((c) => c.localName === name);
    const date = Date.parse(text(child('pubDate') ?? child('published') ?? child('updated') ?? child('date')));
    items.push({ link, title: stripControl(text(child('title'))), date: Number.isNaN(date) ? 0 : date });
  }
  return items;
}

async function readFeeds(): Promise<{ url: string; name: string }[]> {
  const lines = (await readFile(FEEDS_FILE, 'utf8')).split('\n');
  return lines
    .map((l) => l.trim())
    .filter((l) => /^https?:\/\//.test(l))
    .map((l) => {
      const [url, ...comment] = l.split('#');
      return { url: url.trim(), name: comment.join('#').trim() || new URL(url.trim()).hostname };
    });
}

async function main(): Promise<void> {
  const max = Number(values.max);
  const feeds = await readFeeds();
  const state: State = existsSync(STATE_FILE) ? (JSON.parse(await readFile(STATE_FILE, 'utf8')) as State) : {};
  // Gli articoli già in biblioteca (per esempio aggiunti a mano in sources.txt) non si rifanno.
  const known = new Set((await loadIdeas()).flatMap((i) => (i.meta.source.url ? [normalize(i.meta.source.url)] : [])));
  const chosen: string[] = [];

  console.log(`Feed · ${feeds.length} in ${FEEDS_FILE} · fino a ${max} articoli nuovi per feed${values['dry-run'] ? ' · prova a secco' : ''}\n`);
  for (const feed of feeds) {
    const st: FeedState = state[feed.url] ?? { seen: [] };
    try {
      const res = await fetch(feed.url, {
        headers: { 'user-agent': 'pillole/0.1 (lettore di feed personale)', accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' },
        signal: AbortSignal.timeout(30_000),
        redirect: 'follow',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const items = parseFeed(await res.text(), feed.url);
      if (items.length === 0) throw new Error('nessuna voce nel feed');
      const seen = new Set(st.seen);
      const fresh = items
        .filter((i) => !seen.has(i.link) && !known.has(i.link) && !NOT_TEXT.test(new URL(i.link).pathname))
        .sort((a, b) => b.date - a.date)
        .slice(0, max);
      for (const i of fresh) console.log(`  + ${i.title || i.link}`);
      console.log(`• ${feed.name}: ${items.length} voci, ${fresh.length} nuove scelte`);
      chosen.push(...fresh.map((i) => i.link));
      st.seen = [...fresh.map((i) => i.link), ...st.seen].slice(0, SEEN_PER_FEED);
      delete st.error;
    } catch (err) {
      // Un feed rotto non ferma gli altri; l'errore resta nello stato, visibile nella PR.
      st.error = err instanceof Error ? err.message : String(err);
      console.error(`✗ ${feed.name}: ${st.error}`);
    }
    st.checkedAt = new Date().toISOString();
    state[feed.url] = st;
  }

  console.log(`\n${chosen.length} articoli da distillare`);
  if (values.out) await writeFile(values.out, chosen.join('\n') + (chosen.length ? '\n' : ''));
  if (values['dry-run']) return;
  const sorted = Object.fromEntries(Object.keys(state).sort().map((k) => [k, state[k]]));
  await writeFile(STATE_FILE, JSON.stringify(sorted, null, 2) + '\n');
}

await main();
