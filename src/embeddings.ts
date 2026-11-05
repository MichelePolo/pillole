// Embedding delle idee (Claude Doc, sezione 13: multilingual-e5-small, calcolati fuori
// dal telefono perché il modello pesa oltre 100 MB). Li usano npm run embed, la ricerca
// dei duplicati in distillazione e, centrati, la selezione dell'app.
// Il primo uso scarica il modello nella cache di Transformers.js; i successivi no.
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { EMBED_MODEL, EMBEDDINGS_FILE } from './config.js';
import type { IdeaFile } from './markdown.js';

export type Embeddings = Record<string, number[]>;

// 4 decimali bastano per il coseno e dimezzano il file rispetto ai float completi.
const round = (x: number) => Math.round(x * 1e4) / 1e4;

export async function loadEmbeddings(file = EMBEDDINGS_FILE): Promise<Embeddings> {
  if (!existsSync(file)) return {};
  const store: Embeddings = {};
  for (const line of (await readFile(file, 'utf8')).split('\n')) {
    if (!line.trim()) continue;
    const { id, vec } = JSON.parse(line) as { id: string; vec: number[] };
    store[id] = vec;
  }
  return store;
}

export async function saveEmbeddings(store: Embeddings, file = EMBEDDINGS_FILE): Promise<void> {
  // In ordine di id: il file cambia solo dove arrivano idee nuove e i diff restano leggibili.
  const lines = Object.keys(store)
    .sort()
    .map((id) => JSON.stringify({ id, vec: store[id] }));
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, lines.join('\n') + '\n');
}

// Calcola gli embedding mancanti, li salva e restituisce l'archivio completo.
export async function updateEmbeddings(ideas: IdeaFile[], log: (s: string) => void = console.log): Promise<Embeddings> {
  const store = await loadEmbeddings();
  const missing = ideas.filter((i) => !store[i.meta.id]);
  log(`Embedding · ${EMBED_MODEL} · ${ideas.length} idee, ${missing.length} da calcolare`);
  if (missing.length === 0) return store;

  // Import dinamico: chi legge soltanto l'archivio (build-index nella CI) non carica onnxruntime.
  const { pipeline } = await import('@huggingface/transformers');
  const extract = await pipeline('feature-extraction', EMBED_MODEL, { dtype: 'q8' });
  const BATCH = 16;
  for (let i = 0; i < missing.length; i += BATCH) {
    const batch = missing.slice(i, i + BATCH);
    // e5 vuole il prefisso "passage: " per i documenti.
    const texts = batch.map((idea) => `passage: ${idea.title}\n${idea.body.replace(/==/g, '')}`);
    const out = await extract(texts, { pooling: 'mean', normalize: true });
    const rows = out.tolist() as number[][];
    batch.forEach((idea, k) => (store[idea.meta.id] = rows[k].map(round)));
    log(`  ${Math.min(i + BATCH, missing.length)}/${missing.length}`);
  }

  await saveEmbeddings(store);
  log(`Scritto ${path.relative(process.cwd(), EMBEDDINGS_FILE)}`);
  return store;
}

// I vettori sono già normalizzati: il prodotto scalare è il coseno.
export function cosine(a: number[], b: number[]): number {
  let s = 0;
  for (let k = 0; k < a.length; k++) s += a[k] * b[k];
  return s;
}
