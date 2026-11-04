import { RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Markdown } from './markdown';
import { formatInterval, GRADES } from './reviews';
import { ThemeChips } from './ThemeChip';
import type { Idea } from './types';

// La card di ripasso: domanda, poi la risposta a richiesta, poi il voto.
// Prima si prova a ricordare (è il recupero che fissa il ricordo), solo dopo si rilegge l'idea.
// Senza onGrade è in sola lettura (aperta dalle salvate): al posto dei voti, info e "Chiudi".

interface Props {
  idea: Idea;
  label: string; // "Ti era piaciuto", "Ti ricordi?" o, dalle salvate, l'ultimo voto
  intervals?: Record<number, number>; // giorni al prossimo ripasso per ogni voto
  onGrade?: (rating: 1 | 2 | 3 | 4) => void;
  info?: string; // sola lettura: per esempio "prossimo ripasso il 7 novembre"
  onClose?: () => void;
}

export function QuizCard({ idea, label, intervals = {}, onGrade, info, onClose }: Props) {
  const [revealed, setRevealed] = useState(false);

  // Tastiera: spazio o invio scoprono la risposta, poi 1-4 danno il voto.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || (e.target instanceof Element && e.target.closest('a, input, textarea'))) return;
      if (!revealed && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        setRevealed(true);
      } else if (revealed && onGrade && ['1', '2', '3', '4'].includes(e.key)) {
        onGrade(Number(e.key) as 1 | 2 | 3 | 4);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [revealed, onGrade]);

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl dark:border-stone-800 dark:bg-stone-900">
      <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-6 pb-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="review-chip">
            <RotateCcw aria-hidden className="size-3.5" strokeWidth={2} />
            Ripasso
          </span>
          <ThemeChips topics={idea.topics} />
        </div>
        <p className="mt-2 text-xs text-amber-700 dark:text-amber-500">{label}</p>

        <h2 className="mt-3 text-2xl leading-tight font-semibold text-balance">{idea.quiz.q}</h2>

        {revealed && (
          <>
            <div className="mt-5 rounded-2xl bg-stone-100 px-4 py-3 dark:bg-stone-800">
              <p className="text-xs font-medium tracking-wide text-stone-500 uppercase">Risposta</p>
              <p className="mt-1 text-[1.05rem] leading-relaxed">{idea.quiz.a}</p>
            </div>
            <div className="mt-6 border-t border-stone-100 pt-4 dark:border-stone-800">
              <p className="font-semibold">{idea.title}</p>
              <Markdown source={idea.body} className="mt-2 leading-relaxed text-stone-600 dark:text-stone-400" />
              <p className="mt-4 text-sm text-stone-500">
                {idea.source.url ? (
                  <a href={idea.source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-stone-300 underline-offset-2">
                    {idea.source.title}
                  </a>
                ) : (
                  idea.source.title
                )}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="border-t border-stone-100 px-3 py-3 dark:border-stone-800">
        {revealed && !onGrade ? (
          <div className="flex items-center justify-between gap-3 px-2">
            <p className="text-sm text-stone-500">{info}</p>
            <button type="button" onClick={onClose} className="min-h-12 shrink-0 rounded-2xl border border-stone-200 px-5 font-medium dark:border-stone-700">
              Chiudi
            </button>
          </div>
        ) : revealed && onGrade ? (
          <div role="group" aria-label="Quanto ricordavi?" className="grid grid-cols-4 gap-2">
            {GRADES.map((g, k) => (
              <button
                key={g.rating}
                type="button"
                onClick={() => onGrade(g.rating)}
                title={`${g.label} (tasto ${k + 1})`}
                className={`flex min-h-14 flex-col items-center justify-center rounded-2xl border px-1 py-2 text-sm leading-tight font-medium ${k === 0 ? 'border-rose-200 text-rose-700 dark:border-rose-900 dark:text-rose-400' : k === 2 ? 'border-emerald-300 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400' : 'border-stone-200 text-stone-700 dark:border-stone-700 dark:text-stone-300'}`}
              >
                {g.label}
                <span className="mt-0.5 text-xs font-normal text-stone-500">{formatInterval(intervals[g.rating] ?? 1)}</span>
              </button>
            ))}
          </div>
        ) : (
          <button type="button" onClick={() => setRevealed(true)} className="min-h-12 w-full rounded-2xl bg-stone-900 px-4 py-3 font-medium text-white dark:bg-stone-100 dark:text-stone-900">
            Mostra la risposta
          </button>
        )}
      </div>
    </article>
  );
}
