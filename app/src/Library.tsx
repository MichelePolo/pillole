import { useState } from 'react';
import { logEvent } from './db';
import { exportData } from './exportData';
import { Markdown } from './markdown';
import { ThemeChips } from './ThemeChip';
import type { Idea } from './types';

// Le idee salvate, dalla più recente. Aprirne una da qui è una riapertura spontanea
// (origin 'library'): è la metrica guida della sezione 13.
export function Library({ ideas, onUnsave, ideasVersion }: { ideas: Idea[]; onUnsave: (idea: Idea) => void; ideasVersion: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const [exported, setExported] = useState<string | null>(null);

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

  return (
    <div className="h-full overflow-y-auto pb-24">
      <ul className="space-y-2">
        {ideas.map((idea) => (
          <li key={idea.id} className="rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
            <button type="button" onClick={() => toggle(idea)} aria-expanded={open === idea.id} className="w-full px-4 py-3 text-left">
              <ThemeChips topics={idea.topics} className="mb-1.5" />
              <span className="block font-medium">{idea.title}</span>
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
      {exportBar}
    </div>
  );
}
