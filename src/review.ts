import { existsSync } from 'node:fs';
import { appendFile, mkdir, readFile } from 'node:fs/promises';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';
import { parseArgs } from 'node:util';
import { LIBRARY_DIR, PROMPT_VERSION, REVIEWS_FILE, TARGET_DISCARD_RATE } from './config.js';
import { loadIdeas, type IdeaFile } from './markdown.js';
import { stripControl as c } from './sanitize.js';

const REASONS = {
  '1': 'vago',
  '2': 'banale',
  '3': 'effimero', // una notizia, non un'idea
  '4': 'infedele', // non dice ciò che dice la fonte
  '5': 'duplicato',
  '6': 'forma', // lunghezza, lingua, stile
  '7': 'altro',
} as const;

interface Review { id: string; prompt_version: string; verdict: 'keep' | 'discard'; reason?: string; note?: string; at: string }

const { values } = parseArgs({
  options: {
    stats: { type: 'boolean', default: false },
    all: { type: 'boolean', default: false },
    version: { type: 'string', default: PROMPT_VERSION },
  },
});

const b = (s: string) => `\x1b[1m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;
const pct = (n: number) => `${(n * 100).toFixed(0)}%`;

async function loadReviews(): Promise<Map<string, Review>> {
  const map = new Map<string, Review>();
  if (!existsSync(REVIEWS_FILE)) return map;
  for (const line of (await readFile(REVIEWS_FILE, 'utf8')).split('\n')) {
    if (!line.trim()) continue;
    const r = JSON.parse(line) as Review;
    map.set(r.id, r); // l'ultima revisione vince
  }
  return map;
}

function show(idea: IdeaFile, i: number, n: number): void {
  const m = idea.meta;
  const anchorMark = m.anchor_check === 'exact' ? '✓' : m.anchor_check === 'near' ? '≈' : '✗ NON TROVATO';
  console.log('\n' + dim('─'.repeat(60)));
  console.log(dim(`${i}/${n} · ${m.prompt_version} · ${m.source.lang && m.source.lang !== m.lang ? `${m.source.lang}→${m.lang}` : m.lang} · ${m.kind} · ${m.topics.join('+')} / ${m.subtopics.join(', ')}`));
  console.log(dim(`fonte: ${c(m.source.title)}${m.source.url ? ` — ${c(m.source.url)}` : ''}`));
  console.log('\n' + b(c(idea.title)) + '\n');
  console.log(c(idea.body).replace(/==(.+?)==/g, (_, s: string) => b(s)));
  console.log('\n' + dim(`anchor ${anchorMark}: "${c(m.anchor)}"`));
  console.log(dim(`quiz: ${c(m.quiz.q)} → ${c(m.quiz.a)}`));
  if (m.warnings?.length) console.log(`\x1b[33mavvisi: ${m.warnings.join('; ')}\x1b[0m`);
}

async function stats(ideas: IdeaFile[], reviews: Map<string, Review>): Promise<void> {
  const versions = [...new Set(ideas.map((i) => i.meta.prompt_version))].sort();
  if (versions.length === 0) {
    console.log('Nessuna idea in libreria. Lancia prima: npm run distill');
    return;
  }
  for (const v of versions) {
    const vi = ideas.filter((i) => i.meta.prompt_version === v);
    const vr = vi.map((i) => reviews.get(i.meta.id)).filter((r): r is Review => !!r);
    const discarded = vr.filter((r) => r.verdict === 'discard');
    const rate = vr.length ? discarded.length / vr.length : 0;
    const ok = vr.length > 0 && rate < TARGET_DISCARD_RATE;
    const missing = vi.filter((i) => i.meta.anchor_check === 'missing').length;
    const warned = vi.filter((i) => i.meta.warnings?.length).length;

    console.log(`\n${b(`Prompt ${v}`)}: ${vi.length} idee, ${vr.length} riviste`);
    if (vr.length) {
      console.log(`  scartate: ${discarded.length} (${pct(rate)}) ${ok ? '✓ sotto' : '✗ sopra'} l'obiettivo del ${pct(TARGET_DISCARD_RATE)}`);
      const byReason = new Map<string, number>();
      for (const r of discarded) byReason.set(r.reason ?? 'altro', (byReason.get(r.reason ?? 'altro') ?? 0) + 1);
      for (const [reason, count] of [...byReason].sort((a, c) => c[1] - a[1])) console.log(`    ${reason}: ${count}`);
    }
    console.log(`  anchor non trovati: ${missing} · idee con avvisi di forma: ${warned}`);
  }
  console.log(dim('\nSuggerimento: correggi il prompt sul motivo di scarto più frequente, incrementa PROMPT_VERSION e ridistilla con --force.'));
}

async function main(): Promise<void> {
  await mkdir(LIBRARY_DIR, { recursive: true });
  const ideas = await loadIdeas();
  const reviews = await loadReviews();

  if (values.stats) return stats(ideas, reviews);

  const queue = ideas.filter((i) => !reviews.has(i.meta.id) && (values.all || i.meta.prompt_version === values.version));
  if (queue.length === 0) {
    console.log(`Niente da rivedere per il prompt ${values.version}.`);
    return stats(ideas, reviews);
  }

  // Le righe si leggono da un iteratore: funziona sia nel terminale sia con l'input in pipe.
  const rl = readline.createInterface({ input, terminal: input.isTTY });
  const lines = rl[Symbol.asyncIterator]();
  const ask = async (prompt: string): Promise<string | null> => {
    output.write(prompt);
    const next = await lines.next();
    return next.done ? null : String(next.value).trim();
  };

  console.log(`${queue.length} idee da rivedere. Tasti: [k] tieni · [d] scarta · [s] salta · [q] esci`);

  try {
    review: for (const [i, idea] of queue.entries()) {
      show(idea, i + 1, queue.length);
      let answer = '';
      while (!['k', 'd', 's', 'q'].includes(answer)) {
        const a = await ask('\n[k/d/s/q] ');
        if (a === null) break review; // fine dell'input
        answer = a.toLowerCase();
      }
      if (answer === 'q') break;
      if (answer === 's') continue;

      const review: Review = { id: idea.meta.id, prompt_version: idea.meta.prompt_version, verdict: answer === 'k' ? 'keep' : 'discard', at: new Date().toISOString() };
      if (answer === 'd') {
        const menu = Object.entries(REASONS).map(([k, r]) => `${k} ${r}`).join(' · ');
        let key = '';
        while (!(key in REASONS)) {
          const k = await ask(`Motivo: ${menu}\n> `);
          if (k === null) break review;
          key = k;
        }
        review.reason = REASONS[key as keyof typeof REASONS];
        const note = await ask('Nota (facoltativa): ');
        if (note) review.note = note;
      }
      await appendFile(REVIEWS_FILE, JSON.stringify(review) + '\n');
      reviews.set(review.id, review);
    }
  } finally {
    rl.close();
  }
  await stats(ideas, reviews);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
