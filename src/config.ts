import { existsSync } from 'node:fs';
import path from 'node:path';

// Carica ANTHROPIC_API_KEY e le altre variabili da .env (Node >= 20.12).
if (existsSync('.env')) process.loadEnvFile('.env');

export const MODEL = process.env.PILLOLE_MODEL ?? 'claude-haiku-5-5';

// Cambia questa stringa ogni volta che modifichi il prompt in prompt.ts:
// la revisione calcola il tasso di scarto separatamente per ogni versione.
export const PROMPT_VERSION = 'v2';

export const LIBRARY_DIR = path.resolve(process.env.PILLOLE_LIBRARY ?? 'library');
export const IDEAS_DIR = path.join(LIBRARY_DIR, 'ideas');
export const SOURCES_DIR = path.join(LIBRARY_DIR, 'sources');
export const REVIEWS_FILE = path.join(LIBRARY_DIR, 'reviews.jsonl');
export const RUNS_FILE = path.join(LIBRARY_DIR, 'runs.jsonl');

// Oltre questa lunghezza il testo viene troncato. Con Haiku 5.5 un prompt sopra i
// 100.000 token paga tariffe cinque volte più alte: 200.000 caratteri restano sotto.
export const MAX_SOURCE_CHARS = 200_000;
export const MAX_OUTPUT_TOKENS = 12_000;

// Obiettivo del passo 1: scartare meno di un'idea su cinque.
export const TARGET_DISCARD_RATE = 0.2;

interface Rate { in: number; out: number }
interface Pricing { short: Rate; long?: Rate; threshold?: number }

// Dollari per milione di token, API sincrona (il batch costa la metà).
// Fonte: https://platform.claude.com/docs/en/about-claude/pricing, novembre 2026.
export const PRICES: Record<string, Pricing> = {
  'claude-haiku-5-5': { short: { in: 0.1, out: 0.5 }, long: { in: 0.5, out: 2.5 }, threshold: 100_000 },
  'claude-sonnet-5-5': { short: { in: 2, out: 10 } },
};

export function costUsd(model: string, inputTokens: number, outputTokens: number): number {
  const p = PRICES[model];
  if (!p) return Number.NaN;
  const rate = p.long && p.threshold && inputTokens > p.threshold ? p.long : p.short;
  return (inputTokens * rate.in + outputTokens * rate.out) / 1_000_000;
}
