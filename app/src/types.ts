// Il formato di public/ideas.json, prodotto da scripts/build-index.ts.
export interface Idea {
  id: string;
  title: string;
  body: string;
  kind: string;
  topics: string[];
  subtopics: string[];
  sourceLang: string;
  source: { id: string; title: string; author?: string; site?: string; url?: string };
  quiz: { q: string; a: string };
  vec?: number[]; // embedding centrato e normalizzato (multilingual-e5-small)
}

export interface IdeasFile {
  version: string;
  generated: string;
  ideas: Idea[];
}
