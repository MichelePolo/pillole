// Dati locali in IndexedDB (sezione 13: "eventi, profilo e stato di ripasso").
// Gli eventi sono append-only: la selezione del passo 3 e le metriche ripartiranno da qui.

export type Origin = 'pill' | 'library'; // poi anche 'search' e 'review'
export type EventType = 'save' | 'discard' | 'undo' | 'unsave' | 'open' | 'listen';

export interface IdeaEvent {
  ideaId: string;
  type: EventType;
  origin: Origin; // separa le riaperture spontanee da quelle proposte dall'app
  at: string;
  dwellMs?: number; // tempo sulla card prima dello swipe: distingue lo "scarto rapido"
}

export type Status = 'saved' | 'discarded';
export interface IdeaState { ideaId: string; status: Status; at: string }

const DB_NAME = 'pillole';
const DB_VERSION = 1;

let dbPromise: Promise<IDBDatabase> | undefined;

function open(): Promise<IDBDatabase> {
  dbPromise ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      const events = db.createObjectStore('events', { autoIncrement: true });
      events.createIndex('ideaId', 'ideaId');
      db.createObjectStore('state', { keyPath: 'ideaId' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function done(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = tx.onabort = () => reject(tx.error);
  });
}

export async function loadState(): Promise<Map<string, IdeaState>> {
  const db = await open();
  const req = db.transaction('state').objectStore('state').getAll();
  const rows = await new Promise<IdeaState[]>((resolve, reject) => {
    req.onsuccess = () => resolve(req.result as IdeaState[]);
    req.onerror = () => reject(req.error);
  });
  return new Map(rows.map((r) => [r.ideaId, r]));
}

// Un evento e il nuovo stato dell'idea nella stessa transazione: non restano mai disallineati.
export async function record(event: Omit<IdeaEvent, 'at'>, state: IdeaState | null): Promise<void> {
  const db = await open();
  const tx = db.transaction(['events', 'state'], 'readwrite');
  const at = new Date().toISOString();
  tx.objectStore('events').add({ ...event, at });
  if (state) tx.objectStore('state').put(state);
  else tx.objectStore('state').delete(event.ideaId);
  await done(tx);
}

export async function loadEvents(): Promise<IdeaEvent[]> {
  const db = await open();
  const req = db.transaction('events').objectStore('events').getAll(); // in ordine di inserimento
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result as IdeaEvent[]);
    req.onerror = () => reject(req.error);
  });
}

export async function logEvent(event: Omit<IdeaEvent, 'at'>): Promise<void> {
  const db = await open();
  const tx = db.transaction('events', 'readwrite');
  tx.objectStore('events').add({ ...event, at: new Date().toISOString() });
  await done(tx);
}
