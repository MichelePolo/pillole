import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { loadEvents, loadState, logEvent, record, type IdeaState } from './db';
import { loadInterests, saveInterests } from './interests';
import { Library } from './Library';
import { composePill, PILL_SIZE, reasonText, type Reason } from './pill';
import { loadPill, savePill, today, type StoredPill } from './pillStore';
import { buildProfile } from './profile';
import { speak, speechSupported, stopSpeaking } from './speech';
import { SwipeCard, type Direction, type SwipeCardHandle } from './SwipeCard';
import { Themes } from './Themes';
import type { Idea, IdeasFile } from './types';

const UNDO_MS = 5000;

type View = 'read' | 'themes' | 'library';
interface Undo { idea: Idea; dir: Direction; timer: number }

export function App() {
  const [ideas, setIdeas] = useState<Idea[] | null>(null);
  const [ideasVersion, setIdeasVersion] = useState('');
  const [state, setState] = useState<Map<string, IdeaState>>(new Map());
  const [pill, setPill] = useState<StoredPill | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<View>('read');
  const [interests, setInterests] = useState<string[]>(loadInterests);
  const [undo, setUndo] = useState<Undo | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const card = useRef<SwipeCardHandle>(null);
  const shownAt = useRef(performance.now());

  // Compone una pillola dalle idee mai decise, con il profilo ricostruito dagli eventi.
  // kept: card già decise da tenere in testa (cambio di temi a pillola iniziata).
  const newPill = useCallback(async (all: Idea[], st: Map<string, IdeaState>, round: number, topics: string[], kept: StoredPill['cards'] = []) => {
    const events = await loadEvents();
    const saved = new Set([...st.values()].filter((s) => s.status === 'saved').map((s) => s.ideaId));
    const profile = buildProfile(events, all, saved);
    const pool = all.filter((i) => !st.has(i.id));
    const fresh = composePill(pool, profile, { interests: topics, n: PILL_SIZE - kept.length }).map((c) => ({ id: c.idea.id, reason: c.reason }));
    const p: StoredPill = { day: today(), round, cards: [...kept, ...fresh] };
    savePill(p);
    setPill(p);
  }, []);

  useEffect(() => {
    Promise.all([fetch('./ideas.json').then((r) => r.json() as Promise<IdeasFile>), loadState()])
      .then(async ([file, st]) => {
        setIdeas(file.ideas);
        setIdeasVersion(file.version);
        setState(st);
        const known = new Set(file.ideas.map((i) => i.id));
        const stored = loadPill();
        // La pillola di oggi resta valida se le sue idee esistono ancora in ideas.json.
        if (stored && stored.cards.every((c) => known.has(c.id))) setPill(stored);
        else await newPill(file.ideas, st, 1, loadInterests());
      })
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)));
  }, [newPill]);

  // Temi cambiati: all'uscita dalla vista la pillola di oggi tiene le card già decise e
  // ricompone le altre. Ricomporre a ogni tocco cambierebbe le card mentre si sceglie.
  const interestsOnEntry = useRef<string[] | null>(null);
  useEffect(() => {
    if (view === 'themes') {
      interestsOnEntry.current = interests;
      return;
    }
    const before = interestsOnEntry.current;
    interestsOnEntry.current = null;
    if (!before || !ideas || !pill || before.join() === interests.join()) return;
    const kept = pill.cards.filter((c) => state.has(c.id));
    if (kept.length < pill.cards.length) void newPill(ideas, state, pill.round, interests, kept);
  }, [view]); // di proposito solo la vista: gli altri valori si leggono al momento dell'uscita

  function onInterestsChange(topics: string[]) {
    setInterests(topics);
    saveInterests(topics);
  }

  const themeCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const i of ideas ?? []) for (const t of i.topics) m.set(t, (m.get(t) ?? 0) + 1);
    return m;
  }, [ideas]);

  const byId = useMemo(() => new Map((ideas ?? []).map((i) => [i.id, i])), [ideas]);
  const cards = useMemo(
    () => (pill?.cards ?? []).flatMap((c) => (byId.has(c.id) ? [{ idea: byId.get(c.id)!, reason: c.reason as Reason }] : [])),
    [pill, byId],
  );
  // La card corrente è la prima della pillola non ancora decisa: un "Annulla" la rimette in cima da solo.
  const position = cards.findIndex((c) => !state.has(c.idea.id));
  const currentCard = position >= 0 ? cards[position] : undefined;
  const current = currentCard?.idea;
  const remainingPool = (ideas ?? []).filter((i) => !state.has(i.id)).length;

  useEffect(() => {
    shownAt.current = performance.now();
    stopSpeaking();
    setSpeaking(false);
  }, [current?.id]);

  const onSwipe = useCallback(
    (dir: Direction) => {
      if (!current) return;
      const status = dir === 'right' ? 'saved' : 'discarded';
      const entry: IdeaState = { ideaId: current.id, status, at: new Date().toISOString() };
      const dwellMs = Math.round(performance.now() - shownAt.current);
      void record({ ideaId: current.id, type: dir === 'right' ? 'save' : 'discard', origin: 'pill', dwellMs }, entry);
      setState((s) => new Map(s).set(current.id, entry));
      setUndo((u) => {
        if (u) window.clearTimeout(u.timer);
        return { idea: current, dir, timer: window.setTimeout(() => setUndo(null), UNDO_MS) };
      });
    },
    [current],
  );

  function onUndo() {
    if (!undo) return;
    window.clearTimeout(undo.timer);
    void record({ ideaId: undo.idea.id, type: 'undo', origin: 'pill' }, null);
    setState((s) => {
      const n = new Map(s);
      n.delete(undo.idea.id);
      return n;
    });
    setUndo(null);
  }

  function onUnsave(idea: Idea) {
    void record({ ideaId: idea.id, type: 'unsave', origin: 'library' }, null);
    setState((s) => {
      const n = new Map(s);
      n.delete(idea.id);
      return n;
    });
  }

  function toggleSpeech() {
    if (!current) return;
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }
    setSpeaking(true);
    void logEvent({ ideaId: current.id, type: 'listen', origin: 'pill' });
    speak(current.title, current.body, () => setSpeaking(false));
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (view !== 'read' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight') card.current?.fling('right');
      else if (e.key === 'ArrowLeft') card.current?.fling('left');
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [view]);

  const saved = useMemo(
    () =>
      (ideas ?? [])
        .filter((i) => state.get(i.id)?.status === 'saved')
        .sort((a, b) => state.get(b.id)!.at.localeCompare(state.get(a.id)!.at)),
    [ideas, state],
  );

  return (
    <div className="mx-auto flex h-full max-w-lg flex-col px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
      <header className="flex items-center justify-between pb-3">
        <h1 className="text-lg font-semibold">Nòus</h1>
        <nav className="flex rounded-full bg-stone-200/70 p-1 text-sm dark:bg-stone-800">
          <Tab active={view === 'read'} onClick={() => setView('read')}>
            Pillola{currentCard && <span className="ml-1 text-stone-500">{position + 1}/{cards.length}</span>}
          </Tab>
          <Tab active={view === 'themes'} onClick={() => setView('themes')}>
            Temi{interests.length > 0 && <span className="ml-1 text-stone-500">{interests.length}</span>}
          </Tab>
          <Tab active={view === 'library'} onClick={() => setView('library')}>
            Salvate{saved.length > 0 && <span className="ml-1 text-stone-500">{saved.length}</span>}
          </Tab>
        </nav>
      </header>

      <main className="relative min-h-0 flex-1">
        {error ? (
          <Message title="Libreria non disponibile">{error}. Controlla di aver generato ideas.json con «npm run index».</Message>
        ) : !ideas ? (
          <Message title="Carico le idee…" />
        ) : view === 'themes' ? (
          <Themes selected={interests} counts={themeCounts} onChange={onInterestsChange} />
        ) : view === 'library' ? (
          <Library ideas={saved} onUnsave={onUnsave} ideasVersion={ideasVersion} />
        ) : current ? (
          <>
            {position < cards.length - 1 && <div aria-hidden className="absolute inset-x-3 top-3 bottom-0 rounded-3xl border border-stone-200 bg-white/70 dark:border-stone-800 dark:bg-stone-900/70" />}
            <SwipeCard key={current.id} ref={card} idea={current} reason={reasonText(currentCard.reason)} onSwipe={onSwipe}>
              <div className="flex items-center justify-between gap-3 border-t border-stone-100 px-4 py-3 dark:border-stone-800">
                <ActionButton label="Scarta" tone="rose" onClick={() => card.current?.fling('left')}>←</ActionButton>
                {speechSupported && (
                  <button type="button" onClick={toggleSpeech} aria-pressed={speaking} className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800">
                    {speaking ? '\u25A0\uFE0E Ferma' : '\u25B6\uFE0E Ascolta'}
                  </button>
                )}
                <ActionButton label="Salva" tone="emerald" onClick={() => card.current?.fling('right')}>→</ActionButton>
              </div>
            </SwipeCard>
          </>
        ) : remainingPool === 0 ? (
          <Message title="Hai letto tutto">Le prossime idee arriveranno con la prossima distillazione.</Message>
        ) : (
          <Message title="Per oggi hai finito">
            {pill && pill.round > 1 ? `Pillola ${pill.round} di oggi completata.` : 'Domani una pillola nuova, scelta su quello che hai salvato oggi.'}
            <button type="button" onClick={() => ideas && void newPill(ideas, state, (pill?.round ?? 1) + 1, interests)} className="mt-6 block w-full text-sm text-stone-500 underline underline-offset-4">
              Un'altra pillola
            </button>
          </Message>
        )}
      </main>

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-[calc(max(1rem,env(safe-area-inset-bottom))+5.5rem)] flex justify-center px-4">
        {undo && (
          <div className="pointer-events-auto flex items-center gap-4 rounded-full bg-stone-900 px-5 py-3 text-sm text-white shadow-lg dark:bg-stone-100 dark:text-stone-900">
            <span>{undo.dir === 'right' ? 'Salvata' : 'Scartata'}</span>
            <button type="button" onClick={onUndo} className="font-semibold text-amber-400 dark:text-amber-600">Annulla</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Tab({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-current={active ? 'page' : undefined} className={`rounded-full px-3 py-1 ${active ? 'bg-white shadow-sm dark:bg-stone-950' : 'text-stone-600 dark:text-stone-400'}`}>
      {children}
    </button>
  );
}

function ActionButton({ label, tone, onClick, children }: { label: string; tone: 'rose' | 'emerald'; onClick: () => void; children: React.ReactNode }) {
  const color = tone === 'rose' ? 'text-rose-600 border-rose-200 hover:bg-rose-50 dark:border-rose-900 dark:hover:bg-rose-950' : 'text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:border-emerald-900 dark:hover:bg-emerald-950';
  return (
    <button type="button" onClick={onClick} aria-label={label} title={`${label} (freccia ${tone === 'rose' ? 'sinistra' : 'destra'})`} className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl ${color}`}>
      {children}
    </button>
  );
}

function Message({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
      <p className="text-lg font-semibold">{title}</p>
      {children && <div className="mt-2 text-sm text-stone-500">{children}</div>}
    </div>
  );
}
