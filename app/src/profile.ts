import type { IdeaEvent } from './db';
import type { Idea } from './types';

// Il profilo non è salvato: si ricostruisce dal registro degli eventi a ogni apertura.
// Così resta sempre coerente con IndexedDB e cambiare un peso qui ricalcola tutta la storia.

export interface Beta { a: number; b: number }

export interface Profile {
  beta: Record<string, Beta>; // chiavi "t:ai" (argomento) e "s:agenti" (sotto-argomento)
  long: number[] | null; // media lenta degli embedding salvati: gli interessi stabili
  short: number[] | null; // media veloce: la sessione e gli ultimi giorni
  saved: Idea[]; // idee salvate ora, per il motivo "simile a…"
}

// Partenza (sezione 13): argomenti con una Beta leggermente ottimista, sotto-argomenti neutri.
const TOPIC_PRIOR: Beta = { a: 2, b: 1 };
const SUBTOPIC_PRIOR: Beta = { a: 1, b: 1 };

const DAY = 86_400_000;
const BETA_HALF_LIFE_DAYS = 30; // decadimento dei contatori: lascia spazio ai gusti che cambiano
const LONG_HALF_LIFE_DAYS = 90;
const SHORT_HALF_LIFE_DAYS = 3;
const QUICK_DISCARD_MS = 4000; // sotto questa soglia lo scarto è "rapido": un no netto

export const topicKey = (t: string) => `t:${t}`;
export const subtopicKey = (s: string) => `s:${s}`;
export const priorFor = (key: string): Beta => (key.startsWith('t:') ? TOPIC_PRIOR : SUBTOPIC_PRIOR);

export function keysOf(idea: Idea): string[] {
  return [...idea.topics.map(topicKey), ...idea.subtopics.filter((s) => s !== 'altro').map(subtopicKey)];
}

// Quanto una decisione sposta la Beta: successi e insuccessi da aggiungere.
// Sezione 13: un salvataggio +1 al successo, uno scarto rapido +1 all'insuccesso.
function rewardFor(e: IdeaEvent): { success: number; failure: number } {
  switch (e.type) {
    case 'save':
      return { success: 1, failure: 0 };
    case 'discard':
      // Uno scarto dopo aver letto la card dice meno di uno scarto a colpo d'occhio.
      return { success: 0, failure: (e.dwellMs ?? 0) < QUICK_DISCARD_MS ? 1 : 0.5 };
    case 'unsave':
      return { success: 0, failure: 0.5 }; // salvata e poi tolta: un ripensamento, non un rifiuto
    default:
      return { success: 0, failure: 0 };
  }
}

export function buildProfile(events: IdeaEvent[], ideas: Idea[], savedIds: Set<string>, now = Date.now()): Profile {
  const byId = new Map(ideas.map((i) => [i.id, i]));

  // Un "undo" annulla la decisione che lo precede sulla stessa idea.
  const decisions = new Map<string, IdeaEvent[]>();
  for (const e of events) {
    const list = decisions.get(e.ideaId) ?? [];
    if (e.type === 'undo') list.pop();
    else if (e.type === 'save' || e.type === 'discard' || e.type === 'unsave') list.push(e);
    decisions.set(e.ideaId, list);
  }

  const beta: Record<string, Beta> = {};
  for (const [id, list] of decisions) {
    const idea = byId.get(id);
    if (!idea) continue; // idea uscita dalla libreria (nuova versione del prompt, scartata in revisione)
    for (const e of list) {
      const w = 0.5 ** ((now - Date.parse(e.at)) / DAY / BETA_HALF_LIFE_DAYS);
      const r = rewardFor(e);
      for (const key of keysOf(idea)) {
        const cur = (beta[key] ??= { ...priorFor(key) });
        cur.a += w * r.success;
        cur.b += w * r.failure;
      }
    }
  }

  const saved = ideas.filter((i) => savedIds.has(i.id));
  const savedAt = (i: Idea) => {
    const list = decisions.get(i.id) ?? [];
    const last = [...list].reverse().find((e) => e.type === 'save');
    return last ? Date.parse(last.at) : now;
  };
  const mean = (halfLife: number) => {
    let acc: number[] | null = null;
    for (const i of saved) {
      if (!i.vec) continue;
      const w = 0.5 ** ((now - savedAt(i)) / DAY / halfLife);
      acc ??= new Array<number>(i.vec.length).fill(0);
      i.vec.forEach((x, k) => (acc![k] += w * x));
    }
    return acc && normalize(acc);
  };

  return { beta, long: mean(LONG_HALF_LIFE_DAYS), short: mean(SHORT_HALF_LIFE_DAYS), saved };
}

export function normalize(v: number[]): number[] | null {
  const n = Math.hypot(...v);
  return n > 0 ? v.map((x) => x / n) : null;
}

export function cosine(a: number[] | null | undefined, b: number[] | null | undefined): number {
  if (!a || !b) return 0;
  let s = 0;
  for (let k = 0; k < a.length; k++) s += a[k] * b[k];
  return s; // vettori già normalizzati
}
