// Vocabolario chiuso: il distillatore può usare solo queste etichette.
// Aggiungi voci con parsimonia, altrimenti le Beta del profilo si frammentano.
// Ogni argomento deve avere un tema in app/src/themes.ts (etichetta, colore, icona):
// build-index lo controlla.

export const TOPICS = [
  'ai',
  'filosofia',
  'tecnologia',
  'fisica',
  'matematica',
  'biologia',
  'psicologia',
  'storia',
  'economia',
  'letteratura',
  'arte',
  'cinema',
  'musica',
] as const;

export type Topic = (typeof TOPICS)[number];

// I sotto-argomenti finiscono tutti nello stesso spazio di chiavi del profilo ("s:…"): devono essere unici.
export const SUBTOPICS = {
  ai: ['agenti', 'modelli-linguistici', 'sicurezza-allineamento', 'ai-e-lavoro', 'normativa-ai'],
  filosofia: ['etica', 'filosofia-della-mente', 'epistemologia', 'stoicismo', 'filosofia-della-tecnica'],
  tecnologia: ['architettura-software', 'storia-informatica', 'infrastrutture', 'privacy-sicurezza'],
  fisica: ['meccanica-quantistica', 'relativita', 'cosmologia-astrofisica', 'termodinamica'],
  matematica: ['logica-fondamenti', 'probabilita-statistica', 'teoria-dei-numeri', 'geometria-topologia'],
  biologia: ['evoluzione', 'genetica', 'neuroscienze', 'ecologia'],
  psicologia: ['bias-cognitivi', 'apprendimento-memoria', 'abitudini-motivazione', 'psicologia-sociale'],
  storia: ['storia-antica', 'storia-moderna', 'storia-contemporanea', 'storia-della-scienza'],
  economia: ['economia-comportamentale', 'macroeconomia', 'teoria-dei-giochi', 'storia-economica'],
  letteratura: ['narrativa', 'poesia', 'classici', 'saggistica'],
  arte: ['pittura-scultura', 'architettura', 'fotografia', 'arte-contemporanea'],
  cinema: ['regia', 'storia-del-cinema', 'linguaggio-cinematografico', 'documentario'],
  musica: ['teoria-musicale', 'storia-della-musica', 'ascolto-interpretazione'],
} as const satisfies Record<Topic, readonly string[]>;

export type Subtopic = (typeof SUBTOPICS)[Topic][number] | 'altro';

// Una tupla non vuota (z.enum la richiede): per questo "altro" sta in testa.
export const ALL_SUBTOPICS: [Subtopic, ...Subtopic[]] = ['altro', ...(Object.values(SUBTOPICS).flat() as Subtopic[])];

export const KINDS = ['concetto', 'metodo', 'citazione', 'storia', 'dato'] as const;

export const LANGS = ['it', 'en'] as const;

export type Kind = (typeof KINDS)[number];
export type Lang = (typeof LANGS)[number];
