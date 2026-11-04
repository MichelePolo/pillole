import { cosine, keysOf, priorFor, type Beta, type Profile } from './profile';
import { themeLabel } from './themes';
import type { Idea } from './types';

// La pillola: una sessione finita di card, poi "per oggi hai finito" (Claude Doc, sezioni 8 e 13).

export const PILL_SIZE = 6;
const EVERGREEN_MIN = 2; // quota evergreen: almeno 2 card su 6 di filosofia
const SIMILAR_REASON_MIN = 0.3; // coseno centrato oltre cui "simile a…" è un motivo credibile

// Pesi indicativi del doc, da tarare.
const W_SIM = 0.5;
const W_REDUNDANCY = 0.7;
const W_SAME_SOURCE = 0.5; // diversità: una seconda card dalla stessa fonte deve valere molto di più
// Storico: le stesse due regole valgono anche verso le idee lette nei giorni scorsi (profile.recent),
// non solo dentro la pillola. Una fonte letta due volte di recente pesa quanto una ripetuta qui.
const W_SOURCE_FATIGUE = 0.5;
const SOURCE_FATIGUE_SATURATION = 2;
const W_BRIDGE = 0.1; // card ponte: idee con due argomenti
// Temi scelti: più dell'intera escursione degli altri termini (circa da -2 a +1,5),
// così un'idea fuori tema entra solo quando quelle nei temi sono finite.
const IN_THEME_BONUS = 3;

export type Reason =
  | { kind: 'similar'; to: string } // titolo dell'idea salvata più vicina
  | { kind: 'explore'; label: string }
  | { kind: 'taste'; label: string }
  | { kind: 'evergreen' }
  | { kind: 'outside' } // fuori dai temi scelti: completa una pillola che nei temi non ha abbastanza idee
  | { kind: 'review'; label: 'liked' | 'recall' }; // passo 4: in coda alla pillola, card quiz

export interface PillCard { idea: Idea; reason: Reason }

export interface PillOptions {
  interests?: readonly string[]; // temi scelti; vuoto = tutti
  n?: number;
  random?: () => number;
}

export function composePill(pool: Idea[], p: Profile, { interests = [], n = PILL_SIZE, random = Math.random }: PillOptions = {}): PillCard[] {
  const pill: PillCard[] = [];
  const cands = [...pool];
  const chosen = new Set(interests);
  const inTheme = (i: Idea) => chosen.size === 0 || i.topics.some((t) => chosen.has(t));
  // La quota evergreen vale solo se la filosofia è tra i temi (o se non se ne è scelto nessuno).
  const evergreenMin = chosen.size === 0 || chosen.has('filosofia') ? EVERGREEN_MIN : 0;
  const isEvergreen = (i: Idea) => i.topics.includes('filosofia');

  while (pill.length < n && cands.length > 0) {
    // Se gli slot rimasti bastano appena per la quota evergreen, si sceglie solo tra la filosofia.
    const evergreenNeeded = evergreenMin - pill.filter((c) => isEvergreen(c.idea)).length;
    const forceEvergreen = evergreenNeeded > 0 && n - pill.length <= evergreenNeeded && cands.some(isEvergreen);
    const eligible = forceEvergreen ? cands.filter(isEvergreen) : cands;

    let best: { idea: Idea; score: number; taste: Taste } | null = null;
    for (const idea of eligible) {
      const taste = sampleTaste(idea, p, random);
      const sim = 0.7 * cosine(idea.vec, p.long) + 0.3 * cosine(idea.vec, p.short);
      const redundancy = Math.max(0, ...pill.map((c) => cosine(idea.vec, c.idea.vec)), ...p.recent.map((r) => r.w * cosine(idea.vec, r.vec)));
      const sameSource = pill.some((c) => c.idea.source.id === idea.source.id) ? 1 : 0;
      const readFromSource = p.recent.reduce((sum, r) => sum + (r.sourceId === idea.source.id ? r.w : 0), 0);
      const fatigue = Math.min(1, readFromSource / SOURCE_FATIGUE_SATURATION);
      const bridge = idea.topics.length > 1 ? 1 : 0;
      const theme = inTheme(idea) ? IN_THEME_BONUS : 0;
      const score = theme + taste.value + W_SIM * sim - W_REDUNDANCY * redundancy - W_SAME_SOURCE * sameSource - W_SOURCE_FATIGUE * fatigue + W_BRIDGE * bridge;
      if (!best || score > best.score) best = { idea, score, taste };
    }
    if (!best) break;
    pill.push({ idea: best.idea, reason: inTheme(best.idea) ? reasonFor(best.idea, best.taste, p, forceEvergreen) : { kind: 'outside' } });
    cands.splice(cands.indexOf(best.idea), 1);
  }
  return pill;
}

interface Taste { value: number; key: string; observations: number }

// Thompson sampling: un valore estratto dalla Beta di ogni argomento e sotto-argomento.
// Gli argomenti poco provati hanno Beta larghe e ogni tanto vincono: è l'esplorazione,
// senza un parametro di esplorazione esplicito.
function sampleTaste(idea: Idea, p: Profile, random: () => number): Taste {
  let topic = { value: 0, key: '' };
  let sub = { value: 0, key: '' };
  for (const key of keysOf(idea)) {
    const value = sampleBeta(p.beta[key] ?? priorFor(key), random);
    const slot = key.startsWith('t:') ? topic : sub;
    if (value > slot.value) Object.assign(slot, { value, key });
  }
  // Il sotto-argomento è più specifico; se manca, conta solo l'argomento.
  const lead = sub.key ? sub : topic;
  const value = sub.key ? 0.5 * topic.value + 0.5 * sub.value : topic.value;
  const beta = p.beta[lead.key] ?? priorFor(lead.key);
  const prior = priorFor(lead.key);
  return { value, key: lead.key, observations: beta.a + beta.b - prior.a - prior.b };
}

function reasonFor(idea: Idea, taste: Taste, p: Profile, forcedEvergreen: boolean): Reason {
  let nearest: { title: string; cos: number } | null = null;
  for (const s of p.saved) {
    const c = cosine(idea.vec, s.vec);
    if (!nearest || c > nearest.cos) nearest = { title: s.title, cos: c };
  }
  if (nearest && nearest.cos >= SIMILAR_REASON_MIN) return { kind: 'similar', to: nearest.title };
  if (forcedEvergreen) return { kind: 'evergreen' };
  const label = taste.key.startsWith('t:') ? themeLabel(taste.key.slice(2)) : taste.key.slice(2).replace(/-/g, ' ');
  return taste.observations < 2 ? { kind: 'explore', label } : { kind: 'taste', label };
}

export function reasonText(r: Reason): string {
  switch (r.kind) {
    case 'similar':
      return `simile a «${r.to}»`;
    case 'explore':
      return `esplorazione · ${r.label}`;
    case 'taste':
      return `ti interessa · ${r.label}`;
    case 'evergreen':
      return 'evergreen';
    case 'outside':
      return 'fuori dai tuoi temi';
    case 'review':
      return r.label === 'liked' ? 'Ti era piaciuto' : 'Ti ricordi?';
  }
}

// Beta(a, b) come rapporto di due Gamma.
export function sampleBeta({ a, b }: Beta, random: () => number = Math.random): number {
  const x = sampleGamma(a, random);
  const y = sampleGamma(b, random);
  return x / (x + y);
}

// Marsaglia e Tsang (2000); per forma < 1 si usa Gamma(forma + 1) · U^(1/forma).
function sampleGamma(shape: number, random: () => number): number {
  if (shape < 1) return sampleGamma(shape + 1, random) * random() ** (1 / shape);
  const d = shape - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);
  for (;;) {
    let x: number;
    let v: number;
    do {
      x = gaussian(random);
      v = 1 + c * x;
    } while (v <= 0);
    v = v * v * v;
    const u = random();
    if (u < 1 - 0.0331 * x ** 4 || Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v;
  }
}

function gaussian(random: () => number): number {
  // Box–Muller; 1 - random() evita log(0).
  return Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());
}
