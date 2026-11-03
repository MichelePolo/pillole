import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { Readability } from '@mozilla/readability';
import { JSDOM, VirtualConsole } from 'jsdom';
import { MAX_SOURCE_CHARS, SOURCES_DIR } from './config.js';

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
  return text
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

async function fromUrl(url: string): Promise<Omit<Source, 'id' | 'chars' | 'truncated' | 'fetchedAt'>> {
  const res = await fetch(url, {
    headers: { 'user-agent': 'pillole/0.1 (distillatore personale)', accept: 'text/html, text/plain, text/markdown' },
    signal: AbortSignal.timeout(30_000),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} per ${url}`);
  const type = res.headers.get('content-type') ?? '';
  const body = await res.text();

  if (!type.includes('html')) {
    const firstHeading = body.match(/^#\s+(.+)$/m)?.[1];
    return { url, title: firstHeading ?? new URL(url).pathname.split('/').pop() ?? url, text: cleanText(body) };
  }

  const virtualConsole = new VirtualConsole(); // silenzia gli errori CSS di jsdom
  const dom = new JSDOM(body, { url, virtualConsole });
  const article = new Readability(dom.window.document).parse();
  if (!article?.content) throw new Error(`Readability non ha trovato un articolo in ${url}`);
  return {
    url,
    title: article.title?.trim() || url,
    author: article.byline?.trim() || undefined,
    site: article.siteName?.trim() || new URL(url).hostname,
    text: cleanText(htmlToParagraphs(article.content)),
  };
}

async function fromFile(file: string): Promise<Omit<Source, 'id' | 'chars' | 'truncated' | 'fetchedAt'>> {
  const body = await readFile(file, 'utf8');
  const firstHeading = body.match(/^#\s+(.+)$/m)?.[1];
  return { file: path.resolve(file), title: firstHeading ?? path.basename(file, path.extname(file)), text: cleanText(body) };
}

export async function loadSource(input: string, opts: { refresh?: boolean } = {}): Promise<Source> {
  const isUrl = /^https?:\/\//i.test(input);
  const id = sourceId(isUrl ? input : path.resolve(input));

  if (!opts.refresh && existsSync(cachePath(id))) {
    return JSON.parse(await readFile(cachePath(id), 'utf8')) as Source;
  }

  const raw = isUrl ? await fromUrl(input) : await fromFile(input);
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
