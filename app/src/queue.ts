import type { Idea } from './types';

// Ordine delle card da leggere al passo 2, prima della selezione vera (passo 3:
// Beta per argomento, somiglianza, diversità). Riceve le idee non ancora viste,
// nell'ordine di ideas.json, cioè raggruppate per fonte.
//
// Giro tra le fonti: una card per fonte, poi si ricomincia. Due card di fila dalla
// stessa fonte capitano solo quando restano idee di una fonte sola. L'ordine delle
// fonti cambia a ogni apertura; dentro una fonte resta quello del distillatore,
// che di solito segue il filo dell'articolo.
export function orderQueue(unseen: Idea[], random: () => number = Math.random): Idea[] {
  const bySource = new Map<string, Idea[]>();
  for (const idea of unseen) {
    const list = bySource.get(idea.source.id);
    if (list) list.push(idea);
    else bySource.set(idea.source.id, [idea]);
  }

  const groups = shuffle([...bySource.values()], random);
  const out: Idea[] = [];
  for (let round = 0; out.length < unseen.length; round++) {
    for (const group of groups) if (round < group.length) out.push(group[round]);
  }
  return out;
}

// Fisher–Yates: ogni permutazione è ugualmente probabile.
function shuffle<T>(items: T[], random: () => number): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}
