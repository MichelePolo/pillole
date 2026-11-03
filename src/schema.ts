import { z } from 'zod';
import { ALL_SUBTOPICS, KINDS, LANGS, TOPICS } from './vocabulary.js';

// Schema JSON inviato all'API in output_config.format (structured outputs).
// Niente minLength/maxLength/maxItems: l'API non li supporta; i limiti di lunghezza
// sono nel prompt e controllati dopo, come avvisi.
export const OUTPUT_JSON_SCHEMA = {
  type: 'object',
  properties: {
    source_lang: { type: 'string', enum: [...LANGS], description: 'Lingua del testo della fonte (le idee sono sempre in italiano)' },
    verdict: {
      type: 'string',
      enum: ['ideas', 'no_durable_ideas'],
      description: "no_durable_ideas se la fonte non contiene niente che resti vero tra un anno",
    },
    ideas: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'Affermazione in italiano di massimo 8 parole' },
          body: { type: 'string', description: 'Prosa in italiano di 60-120 parole, un solo concetto' },
          kind: { type: 'string', enum: [...KINDS] },
          anchor: { type: 'string', description: 'Frase copiata alla lettera dalla fonte, nella sua lingua originale, 5-25 parole' },
          topics: { type: 'array', items: { type: 'string', enum: [...TOPICS] } },
          subtopics: { type: 'array', items: { type: 'string', enum: [...ALL_SUBTOPICS] } },
          quiz_question: { type: 'string' },
          quiz_answer: { type: 'string' },
        },
        required: ['title', 'body', 'kind', 'anchor', 'topics', 'subtopics', 'quiz_question', 'quiz_answer'],
        additionalProperties: false,
      },
    },
  },
  required: ['source_lang', 'verdict', 'ideas'],
  additionalProperties: false,
} as const;

// Validazione locale con Zod: ultima linea di difesa dopo il vincolo dello schema.
const IdeaDraft = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  kind: z.enum(KINDS),
  anchor: z.string(),
  topics: z.array(z.enum(TOPICS)).min(1),
  subtopics: z.array(z.enum(ALL_SUBTOPICS)).min(1),
  quiz_question: z.string().min(1),
  quiz_answer: z.string().min(1),
});

export const DistillOutput = z.object({
  source_lang: z.enum(LANGS),
  verdict: z.enum(['ideas', 'no_durable_ideas']),
  ideas: z.array(IdeaDraft),
});

export type IdeaDraft = z.infer<typeof IdeaDraft>;
export type DistillOutput = z.infer<typeof DistillOutput>;

// Lo schema non garantisce le maiuscole dei valori enum: normalizziamo prima di validare.
export function normalizeRaw(raw: unknown): unknown {
  if (!raw || typeof raw !== 'object') return raw;
  const o = raw as Record<string, unknown>;
  const lower = (v: unknown) => (typeof v === 'string' ? v.trim().toLowerCase() : v);
  const lowerArr = (v: unknown) => (Array.isArray(v) ? [...new Set(v.map(lower))] : v);
  return {
    ...o,
    source_lang: lower(o.source_lang),
    verdict: lower(o.verdict),
    ideas: Array.isArray(o.ideas)
      ? o.ideas.map((i) => {
          const idea = i as Record<string, unknown>;
          return { ...idea, kind: lower(idea.kind), topics: lowerArr(idea.topics), subtopics: lowerArr(idea.subtopics) };
        })
      : o.ideas,
  };
}

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

// Controlli "morbidi": non scartano l'idea, la segnalano in revisione.
export function softWarnings(idea: IdeaDraft): string[] {
  const w: string[] = [];
  const t = words(idea.title);
  const b = words(idea.body);
  if (t > 8) w.push(`titolo di ${t} parole (max 8)`);
  if (b < 60 || b > 120) w.push(`corpo di ${b} parole (60-120)`);
  if (idea.topics.length > 2) w.push(`${idea.topics.length} argomenti (max 2)`);
  if (idea.subtopics.length > 3) w.push(`${idea.subtopics.length} sotto-argomenti (max 3)`);
  if (/<[a-z][\s\S]*>/i.test(idea.body)) w.push('HTML nel corpo');
  if (/^\s*([-*]|\d+\.)\s/m.test(idea.body)) w.push('elenco nel corpo');
  return w;
}
