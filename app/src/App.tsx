import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { loadState, logEvent, record, type IdeaState } from './db';
import { Library } from './Library';
import { orderQueue } from './queue';
import { speak, speechSupported, stopSpeaking } from './speech';
import { SwipeCard, type Direction, type SwipeCardHandle } from './SwipeCard';
import type { Idea, IdeasFile } from './types';

const UNDO_MS = 5000;

type View = 'read' | 'library';
interface Undo { idea: Idea; dir: Direction; timer: number }

export function App() {
  const [ideas, setIdeas] = useState<Idea[] | null>(null);
  const [state, setState] = useState<Map<string, IdeaState>>(new Map());
  const [queue, setQueue] = useState<Idea[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<View>('read');
  const [undo, setUndo] = useState<Undo | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const card = useRef<SwipeCardHandle>(null);
  const shownAt = useRef(performance.now());

  useEffect(() => {
    Promise.all([fetch('./ideas.json').then((r) => r.json() as Promise<IdeasFile>), loadState()])
      .then(([file, st]) => {
        setIdeas(file.ideas);
        setState(st);
        // L'ordine si decide una volta all'apertura: non cambia sotto le dita a ogni swipe.
        setQueue(orderQueue(file.ideas.filter((i) => !st.has(i.id))));
      })
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  const current = queue[0];

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
      setQueue((q) => q.slice(1));
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
    setQueue((q) => [undo.idea, ...q]);
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
        <h1 className="text-lg font-semibold">Pillole</h1>
        <nav className="flex rounded-full bg-stone-200/70 p-1 text-sm dark:bg-stone-800">
          <Tab active={view === 'read'} onClick={() => setView('read')}>
            Leggi{queue.length > 0 && <span className="ml-1 text-stone-500">{queue.length}</span>}
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
        ) : view === 'library' ? (
          <Library ideas={saved} onUnsave={onUnsave} />
        ) : current ? (
          <>
            {queue[1] && <div aria-hidden className="absolute inset-x-3 top-3 bottom-0 rounded-3xl border border-stone-200 bg-white/70 dark:border-stone-800 dark:bg-stone-900/70" />}
            <SwipeCard key={current.id} ref={card} idea={current} onSwipe={onSwipe}>
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
        ) : (
          <Message title="Hai letto tutto">Le prossime idee arriveranno con la prossima distillazione.</Message>
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
      {children && <p className="mt-2 text-sm text-stone-500">{children}</p>}
    </div>
  );
}
