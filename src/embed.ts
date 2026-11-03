// Calcola gli embedding delle idee che non li hanno ancora (Claude Doc, sezione 13:
// multilingual-e5-small, calcolati fuori dal telefono perché il modello pesa oltre 100 MB).
// Il primo avvio scarica il modello nella cache di Transformers.js; i successivi no.
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pipeline } from '@huggingface/transformers';
import { EMBED_MODEL, EMBEDDINGS_FILE } from './config.js';
import { loadIdeas } from './markdown.js';

// 4 decimali bastano per il coseno e dimezzano il file rispetto ai float completi.
const round = (x: number) => Math.round(x * 1e4) / 1e4;

async function loadEmbeddings(): Promise<Record<string, number[]>> {
  if (!existsSync(EMBEDDINGS_FILE)) return {};
  return JSON.parse(await readFile(EMBEDDINGS_FILE, 'utf8')) as Record<string, number[]>;
}

async function main(): Promise<void> {
  const all = await loadIdeas();
  const store = await loadEmbeddings();
  const missing = all.filter((i) => !store[i.meta.id]);
  console.log(`Embedding · ${EMBED_MODEL} · ${all.length} idee, ${missing.length} da calcolare`);
  if (missing.length === 0) return;

  const extract = await pipeline('feature-extraction', EMBED_MODEL, { dtype: 'q8' });
  const BATCH = 16;
  for (let i = 0; i < missing.length; i += BATCH) {
    const batch = missing.slice(i, i + BATCH);
    // e5 vuole il prefisso "passage: " per i documenti.
    const texts = batch.map((idea) => `passage: ${idea.title}\n${idea.body.replace(/==/g, '')}`);
    const out = await extract(texts, { pooling: 'mean', normalize: true });
    const rows = out.tolist() as number[][];
    batch.forEach((idea, k) => (store[idea.meta.id] = rows[k].map(round)));
    console.log(`  ${Math.min(i + BATCH, missing.length)}/${missing.length}`);
  }

  // Chiavi ordinate: il file cambia poco da un giro all'altro e i diff restano leggibili.
  const sorted = Object.fromEntries(Object.keys(store).sort().map((k) => [k, store[k]]));
  await mkdir(path.dirname(EMBEDDINGS_FILE), { recursive: true });
  await writeFile(EMBEDDINGS_FILE, JSON.stringify(sorted) + '\n');
  console.log(`Scritto ${path.relative(process.cwd(), EMBEDDINGS_FILE)}`);
}

await main();
