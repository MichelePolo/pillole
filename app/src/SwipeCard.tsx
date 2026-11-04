import { useImperativeHandle, useRef, useState, type Ref } from 'react';
import { Markdown } from './markdown';
import { ThemeChips } from './ThemeChip';
import type { Idea } from './types';

export type Direction = 'left' | 'right'; // destra salva, sinistra scarta

export interface SwipeCardHandle {
  fling: (dir: Direction) => void; // per pulsanti e tastiera
}

const COMMIT_RATIO = 0.35; // frazione della larghezza oltre cui lo swipe conta
const COMMIT_VELOCITY = 0.6; // px/ms: uno swipe veloce conta anche se corto
const INTENT_PX = 10; // movimento minimo prima di decidere se è orizzontale

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface Props {
  idea: Idea;
  onSwipe: (dir: Direction) => void;
  reason?: string; // perché la card è nella pillola: "simile a…", "esplorazione"…
  ref?: Ref<SwipeCardHandle>;
  children?: React.ReactNode; // barra delle azioni dentro la card
}

export function SwipeCard({ idea, onSwipe, reason, ref, children }: Props) {
  const el = useRef<HTMLElement>(null);
  const drag = useRef<{ id: number; x: number; y: number; t: number; horizontal: boolean | null } | null>(null);
  const [dx, setDx] = useState(0);
  const [leaving, setLeaving] = useState<Direction | null>(null);
  const [animating, setAnimating] = useState(false);

  const width = () => el.current?.offsetWidth ?? 360;
  const subtopics = idea.subtopics.filter((s) => s !== 'altro');

  function fling(dir: Direction) {
    if (leaving) return;
    setAnimating(true);
    setLeaving(dir);
    setDx((dir === 'right' ? 1 : -1) * window.innerWidth * 1.2);
    window.setTimeout(() => onSwipe(dir), reducedMotion() ? 0 : 220);
  }

  useImperativeHandle(ref, () => ({ fling }));

  function onPointerDown(e: React.PointerEvent) {
    if (leaving || (e.target as HTMLElement).closest('button, a')) return;
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, t: e.timeStamp, horizontal: null };
    setAnimating(false);
  }

  function onPointerMove(e: React.PointerEvent) {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const mx = e.clientX - d.x;
    const my = e.clientY - d.y;
    if (d.horizontal === null) {
      if (Math.hypot(mx, my) < INTENT_PX) return;
      d.horizontal = Math.abs(mx) > Math.abs(my);
      if (!d.horizontal) return (drag.current = null), undefined; // scorrimento verticale: lo lascio al browser
      el.current?.setPointerCapture(e.pointerId);
    }
    setDx(mx);
  }

  function onPointerUp(e: React.PointerEvent) {
    const d = drag.current;
    drag.current = null;
    if (!d || d.id !== e.pointerId || !d.horizontal) return;
    const mx = e.clientX - d.x;
    const velocity = Math.abs(mx) / Math.max(1, e.timeStamp - d.t);
    if (Math.abs(mx) > width() * COMMIT_RATIO || (velocity > COMMIT_VELOCITY && Math.abs(mx) > 40)) {
      fling(mx > 0 ? 'right' : 'left');
    } else {
      setAnimating(true);
      setDx(0); // torna al centro
    }
  }

  function onPointerCancel() {
    drag.current = null;
    setAnimating(true);
    setDx(0);
  }

  const progress = Math.min(1, Math.abs(dx) / (width() * COMMIT_RATIO));
  const transition = animating && !reducedMotion() ? 'transform 220ms ease-out' : 'none';

  return (
    <article
      ref={el}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      aria-label={idea.title}
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl select-none dark:border-stone-800 dark:bg-stone-900"
      style={{ transform: `translateX(${dx}px) rotate(${dx / 25}deg)`, transition, touchAction: 'pan-y' }}
    >
      <Stamp side="right" label="Salva" opacity={dx > 0 ? progress : 0} />
      <Stamp side="left" label="Scarta" opacity={dx < 0 ? progress : 0} />

      {/* touch-action vale solo fino al contenitore scorrevole più vicino: senza pan-y qui,
          il browser si prende lo swipe orizzontale e manda pointercancel. */}
      <div className="flex-1 touch-pan-y overflow-y-auto overscroll-contain px-6 pt-6 pb-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <ThemeChips topics={idea.topics} />
          {idea.sourceLang !== 'it' && <span className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-500 dark:bg-stone-800">dall'{idea.sourceLang === 'en' ? 'inglese' : idea.sourceLang}</span>}
        </div>
        {subtopics.length > 0 && <p className="mt-2 text-xs font-medium tracking-wide text-stone-500 uppercase">{subtopics.map((s) => s.replace(/-/g, ' ')).join(' · ')}</p>}
        {reason && <p className="mt-1 text-xs text-amber-700 dark:text-amber-500">{reason}</p>}
        <h2 className="mt-3 text-2xl leading-tight font-semibold text-balance">{idea.title}</h2>
        <Markdown source={idea.body} className="mt-4 text-[1.05rem] leading-relaxed" />
        <p className="mt-6 text-sm text-stone-500">
          {idea.source.url ? (
            <a href={idea.source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-stone-300 underline-offset-2">
              {idea.source.title}
            </a>
          ) : (
            idea.source.title
          )}
          {idea.source.author && ` — ${idea.source.author}`}
        </p>
      </div>
      {children}
    </article>
  );
}

function Stamp({ side, label, opacity }: { side: Direction; label: string; opacity: number }) {
  const color = side === 'right' ? 'border-emerald-500 text-emerald-600' : 'border-rose-500 text-rose-600';
  const pos = side === 'right' ? 'left-6 -rotate-12' : 'right-6 rotate-12';
  return (
    <span aria-hidden className={`pointer-events-none absolute top-6 z-10 rounded-lg border-4 px-3 py-1 text-xl font-bold uppercase ${color} ${pos}`} style={{ opacity }}>
      {label}
    </span>
  );
}
