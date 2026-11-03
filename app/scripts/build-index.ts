// Costruisce public/ideas.json dalla libreria del passo 1.
// Tiene solo le idee della versione corrente del prompt e toglie quelle scartate in revisione.
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
// config.ts risolve la libreria rispetto alla cartella corrente: va impostata prima di importarlo.
process.env.PILLOLE_LIBRARY ??= path.join(root, 'library');

const { EMBEDDINGS_FILE, PROMPT_VERSION, REVIEWS_FILE } = await import('../../src/config.js');
const { loadIdeas } = await import('../../src/markdown.js');
type Idea = import('../src/types.js').Idea;

const discarded = new Set<string>();
if (existsSync(REVIEWS_FILE)) {
  const last = new Map<string, string>();
  for (const line of (await readFile(REVIEWS_FILE, 'utf8')).split('\n')) {
    if (!line.trim()) continue;
    const r = JSON.parse(line) as { id: string; verdict: string };
    last.set(r.id, r.verdict); // l'ultima revisione vince, come in review.ts
  }
  for (const [id, verdict] of last) if (verdict === 'discard') discarded.add(id);
}

const version = process.env.PILLOLE_PROMPT_VERSION ?? PROMPT_VERSION;
const all = await loadIdeas();
const ideas: Idea[] = all
  .filter((i) => i.meta.prompt_version === version && !discarded.has(i.meta.id))
  .map(({ meta, title, body }) => ({
    id: meta.id,
    title,
    body,
    kind: meta.kind,
    topics: meta.topics,
    subtopics: meta.subtopics,
    sourceLang: meta.source.lang ?? meta.lang,
    source: { id: meta.source.id, title: meta.source.title, author: meta.source.author, site: meta.source.site, url: meta.source.url },
    quiz: meta.quiz,
  }));

// Embedding centrati: e5 dà coseni tra 0,78 e 0,86 anche tra idee scollegate, e con
// quella base i pesi di somiglianza e ridondanza della pillola sarebbero quasi costanti.
// Sottraendo la media della libreria e rinormalizzando, i coseni vanno da circa -0,2 a +0,5.
const raw: Record<string, number[]> = existsSync(EMBEDDINGS_FILE) ? JSON.parse(await readFile(EMBEDDINGS_FILE, 'utf8')) : {};
const withVec = ideas.filter((i) => raw[i.id]);
if (withVec.length > 1) {
  const dim = raw[withVec[0].id].length;
  const mean = new Array<number>(dim).fill(0);
  for (const i of withVec) raw[i.id].forEach((x, k) => (mean[k] += x / withVec.length));
  for (const i of withVec) {
    const v = raw[i.id].map((x, k) => x - mean[k]);
    const norm = Math.hypot(...v);
    i.vec = v.map((x) => Math.round((x / norm) * 1e3) / 1e3);
  }
}
const missingVec = ideas.length - withVec.length;

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/ideas.json');
await mkdir(path.dirname(out), { recursive: true });
await writeFile(out, JSON.stringify({ version, generated: new Date().toISOString(), ideas }));
console.log(`ideas.json: ${ideas.length} idee del prompt ${version} (${discarded.size} scartate in revisione escluse)`);
if (missingVec) console.warn(`  ${missingVec} idee senza embedding: lancia «npm run embed» nella radice`);
