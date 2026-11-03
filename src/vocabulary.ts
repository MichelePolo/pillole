// Vocabolario chiuso: il distillatore può usare solo queste etichette.
// Aggiungi voci con parsimonia, altrimenti le Beta del profilo si frammentano.

export const TOPICS = ['ai', 'filosofia', 'tecnologia'] as const;

export const SUBTOPICS = {
  ai: ['agenti', 'modelli-linguistici', 'sicurezza-allineamento', 'ai-e-lavoro', 'normativa-ai'],
  filosofia: ['etica', 'filosofia-della-mente', 'epistemologia', 'stoicismo', 'filosofia-della-tecnica'],
  tecnologia: ['architettura-software', 'storia-informatica', 'infrastrutture', 'privacy-sicurezza'],
} as const;

export const ALL_SUBTOPICS = [...SUBTOPICS.ai, ...SUBTOPICS.filosofia, ...SUBTOPICS.tecnologia, 'altro'] as const;

export const KINDS = ['concetto', 'metodo', 'citazione', 'storia', 'dato'] as const;

export const LANGS = ['it', 'en'] as const;

export type Topic = (typeof TOPICS)[number];
export type Subtopic = (typeof ALL_SUBTOPICS)[number];
export type Kind = (typeof KINDS)[number];
export type Lang = (typeof LANGS)[number];
