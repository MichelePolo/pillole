import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { Readability } from '@mozilla/readability';
import { JSDOM, VirtualConsole } from 'jsdom';
import { extractText, getDocumentProxy, getMeta } from 'unpdf';
import { MAX_SOURCE_CHARS, MIN_SOURCE_CHARS, SOURCES_DIR } from './config.js';
import { oneLine, stripControl } from './sanitize.js';

export interface Source {
  id: string;
  url?: string;
  file?: string;
  title: string;
  author?: string;
  site?: string;
  text: string;
  chars: number;
  truncated: boolean;
  fetchedAt: string;
  // Per ogni versione del prompt: quante idee ha prodotto e con quale verdetto.
  distilled?: Record<string, { ideas: number; verdict: string; at: string }>;
}

const sourceId = (key: string) => createHash('sha1').update(key).digest('hex').slice(0, 12);
const cachePath = (id: string) => path.join(SOURCES_DIR, `${id}.json`);

function cleanText(text: string): string {
  return stripControl(text)
    .replace(/\r/g, '')
    .replace(/[ \t\u00a0]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Testo per paragrafi: Readability restituisce HTML pulito, lo riduciamo a blocchi separati da righe vuote.
function htmlToParagraphs(html: string): string {
  const { document } = new JSDOM(`<body>${html}</body>`).window;
  const blocks = document.querySelectorAll('p, li, h1, h2, h3, h4, blockquote, pre, figcaption');
  const parts = [...blocks]
    // I ritorni a capo dentro un paragrafo vengono dall'impaginazione dell'HTML: si tengono solo nei <pre>.
    .map((b) => (b.tagName === 'PRE' ? (b.textContent ?? '') : (b.textContent ?? '').replace(/\s+/g, ' ')).trim())
    .filter(Boolean);
  return parts.length > 0 ? parts.join('\n\n') : (document.body.textContent ?? '');
}

// PDF (articoli scientifici, preprint): pdf.js restituisce righe spezzate come nella pagina.
// Si ricuciono le parole divise a fine riga e le righe di uno stesso paragrafo.
async function fromPdf(data: Uint8Array, fallbackTitle: string): Promise<{ title: string; author?: string; text: string }> {
  const pdf = await getDocumentProxy(data);
  const { info } = await getMeta(pdf);
  const { text } = await extractText(pdf, { mergePages: true });
  const joined = text
    .replace(/(\p{Ll})-\n(\p{Ll})/gu, '$1$2')
    .replace(/([^\n])\n(?!\n)/g, '$1 ');
  const meta = info as { Title?: string; Author?: string };
  // Molti PDF hanno il titolo dei metadati vuoto o di servizio ("Microsoft Word - bozza.docx").
  const metaTitle = meta.Title?.trim();
  const useful = metaTitle && !/^microsoft word|\.(docx?|tex|pdf)$|^untitled/i.test(metaTitle);
  const title = useful ? metaTitle : ((await leadingTitle(pdf)) ?? fallbackTitle);
  return { title, author: meta.Author?.trim() || undefined, text: cleanText(joined) };
}

// Nei PDF accademici il titolo apre la prima pagina: il primo blocco di righe con lo stesso
// font e la stessa altezza (il titolo è di solito in grassetto o più grande degli autori).
// Si saltano i numeri di pagina. La sola altezza non basta: molti PDF usano lo stesso corpo.
async function leadingTitle(pdf: Awaited<ReturnType<typeof getDocumentProxy>>): Promise<string | undefined> {
  const page = await pdf.getPage(1);
  const items = (await page.getTextContent()).items
    .filter((i): i is typeof i & { str: string; height: number; fontName: string } => 'str' in i && i.str.trim() !== '')
    .filter((i) => !/^\d+$/.test(i.str.trim()));
  const first = items[0];
  if (!first) return undefined;
  const parts: string[] = [];
  for (const i of items) {
    if (i.fontName !== first.fontName || Math.abs(i.height - first.height) > 0.1) break;
    parts.push(i.str.trim());
  }
  const title = parts.join(' ').replace(/\s+/g, ' ').trim();
  return title.length >= 10 && title.length <= 250 ? title : undefined;
}

async function fromUrl(url: string): Promise<Omit<Source, 'id' | 'chars' | 'truncated' | 'fetchedAt'>> {
  const res = await fetch(url, {
    headers: { 'user-agent': 'pillole/0.1 (distillatore personale)', accept: 'text/html, text/plain, text/markdown, application/pdf' },
    signal: AbortSignal.timeout(30_000),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} per ${url}`);
  const type = res.headers.get('content-type') ?? '';
  if (type.includes('application/pdf')) {
    const pdf = await fromPdf(new Uint8Array(await res.arrayBuffer()), new URL(url).pathname.split('/').pop() ?? url);
    return { url, site: new URL(url).hostname, ...pdf };
  }
  const body = await res.text();

  if (!type.includes('html')) {
    const firstHeading = body.match(/^#\s+(.+)$/m)?.[1];
    return { url, title: firstHeading ?? new URL(url).pathname.split('/').pop() ?? url, text: cleanText(body) };
  }

  const virtualConsole = new VirtualConsole(); // silenzia gli errori CSS di jsdom
  const dom = new JSDOM(body, { url, virtualConsole });
  // Titolo e nome del sito prima di Readability, che modifica il documento. Se la pagina non
  // dichiara il sito, il nome si ricava dal <title> («… – Senses of Cinema») anche quando il
  // titolo arriva dall'<h1>.
  const title = pageTitle(dom.window.document);
  const host = new URL(url).hostname;
  const siteFromTitle = splitSiteSuffix(oneLine(dom.window.document.title ?? ''), host).site;
  const article = new Readability(dom.window.document).parse();
  if (!article?.content) throw new Error(`Readability non ha trovato un articolo in ${url}`);
  return {
    url,
    title: title || article.title?.trim() || url,
    author: article.byline?.trim() || undefined,
    site: article.siteName?.trim() || siteFromTitle || host,
    text: cleanText(htmlToParagraphs(article.content)),
  };
}

async function fromFile(file: string): Promise<Omit<Source, 'id' | 'chars' | 'truncated' | 'fetchedAt'>> {
  if (/\.pdf$/i.test(file)) return { file: path.resolve(file), ...(await fromPdf(new Uint8Array(await readFile(file)), path.basename(file, '.pdf'))) };
  const body = await readFile(file, 'utf8');
  const firstHeading = body.match(/^#\s+(.+)$/m)?.[1];
  return { file: path.resolve(file), title: firstHeading ?? path.basename(file, path.extname(file)), text: cleanText(body) };
}

// Molte pagine mettono il nome del sito in coda al <title>: «Titolo | Quanta Magazine»,
// «Titolo – Senses of Cinema». Lo togliamo solo se coincide con il sito (nome o dominio),
// così un sottotitolo vero («… – L'INTERVISTA») resta. Se il sito è solo un dominio e
// il suffisso è un nome per esteso («Senses of Cinema», non «<antirez>»), prendiamo quello.
// Il titolo viene da pagine non fidate: si cerca l'ultimo separatore con una scansione
// lineare, non con una regex a quantificatori annidati che su titoli lunghi pieni di
// « - » farebbe backtracking quadratico.
const SEPARATOR = / [|–—-] /g;

function lastSuffix(title: string): [string, string] | undefined {
  let at = -1;
  for (const m of title.matchAll(SEPARATOR)) at = m.index;
  if (at < 10) return undefined;
  const suffix = title.slice(at + 3).trim();
  return suffix && !/[|–—]/.test(suffix) ? [title.slice(0, at).trim(), suffix] : undefined;
}

const squash = (s: string) =>
  s
    .toLowerCase()
    .replace(/^www\./, '')
    .replace(/\.[a-z]{2,}$/, '')
    .replace(/[^\p{L}\p{N}]/gu, '');

export function splitSiteSuffix(title: string, site?: string): { title: string; site?: string } {
  const m = lastSuffix(title);
  // Il suffisso è il sito se coincide con il suo nome o dominio, o se ne è una sezione che comincia
  // con il nome («Aeon Essays», «Psyche Ideas» per Aeon e Psyche).
  const suffix = m && squash(m[1]);
  const name = site && squash(site);
  if (!m || !name || !suffix || !(suffix === name || (name.length >= 4 && suffix.startsWith(name)))) return { title, site };
  const isHost = /^[\w-]+(\.[\w-]+)+$/.test(site);
  const isName = /^[\p{L}\p{N}’'&.]+( [\p{L}\p{N}’'&.]+)+$/u.test(m[1]);
  return { title: m[0], site: isHost && isName ? m[1] : site };
}

// Il titolo completo dell'articolo. Readability riconosce come separatori del <title> solo
// | - \\ / > », non il trattino lungo: con «80 is the New 60: More Into… – Senses of Cinema»
// tiene solo la parte dopo l'ultimo «:». Quindi: og:title se c'è; altrimenti l'unico <h1>, se il
// <title> comincia con quello (è il titolo senza il nome del sito); altrimenti il <title> intero.
// Il nome del sito in coda lo toglie poi splitSiteSuffix.
export function pageTitle(doc: Document): string | undefined {
  const og = doc.querySelector('meta[property="og:title"], meta[name="twitter:title"]')?.getAttribute('content')?.trim();
  if (og) return og;
  const docTitle = doc.title?.trim();
  const h1 = [...doc.querySelectorAll('h1')].map((h) => h.textContent?.replace(/\s+/g, ' ').trim()).filter(Boolean) as string[];
  if (h1.length === 1 && docTitle?.startsWith(h1[0])) return h1[0];
  return docTitle || undefined;
}

// La firma di alcuni siti mette dopo il nome la data e la rubrica: «Tony McKibbin October 2026
// Book Reviews» (Senses of Cinema). Si taglia dove cominciano (giorno,) mese e anno.
const MONTHS =
  'january|february|march|april|may|june|july|august|september|october|november|december|gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre';
// «October 2026», «3 novembre 2026», «November 6, 2026».
const DATELINE = new RegExp(`\\s+(?:\\d{1,2}\\s+)?(?:${MONTHS})(?:\\s+\\d{1,2},?)?\\s+\\d{4}\\b.*$`, 'iu');
// Anche «By Nome», «Text by Nome» (Public Domain Review), «Testo di Nome» → «Nome»; via i separatori
// rimasti in coda («Sarah Finley |»). Una firma vuota («By», Quanta) non è un autore.
export const cleanAuthor = (author: string): string =>
  author
    .replace(DATELINE, '')
    .replace(/^(?:(?:text|words)\s+by|testo\s+di|by|di)\b\s*/i, '')
    .replace(/[\s|·•,;:–—-]+$/u, '')
    .trim();

// Entità HTML sopravvissute alla doppia codifica («Veronese&amp;#39;s Dogs»): il testo arriva già
// decodificato una volta da jsdom, quindi qui restano solo forme numeriche e le cinque di base.
const NAMED: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
export function decodeEntities(text: string): string {
  let t = text;
  for (let k = 0; k < 2 && /&(?:#\d+|#x[\da-f]+|amp|lt|gt|quot|apos);/i.test(t); k++)
    t = t.replace(/&(#\d+|#x[\da-f]+|amp|lt|gt|quot|apos);/gi, (_, e: string) =>
      e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : NAMED[e.toLowerCase()],
    );
  return t;
}

// Il titolo come testo: entità decodificate e senza il corsivo Markdown che alcune pagine mettono
// nei titoli («The Alchemical Transformations of the *Mutus Liber*», Public Domain Review): l'app
// lo mostrerebbe con gli asterischi.
export const plainTitle = (title: string): string => decodeEntities(title).replace(/\*([^*\n]+)\*/g, '$1');

// Metadati da pagine e PDF non fidati: su una riga sola (vedi oneLine).
function clean<T extends { title: string; author?: string; site?: string }>(s: T): T {
  const { title, site } = splitSiteSuffix(plainTitle(oneLine(s.title)), s.site && oneLine(s.site));
  const author = s.author ? cleanAuthor(decodeEntities(oneLine(s.author))) : '';
  const { author: _raw, ...rest } = s; // una firma vuota dopo la pulizia non resta nell'oggetto
  return { ...rest, title, ...(author ? { author } : {}), ...(site ? { site } : {}) } as T;
}

export async function loadSource(input: string, opts: { refresh?: boolean } = {}): Promise<Source> {
  const isUrl = /^https?:\/\//i.test(input);
  const id = sourceId(isUrl ? input : path.resolve(input));

  if (!opts.refresh && existsSync(cachePath(id))) {
    return clean(JSON.parse(await readFile(cachePath(id), 'utf8')) as Source);
  }

  const raw = clean(isUrl ? await fromUrl(input) : await fromFile(input));
  // Un testo cortissimo non è un articolo: di solito è una pagina anti-bot ("Client
  // Challenge"), un paywall o un'estrazione fallita. Non si mette in cache.
  if (raw.text.length < MIN_SOURCE_CHARS) {
    throw new Error(`testo troppo corto (${raw.text.length} caratteri, «${stripControl(raw.title).slice(0, 60)}»): forse una pagina anti-bot o un paywall`);
  }
  const truncated = raw.text.length > MAX_SOURCE_CHARS;
  const source: Source = {
    ...raw,
    id,
    text: truncated ? raw.text.slice(0, MAX_SOURCE_CHARS) : raw.text,
    chars: raw.text.length,
    truncated,
    fetchedAt: new Date().toISOString(),
  };
  await saveSource(source);
  return source;
}

export async function saveSource(source: Source): Promise<void> {
  await mkdir(SOURCES_DIR, { recursive: true });
  await writeFile(cachePath(source.id), JSON.stringify(source, null, 2));
}
