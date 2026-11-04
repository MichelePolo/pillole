import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs';
import type { IdeaEvent } from './db';

// Passo 4: il ripasso con FSRS. Entrano le idee salvate; ogni voto è un evento "review"
// nel registro. Come il profilo, lo stato non si salva: si ricostruisce dagli eventi,
// così cambiare un parametro qui ricalcola tutta la storia e il passo 6 sincronizza un solo registro.

export const REVIEWS_PER_PILL = 3;

// Niente passi di apprendimento nella stessa giornata: il ripasso arriva con la pillola,
// e ogni voto porta a un intervallo in giorni (Ricordavo: 3, 14, 57, 196…).
// Niente fuzz: gli intervalli restano prevedibili mentre si tarano i parametri.
const scheduler = fsrs(generatorParameters({ enable_fuzz: false, enable_short_term: false, learning_steps: [], relearning_steps: [] }));

export type ReviewLabel = 'liked' | 'recall'; // primo ritorno di un'idea salvata · ripassi successivi

export interface ReviewItem {
  ideaId: string;
  card: Card;
  reviews: number; // voti dati da quando l'idea è stata salvata
  savedAt: number;
}

const DAY = 86_400_000;
export const startOfToday = (now = Date.now()) => new Date(new Date(now).toDateString()).getTime(); // mezzanotte locale

// Una scheda per ogni idea salvata ora. Se un'idea è stata tolta e salvata di nuovo,
// il ripasso riparte dall'ultimo salvataggio.
export function buildReviews(events: IdeaEvent[], savedIds: Set<string>): Map<string, ReviewItem> {
  const items = new Map<string, ReviewItem>();
  for (const e of events) {
    if (!savedIds.has(e.ideaId)) continue;
    const at = Date.parse(e.at);
    if (e.type === 'save') {
      items.set(e.ideaId, { ideaId: e.ideaId, card: createEmptyCard(new Date(at)), reviews: 0, savedAt: at });
    } else if (e.type === 'review' && e.rating) {
      const item = items.get(e.ideaId);
      if (!item) continue;
      item.card = scheduler.next(item.card, new Date(at), e.rating as Grade).card;
      item.reviews++;
    }
  }
  return items;
}

// Da ripassare adesso. Un'idea appena salvata entra dal giorno dopo: ripassarla
// la sera stessa sarebbe rileggerla, non ricordarla.
export function dueReviews(items: Map<string, ReviewItem>, now = Date.now(), exclude: Set<string> = new Set()): ReviewItem[] {
  const today = startOfToday(now);
  return [...items.values()].filter((i) => !exclude.has(i.ideaId) && i.card.due.getTime() <= now && (i.reviews > 0 || i.savedAt < today));
}

// Quali ripassi mettere in coda alla pillola quando ne scadono più di n.
export function pickReviews(due: ReviewItem[], n = REVIEWS_PER_PILL): ReviewItem[] {
  // TODO(Michele): scegli la priorità. Per ora: i più in ritardo per primi.
  return [...due].sort((a, b) => a.card.due.getTime() - b.card.due.getTime()).slice(0, n);
}

export const labelFor = (item: ReviewItem): ReviewLabel => (item.reviews === 0 ? 'liked' : 'recall');

// Le quattro risposte con il prossimo intervallo, per i pulsanti della card quiz.
export const GRADES = [
  { rating: Rating.Again, label: 'Non ricordavo' },
  { rating: Rating.Hard, label: 'A fatica' },
  { rating: Rating.Good, label: 'Ricordavo' },
  { rating: Rating.Easy, label: 'Facile' },
] as const;

export function nextIntervals(item: ReviewItem, now = Date.now()): Record<number, number> {
  const preview = scheduler.repeat(item.card, new Date(now));
  return Object.fromEntries(GRADES.map((g) => [g.rating, (preview[g.rating].card.due.getTime() - now) / DAY]));
}

export function formatInterval(days: number): string {
  const d = Math.round(days);
  if (d <= 1) return 'domani';
  if (d < 30) return `${d} giorni`;
  if (d < 365) return `${Math.round(d / 30)} ${Math.round(d / 30) === 1 ? 'mese' : 'mesi'}`;
  return `${Math.round(d / 365)} ${Math.round(d / 365) === 1 ? 'anno' : 'anni'}`;
}
