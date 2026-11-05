// Costruisce public/ideas.json dalla libreria del passo 1.
// Tiene solo le idee della versione corrente del prompt e toglie quelle scartate in revisione.
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
// config.ts risolve la libreria rispetto alla cartella corrente: va impostata prima di importarlo.
process.env.PILLOLE_LIBRARY ??= path.join(root, 'library');

const { COMPATIBLE_PROMPT_VERSIONS, PROMPT_VERSION, REVIEWS_FILE } = await import('../../src/config.js');
const { loadEmbeddings } = await import('../../src/embeddings.js');
const { loadIdeas } = await import('../../src/markdown.js');
const { TOPICS } = await import('../../src/vocabulary.js');
const { THEMES } = await import('../src/themes.js');

// Ogni argomento del vocabolario deve essere sceglibile nell'app, e nessun tema deve restare orfano.
const themeIds = new Set(THEMES.map((t) => t.id));
const missing = TOPICS.filter((t) => !themeIds.has(t));
const orphans = [...themeIds].filter((t) => !(TOPICS as readonly string[]).includes(t));
if (missing.length || orphans.length) {
  console.error(`Temi non allineati al vocabolario: mancano ${missing.join(', ') || '—'} · in più ${orphans.join(', ') || '—'} (app/src/themes.ts)`);
  process.exit(1);
}
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

// PILLOLE_PROMPT_VERSION=v1 pubblica una sola versione, per confrontarle; di norma tutte le compatibili.
const version = process.env.PILLOLE_PROMPT_VERSION ?? PROMPT_VERSION;
const published = process.env.PILLOLE_PROMPT_VERSION ? [version] : COMPATIBLE_PROMPT_VERSIONS;
const all = await loadIdeas();
// Una fonte ridistillata con --force ha idee in più versioni: vale solo la più recente.
const newest = new Map<string, number>();
for (const i of all) {
  const rank = published.indexOf(i.meta.prompt_version);
  if (rank > (newest.get(i.meta.source.id) ?? -1)) newest.set(i.meta.source.id, rank);
}
const ideas: Idea[] = all
  .filter((i) => {
    const rank = published.indexOf(i.meta.prompt_version);
    return rank >= 0 && rank === newest.get(i.meta.source.id) && !discarded.has(i.meta.id);
  })
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
const raw = await loadEmbeddings();
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
console.log(`ideas.json: ${ideas.length} idee dei prompt ${published.join(', ')} (${discarded.size} scartate in revisione escluse)`);
if (missingVec) console.warn(`  ${missingVec} idee senza embedding: lancia «npm run embed» nella radice`);
