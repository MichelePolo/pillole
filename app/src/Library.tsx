import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { logEvent } from './db';
import { exportData } from './exportData';
import { Markdown } from './markdown';
import { QuizCard } from './QuizCard';
import { gradeLabel, type ReviewItem } from './reviews';
import { ThemeChips } from './ThemeChip';
import type { Idea } from './types';

const PAGE_SIZE = 10;

const shortDate = (ms: number) => new Date(ms).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' });

interface Props {
  ideas: Idea[];
  onUnsave: (idea: Idea) => void;
  ideasVersion: string;
  reviews: Map<string, ReviewItem>;
}

// Le idee salvate, dalla più recente, a pagine. Aprirne una da qui è una riapertura spontanea
// (origin 'library'): è la metrica guida della sezione 13. Da un'idea già ripassata si apre
// anche la card del ripasso, in sola lettura: un voto da qui sposterebbe la pianificazione.
export function Library({ ideas, onUnsave, ideasVersion, reviews }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [quiz, setQuiz] = useState<Idea | null>(null);
  const [exported, setExported] = useState<string | null>(null);
  const list = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const pages = Math.max(1, Math.ceil(ideas.length / PAGE_SIZE));
  const current = Math.min(page, pages - 1); // togliere idee può accorciare la lista
  const shown = ideas.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE);

  useEffect(() => {
    if (quiz) dialog.current?.showModal();
  }, [quiz]);

  async function onExport() {
    try {
      const n = await exportData(ideasVersion);
      setExported(`Esportati ${n} eventi`);
    } catch (e) {
      setExported(`Esportazione non riuscita: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  const exportBar = (
    <div className="flex items-center justify-between px-1 pt-4 pb-2 text-sm text-stone-500">
      <span aria-live="polite">{exported}</span>
      <button type="button" onClick={() => void onExport()} className="underline underline-offset-4">
        Esporta dati
      </button>
    </div>
  );

  if (ideas.length === 0) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
          <p className="text-lg font-semibold">Nessuna idea salvata</p>
          <p className="mt-2 text-sm text-stone-500">Fai swipe a destra su una card per salvarla qui.</p>
        </div>
        {exportBar}
      </div>
    );
  }

  function toggle(idea: Idea) {
    const next = open === idea.id ? null : idea.id;
    setOpen(next);
    if (next) void logEvent({ ideaId: idea.id, type: 'open', origin: 'library' });
  }

  function goTo(p: number) {
    setPage(p);
    setOpen(null);
    list.current?.scrollTo({ top: 0 });
  }

  const quizItem = quiz ? reviews.get(quiz.id) : undefined;

  return (
    <div ref={list} className="h-full overflow-y-auto pb-24">
      <ul className="space-y-2">
        {shown.map((idea) => {
          const last = reviews.get(idea.id)?.last;
          return (
            <li key={idea.id} className="rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
              <button type="button" onClick={() => toggle(idea)} aria-expanded={open === idea.id} className="w-full px-4 py-3 text-left">
                <span className="mb-1.5 flex flex-wrap items-center gap-1.5">
                  <ThemeChips topics={idea.topics} />
                  {last && (
                    <span className="reviewed-chip" title={`Ultimo ripasso il ${shortDate(last.at)}: ${gradeLabel(last.rating)}`}>
                      <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
                      Ripassata
                    </span>
                  )}
                </span>
                <span className="block font-medium">{idea.title}</span>
              </button>
              {open === idea.id && (
                <div className="px-4 pb-4">
                  <Markdown source={idea.body} className="leading-relaxed" />
                  {last && (
                    <button type="button" onClick={() => setQuiz(idea)} className="mt-4 w-full rounded-xl border border-stone-200 px-4 py-2.5 text-left text-sm dark:border-stone-700">
                      <span className="font-medium">Apri il ripasso</span>
                      <span className="block text-stone-500">
                        Ripassata il {shortDate(last.at)} · {gradeLabel(last.rating)}
                      </span>
                    </button>
                  )}
                  <div className="mt-3 flex items-center justify-between text-sm text-stone-500">
                    {idea.source.url ? (
                      <a href={idea.source.url} target="_blank" rel="noopener noreferrer" className="truncate underline underline-offset-2">{idea.source.title}</a>
                    ) : (
                      <span className="truncate">{idea.source.title}</span>
                    )}
                    <button type="button" onClick={() => onUnsave(idea)} className="ml-3 shrink-0 text-rose-600">Rimuovi</button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {pages > 1 && (
        <nav aria-label="Pagine delle salvate" className="mt-4 flex items-center justify-between text-sm">
          <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0} className="min-h-11 rounded-full px-4 font-medium disabled:opacity-40">
            ‹ Più recenti
          </button>
          <span className="text-stone-500 tabular-nums" aria-current="page">
            {current + 1} di {pages}
          </span>
          <button type="button" onClick={() => goTo(current + 1)} disabled={current === pages - 1} className="min-h-11 rounded-full px-4 font-medium disabled:opacity-40">
            Meno recenti ›
          </button>
        </nav>
      )}

      {exportBar}

      <dialog ref={dialog} onClose={() => setQuiz(null)} aria-label="Ripasso" className="m-auto h-[min(44rem,90dvh)] w-[min(32rem,92vw)] bg-transparent p-0 text-stone-900 backdrop:bg-stone-950/60 dark:text-stone-100">
        {quiz && quizItem?.last && (
          <QuizCard
            idea={quiz}
            label={`Ripassata il ${shortDate(quizItem.last.at)} · ${gradeLabel(quizItem.last.rating)}`}
            info={`Prossimo ripasso: ${shortDate(quizItem.card.due.getTime())}`}
            onClose={() => dialog.current?.close()}
          />
        )}
      </dialog>
    </div>
  );
}
