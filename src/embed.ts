// npm run embed: calcola gli embedding delle idee che non li hanno ancora.
import { updateEmbeddings } from './embeddings.js';
import { loadIdeas } from './markdown.js';

await updateEmbeddings(await loadIdeas());
