import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs';
import type { IdeaEvent } from './db';
import type { Idea } from './types';

// Passo 4: il ripasso con FSRS. Entrano le idee salvate; ogni voto è un evento "review"
// nel registro. Come il profilo, lo stato non si salva: si ricostruisce dagli eventi,
// così cambiare un parametro qui ricalcola tutta la storia e il passo 6 sincronizza un solo registro.

// La regola di Michele: 3 ripassi al giorno, scelti a caso tra quelli scaduti, e non si torna
// mai indietro di più di 10 giorni. Non serve ripassare tutto: con chi salva molto la coda
// non si smaltisce, ma il ripasso resta leggero e non ripesca idee dimenticate da mesi.
// A caso e non in fila (FIFO) per variare: le idee vicine nella coda vengono spesso dalla
// stessa fonte, salvate una dopo l'altra.
export const REVIEWS_PER_DAY = 3;
const MAX_OVERDUE_DAYS = 10;

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
  last?: { rating: number; at: number }; // l'ultimo voto, per "Ripassata" tra le salvate
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
      item.last = { rating: e.rating, at };
    }
  }
  return items;
}

// Da ripassare adesso: scaduti, ma da non più di MAX_OVERDUE_DAYS. Oltre, il ripasso
// esce dalla coda e non torna. Un'idea appena salvata entra dal giorno dopo: ripassarla
// la sera stessa sarebbe rileggerla, non ricordarla.
export function dueReviews(items: Map<string, ReviewItem>, now = Date.now(), exclude: Set<string> = new Set()): ReviewItem[] {
  const today = startOfToday(now);
  const oldest = now - MAX_OVERDUE_DAYS * DAY;
  return [...items.values()].filter((i) => {
    const due = i.card.due.getTime();
    return !exclude.has(i.ideaId) && due <= now && due >= oldest && (i.reviews > 0 || i.savedAt < today);
  });
}

// A caso, con varietà: ogni scelta è la candidata che si sovrappone meno a quelle già prese
// (una fonte in comune pesa più di tutti i temi in comune); a parità vince l'ordine casuale.
const SAME_SOURCE_COST = 10;

export function pickReviews(due: ReviewItem[], n: number, byId: Map<string, Idea>, random: () => number = Math.random): ReviewItem[] {
  const pool = shuffle(due, random);
  const picked: Idea[] = [];
  const out: ReviewItem[] = [];
  while (out.length < n && pool.length > 0) {
    let best = 0;
    let bestCost = Infinity;
    pool.forEach((item, k) => {
      const idea = byId.get(item.ideaId);
      const cost = idea ? picked.reduce((c, p) => c + (p.source.id === idea.source.id ? SAME_SOURCE_COST : 0) + idea.topics.filter((t) => p.topics.includes(t)).length, 0) : 0;
      if (cost < bestCost) [best, bestCost] = [k, cost];
    });
    const [item] = pool.splice(best, 1);
    out.push(item);
    const idea = byId.get(item.ideaId);
    if (idea) picked.push(idea);
  }
  return out;
}

// Fisher–Yates su una copia.
function shuffle<T>(items: T[], random: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

export const gradeLabel = (rating: number) => GRADES.find((g) => g.rating === rating)?.label ?? '';

export function formatInterval(days: number): string {
  const d = Math.round(days);
  if (d <= 1) return 'domani';
  if (d < 30) return `${d} giorni`;
  if (d < 365) return `${Math.round(d / 30)} ${Math.round(d / 30) === 1 ? 'mese' : 'mesi'}`;
  return `${Math.round(d / 365)} ${Math.round(d / 365) === 1 ? 'anno' : 'anni'}`;
}
