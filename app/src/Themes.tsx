import { Check } from 'lucide-react';
import { useState } from 'react';
import { hueStyle, themeIcon } from './ThemeChip';
import { MAX_THEMES, THEMES, themeLabel } from './themes';

interface Props {
  selected: string[];
  counts: Map<string, number>; // idee in libreria per tema
  onChange: (topics: string[]) => void;
  firstRun: boolean; // primo accesso: benvenuto in cima
  onDone: () => void; // alla pillola
}

export function Themes({ selected, counts, onChange, firstRun, onDone }: Props) {
  const [notice, setNotice] = useState('');
  const full = selected.length >= MAX_THEMES;

  function toggle(id: string) {
    if (selected.includes(id)) {
      setNotice('');
      onChange(selected.filter((t) => t !== id));
    } else if (full) {
      // Niente pill disabilitate: resterebbero fuori dalla tastiera e senza spiegazione.
      setNotice(`Hai già ${MAX_THEMES} temi: togline uno per aggiungere ${themeLabel(id)}.`);
    } else {
      setNotice('');
      onChange([...selected, id]);
    }
  }

  const waiting = selected.filter((t) => !counts.get(t));

  return (
    <div className="h-full overflow-y-auto pb-6">
      {firstRun && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Benvenuto in Nòus</h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Ogni giorno una pillola di idee da leggere in pochi minuti, e qualche ripasso di quelle che ti sono piaciute. Per cominciare, scegli
            cosa ti interessa: potrai cambiarlo quando vuoi da qui.
          </p>
        </div>
      )}
      <fieldset>
        <legend className="text-xl font-semibold">I tuoi temi</legend>
        <p id="themes-hint" className="mt-1 text-sm text-stone-500">
          Scegline fino a {MAX_THEMES}: la pillola pescherà da qui.{' '}
          <span className="font-medium text-stone-700 tabular-nums dark:text-stone-300">
            {selected.length}/{MAX_THEMES}
          </span>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {THEMES.map((t) => {
            const Icon = themeIcon(t.id);
            const checked = selected.includes(t.id);
            const n = counts.get(t.id) ?? 0;
            return (
              <label key={t.id} className="theme-pill" style={hueStyle(t.id)} data-checked={checked} data-dimmed={full && !checked}>
                <input type="checkbox" name="temi" value={t.id} checked={checked} onChange={() => toggle(t.id)} aria-describedby="themes-hint" className="sr-only" />
                <Icon aria-hidden className="size-[1.15rem] shrink-0" strokeWidth={1.75} />
                <span>{t.label}</span>
                {n > 0 && (
                  <span className="text-xs tabular-nums opacity-70" aria-label={`${n} idee`}>
                    {n}
                  </span>
                )}
                {checked && <Check aria-hidden className="-mr-1 size-4 shrink-0" strokeWidth={2.5} />}
              </label>
            );
          })}
        </div>
      </fieldset>

      <p aria-live="polite" className="mt-6 min-h-5 text-center text-sm text-amber-700 dark:text-amber-500">
        {notice}
      </p>

      <div className="mt-2 space-y-3 text-center text-sm text-stone-500">
        {selected.length === 0 ? (
          <p>Nessun tema scelto: la pillola pesca da tutti.</p>
        ) : (
          <button type="button" onClick={() => { setNotice(''); onChange([]); }} className="underline underline-offset-4">
            Togli tutti
          </button>
        )}
        {waiting.length > 0 && (
          <p>
            Per {waiting.map(themeLabel).join(', ')} non ci sono ancora idee: arriveranno con le prossime distillazioni. Intanto la pillola si
            completa con gli altri temi.
          </p>
        )}
      </div>

      <button type="button" onClick={onDone} className="mt-8 min-h-12 w-full rounded-2xl bg-stone-900 px-4 py-3 font-medium text-white dark:bg-stone-100 dark:text-stone-900">
        {firstRun ? 'Inizia' : 'Vai alla pillola'}
      </button>
    </div>
  );
}
