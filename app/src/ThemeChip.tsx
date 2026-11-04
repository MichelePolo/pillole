import { Atom, BookOpen, Brain, ChartLine, Clapperboard, Cpu, Dna, Hourglass, Landmark, Music, Palette, Sigma, Sparkles, type LucideIcon } from 'lucide-react';
import { themeHue, themeLabel } from './themes';

// Icona e colore di ogni tema: gli stessi nel cloud dei temi, sulle card e tra le salvate,
// così chi legge riconosce l'argomento a colpo d'occhio.
const ICONS: Record<string, LucideIcon> = {
  ai: Sparkles,
  filosofia: Landmark,
  tecnologia: Cpu,
  fisica: Atom,
  matematica: Sigma,
  biologia: Dna,
  psicologia: Brain,
  storia: Hourglass,
  economia: ChartLine,
  letteratura: BookOpen,
  arte: Palette,
  cinema: Clapperboard,
  musica: Music,
};

export const themeIcon = (id: string): LucideIcon => ICONS[id] ?? Sparkles;

// --h per le classi .theme-pill e .theme-chip di index.css.
export const hueStyle = (id: string) => ({ '--h': themeHue(id) }) as React.CSSProperties;

// Etichette di sola lettura con i temi di un'idea (uno o due).
export function ThemeChips({ topics, className = '' }: { topics: string[]; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap gap-1.5 ${className}`}>
      {topics.map((t) => {
        const Icon = themeIcon(t);
        return (
          <span key={t} className="theme-chip" style={hueStyle(t)}>
            <Icon aria-hidden className="size-3.5 shrink-0" strokeWidth={2} />
            {themeLabel(t)}
          </span>
        );
      })}
    </span>
  );
}
