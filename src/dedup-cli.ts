// npm run dedup: controlla i duplicati delle idee non ancora riviste (di solito lo fa
// già npm run distill alla fine del giro; questo serve se è stato saltato o interrotto).
import { parseArgs } from 'node:util';
import Anthropic from '@anthropic-ai/sdk';
import { MODEL, PROMPT_VERSION } from './config.js';
import { dedupIdeas } from './dedup.js';
import { loadIdeas } from './markdown.js';
import { loadReviews } from './reviews.js';

const { values } = parseArgs({ options: { version: { type: 'string', default: PROMPT_VERSION } } });

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Manca ANTHROPIC_API_KEY: copia .env.example in .env e inserisci la chiave.');
  process.exit(1);
}
const reviews = await loadReviews();
const ids = new Set((await loadIdeas()).filter((i) => i.meta.prompt_version === values.version && !reviews.has(i.meta.id)).map((i) => i.meta.id));
if (ids.size === 0) console.log(`Nessuna idea ${values.version} da controllare: sono tutte già riviste.`);
else await dedupIdeas(new Anthropic(), MODEL, ids);
