import { existsSync } from 'node:fs';
import { appendFile, readFile } from 'node:fs/promises';
import { COMPATIBLE_PROMPT_VERSIONS, REVIEWS_FILE } from './config.js';
import type { IdeaFile } from './markdown.js';

export interface Review {
  id: string;
  prompt_version: string;
  verdict: 'keep' | 'discard';
  reason?: string;
  note?: string;
  // 'auto' = scartata dal controllo dei duplicati in distillazione, non da una persona.
  by?: 'auto';
  duplicate_of?: string;
  at: string;
}

export async function loadReviews(): Promise<Map<string, Review>> {
  const map = new Map<string, Review>();
  if (!existsSync(REVIEWS_FILE)) return map;
  for (const line of (await readFile(REVIEWS_FILE, 'utf8')).split('\n')) {
    if (!line.trim()) continue;
    const r = JSON.parse(line) as Review;
    map.set(r.id, r); // l'ultima revisione vince
  }
  return map;
}

export async function appendReview(review: Review): Promise<void> {
  await appendFile(REVIEWS_FILE, JSON.stringify(review) + '\n');
}

// Le idee che l'app pubblica (come build-index): per ogni fonte solo la versione
// compatibile più recente, escluse quelle scartate.
export function publishedIdeas(ideas: IdeaFile[], reviews: Map<string, Review>): IdeaFile[] {
  const rank = (i: IdeaFile) => COMPATIBLE_PROMPT_VERSIONS.indexOf(i.meta.prompt_version);
  const newest = new Map<string, number>();
  for (const i of ideas) newest.set(i.meta.source.id, Math.max(newest.get(i.meta.source.id) ?? -1, rank(i)));
  return ideas.filter((i) => rank(i) >= 0 && rank(i) === newest.get(i.meta.source.id) && reviews.get(i.meta.id)?.verdict !== 'discard');
}
