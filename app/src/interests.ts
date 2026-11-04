import { isTheme, MAX_THEMES } from './themes';

// I temi scelti dall'utente. Per ora nel browser, come la pillola del giorno; updatedAt serve
// alla sincronizzazione col server che arriverà con l'autenticazione (vince la scelta più recente).
interface StoredInterests {
  topics: string[];
  updatedAt: string;
}

const KEY = 'pillole:temi';

export function loadInterests(): string[] {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) ?? 'null') as StoredInterests | null;
    // Un tema tolto dal vocabolario sparisce da solo; il limite vale anche per dati vecchi.
    return (s?.topics ?? []).filter(isTheme).slice(0, MAX_THEMES);
  } catch {
    return [];
  }
}

export function saveInterests(topics: string[]): void {
  const s: StoredInterests = { topics, updatedAt: new Date().toISOString() };
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function loadStoredInterests(): StoredInterests | null {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? 'null') as StoredInterests | null;
  } catch {
    return null;
  }
}
