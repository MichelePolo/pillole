import type { Reason } from './pill';

// La pillola del giorno resta la stessa tra un'apertura e l'altra: ricomporla a ogni
// avvio cambierebbe le card sotto le dita (il campionamento di Thompson è casuale).
export interface StoredPill {
  day: string; // YYYY-MM-DD, ora locale
  round: number; // 1 = la pillola del giorno; 2+ = "un'altra pillola"
  cards: { id: string; reason: Reason }[];
}

const KEY = 'pillole:pill';

export const today = () => new Date().toLocaleDateString('sv-SE'); // formato ISO, fuso locale

export function loadPill(): StoredPill | null {
  try {
    const p = JSON.parse(localStorage.getItem(KEY) ?? 'null') as StoredPill | null;
    return p && p.day === today() ? p : null;
  } catch {
    return null;
  }
}

export function savePill(p: StoredPill): void {
  localStorage.setItem(KEY, JSON.stringify(p));
}
