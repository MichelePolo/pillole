import { appendFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import Anthropic from '@anthropic-ai/sdk';
import { makeAnchorChecker } from './anchor.js';
import { dedupIdeas } from './dedup.js';
import { COMPATIBLE_PROMPT_VERSIONS, LIBRARY_DIR, MAX_OUTPUT_TOKENS, MODEL, PROMPT_VERSION, RUNS_FILE, costUsd } from './config.js';
import { loadSource, saveSource, type Source } from './extract.js';
import { writeIdea } from './markdown.js';
import { buildUserMessage, SYSTEM_PROMPT } from './prompt.js';
import { DistillOutput, normalizeRaw, OUTPUT_JSON_SCHEMA, softWarnings } from './schema.js';

const HELP = `Uso: npm run distill -- [sorgenti...] [opzioni]

Sorgenti: URL, file .md/.txt, oppure un file elenco (una sorgente per riga, # per i commenti).
Senza sorgenti legge sources.txt.

Opzioni:
  --dry-run   estrae i testi e stima i costi, senza chiamare l'API
  --refresh   riscarica le pagine invece di usare la cache in library/sources
  --force     ridistilla anche le sorgenti già fatte con questa versione del prompt
  --think     abilita il thinking adattivo (più lento e costoso, a volte più accurato)
  --no-dedup  non controlla i duplicati delle idee nuove (vedi npm run dedup)
  --model X   modello da usare (predefinito: ${MODEL})
  --help      mostra questo aiuto`;

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    'dry-run': { type: 'boolean', default: false },
    refresh: { type: 'boolean', default: false },
    force: { type: 'boolean', default: false },
    think: { type: 'boolean', default: false },
    'no-dedup': { type: 'boolean', default: false },
    model: { type: 'string', default: MODEL },
    help: { type: 'boolean', default: false },
  },
});

if (values.help) {
  console.log(HELP);
  process.exit(0);
}

const model = values.model!;

async function readList(file: string): Promise<string[]> {
  const text = await readFile(file, 'utf8');
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

async function expandInputs(args: string[]): Promise<string[]> {
  if (args.length === 0) return readList('sources.txt');
  const out: string[] = [];
  for (const a of args) {
    if (!/^https?:\/\//.test(a) && /\.(txt|list)$/i.test(a)) {
      // Un .txt può essere un elenco o una fonte: è un elenco se ogni riga utile è un URL o un percorso.
      const lines = await readList(a);
      if (lines.length > 0 && lines.every((l) => /^https?:\/\//.test(l) || /\.(md|txt)$/i.test(l))) {
        out.push(...lines);
        continue;
      }
    }
    out.push(a);
  }
  return out;
}

interface RunTotals { sources: number; ideas: number; empty: number; skipped: number; failed: number; inTok: number; outTok: number; usd: number; anchorMissing: number }

async function distillOne(client: Anthropic, source: Source, totals: RunTotals, fresh: Set<string>): Promise<void> {
  const userMessage = buildUserMessage(source);
  const message = await client.messages.create({
    model,
    max_tokens: MAX_OUTPUT_TOKENS,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: userMessage }],
    output_config: { format: { type: 'json_schema', schema: OUTPUT_JSON_SCHEMA as unknown as Record<string, unknown> } },
    ...(values.think ? { thinking: { type: 'adaptive' as const } } : {}),
  });

  const inTok = message.usage.input_tokens;
  const outTok = message.usage.output_tokens;
  const usd = costUsd(model, inTok, outTok);
  totals.inTok += inTok;
  totals.outTok += outTok;
  totals.usd += Number.isNaN(usd) ? 0 : usd;

  const log = { at: new Date().toISOString(), source: source.id, title: source.title, model, prompt_version: PROMPT_VERSION, stop_reason: message.stop_reason, input_tokens: inTok, output_tokens: outTok, usd };

  if (message.stop_reason === 'refusal') {
    // Haiku 5.5 ha classificatori di sicurezza senza fallback lato server: la fonte va saltata o rivista a mano.
    await appendFile(RUNS_FILE, JSON.stringify({ ...log, error: 'refusal' }) + '\n');
    throw new Error('richiesta rifiutata dal modello (stop_reason: refusal)');
  }
  if (message.stop_reason === 'max_tokens') {
    await appendFile(RUNS_FILE, JSON.stringify({ ...log, error: 'max_tokens' }) + '\n');
    throw new Error(`risposta troncata: aumenta MAX_OUTPUT_TOKENS (ora ${MAX_OUTPUT_TOKENS})`);
  }

  const text = message.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('');
  const parsed = DistillOutput.parse(normalizeRaw(JSON.parse(text)));
  const check = makeAnchorChecker(source.text);

  let written = 0;
  for (const [index, draft] of parsed.ideas.slice(0, 6).entries()) {
    const anchorCheck = check(draft.anchor);
    if (anchorCheck === 'missing') totals.anchorMissing++;
    const file = await writeIdea(draft, {
      source,
      lang: parsed.source_lang,
      index,
      promptVersion: PROMPT_VERSION,
      model,
      anchorCheck,
      warnings: softWarnings(draft),
    });
    fresh.add(path.basename(file, '.md'));
    written++;
  }

  totals.ideas += written;
  if (written === 0) totals.empty++;
  source.distilled = { ...source.distilled, [PROMPT_VERSION]: { ideas: written, verdict: parsed.verdict, at: new Date().toISOString() } };
  await saveSource(source);
  await appendFile(RUNS_FILE, JSON.stringify({ ...log, verdict: parsed.verdict, ideas: written }) + '\n');

  const verdict = parsed.verdict === 'no_durable_ideas' ? 'niente di durevole' : `${written} idee`;
  console.log(`  → ${verdict} · ${inTok} token in, ${outTok} out · ${usd.toFixed(5)} $`);
}

async function main(): Promise<void> {
  const inputs = await expandInputs(positionals);
  if (inputs.length === 0) {
    console.error('Nessuna sorgente. Aggiungi URL a sources.txt o passali come argomenti.');
    process.exit(1);
  }
  if (!values['dry-run'] && !process.env.ANTHROPIC_API_KEY) {
    console.error('Manca ANTHROPIC_API_KEY: copia .env.example in .env e inserisci la chiave.');
    process.exit(1);
  }

  await mkdir(LIBRARY_DIR, { recursive: true });
  const client = new Anthropic();
  const totals: RunTotals = { sources: 0, ideas: 0, empty: 0, skipped: 0, failed: 0, inTok: 0, outTok: 0, usd: 0, anchorMissing: 0 };
  const fresh = new Set<string>(); // id delle idee scritte in questo giro

  console.log(`Prompt ${PROMPT_VERSION} · modello ${model} · ${inputs.length} sorgenti${values['dry-run'] ? ' · prova a secco' : ''}\n`);

  for (const input of inputs) {
    try {
      const source = await loadSource(input, { refresh: values.refresh });
      const flag = source.truncated ? ` (troncata da ${source.chars} caratteri)` : '';
      console.log(`• ${source.title} — ${source.text.length} caratteri${flag}`);

      if (values['dry-run']) {
        // Stima prudente: il tokenizer dei modelli recenti produce circa un token ogni 3 caratteri.
        const estIn = Math.ceil((source.text.length + SYSTEM_PROMPT.length) / 3);
        const estUsd = costUsd(model, estIn, 1_500);
        totals.inTok += estIn;
        totals.usd += Number.isNaN(estUsd) ? 0 : estUsd;
        totals.sources++;
        console.log(`  → stima ${estIn} token in · circa ${estUsd.toFixed(5)} $`);
        continue;
      }
      const doneWith = [...COMPATIBLE_PROMPT_VERSIONS].reverse().find((v) => source.distilled?.[v]);
      if (!values.force && doneWith) {
        totals.skipped++;
        console.log(`  → già distillata con ${doneWith} (usa --force per rifarla con ${PROMPT_VERSION})`);
        continue;
      }

      await distillOne(client, source, totals, fresh);
      totals.sources++;
    } catch (err) {
      totals.failed++;
      console.error(`  ✗ ${input}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  // Dopo tutte le fonti: così il controllo vede anche le idee nuove delle altre fonti del giro.
  let duplicates = 0;
  if (!values['dry-run'] && !values['no-dedup'] && fresh.size > 0) {
    try {
      const d = await dedupIdeas(client, model, fresh);
      duplicates = d.duplicates;
      totals.inTok += d.inTok;
      totals.outTok += d.outTok;
      totals.usd += d.usd;
    } catch (err) {
      // Le idee sono già scritte: senza il controllo arrivano tutte alla revisione, niente di perso.
      console.error(`  ✗ controllo duplicati saltato: ${err instanceof Error ? err.message : String(err)} (rilancialo con npm run dedup)`);
    }
  }

  console.log('\nRiepilogo');
  console.log(`  sorgenti elaborate: ${totals.sources} · saltate: ${totals.skipped} · fallite: ${totals.failed}`);
  if (!values['dry-run']) {
    console.log(`  idee scritte: ${totals.ideas} · scartate come duplicati: ${duplicates} · sorgenti senza idee durevoli: ${totals.empty}`);
    console.log(`  anchor non trovati nella fonte: ${totals.anchorMissing}${totals.anchorMissing ? ' (controllali in revisione)' : ''}`);
  }
  console.log(`  token: ${totals.inTok} in, ${totals.outTok} out · costo${values['dry-run'] ? ' stimato' : ''}: ${totals.usd.toFixed(4)} $`);
  if (!values['dry-run'] && totals.ideas > 0) console.log('\nOra rivedi le idee con: npm run review');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
