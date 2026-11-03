import { useState } from 'react';
import { logEvent } from './db';
import { Markdown } from './markdown';
import type { Idea } from './types';

// Le idee salvate, dalla più recente. Aprirne una da qui è una riapertura spontanea
// (origin 'library'): è la metrica guida della sezione 13.
export function Library({ ideas, onUnsave }: { ideas: Idea[]; onUnsave: (idea: Idea) => void }) {
  const [open, setOpen] = useState<string | null>(null);

  if (ideas.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-8 text-center">
        <p className="text-lg font-semibold">Nessuna idea salvata</p>
        <p className="mt-2 text-sm text-stone-500">Fai swipe a destra su una card per salvarla qui.</p>
      </div>
    );
  }

  function toggle(idea: Idea) {
    const next = open === idea.id ? null : idea.id;
    setOpen(next);
    if (next) void logEvent({ ideaId: idea.id, type: 'open', origin: 'library' });
  }

  return (
    <ul className="h-full space-y-2 overflow-y-auto pb-24">
      {ideas.map((idea) => (
        <li key={idea.id} className="rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          <button type="button" onClick={() => toggle(idea)} aria-expanded={open === idea.id} className="w-full px-4 py-3 text-left font-medium">
            {idea.title}
          </button>
          {open === idea.id && (
            <div className="px-4 pb-4">
              <Markdown source={idea.body} className="leading-relaxed" />
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
      ))}
    </ul>
  );
}
