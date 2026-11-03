import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';
import { IDEAS_DIR } from './config.js';
import type { AnchorCheck } from './anchor.js';
import type { Source } from './extract.js';
import type { IdeaDraft } from './schema.js';
import type { Kind, Lang, Subtopic, Topic } from './vocabulary.js';

// Frontmatter di un'idea: è il contratto con la PWA (che lo leggerà con il plugin frontmatter di mdlib-pure).
export interface IdeaMeta {
  id: string;
  lang: Lang; // lingua dell'idea: sempre 'it' dal prompt v2
  kind: Kind;
  topics: Topic[];
  subtopics: Subtopic[];
  source: { id: string; lang?: Lang; title: string; author?: string; site?: string; url?: string };
  anchor: string;
  anchor_check: AnchorCheck;
  quiz: { q: string; a: string };
  warnings?: string[];
  prompt_version: string;
  model: string;
  created: string;
}

export interface IdeaFile {
  meta: IdeaMeta;
  title: string;
  body: string;
  path: string;
}

export function slug(s: string, maxWords = 6): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .slice(0, maxWords)
    .join('-');
}

export function ideaId(source: Source, promptVersion: string, index: number, title: string): string {
  return `${source.id.slice(0, 6)}-${promptVersion}-${String(index + 1).padStart(2, '0')}-${slug(title)}`;
}

export async function writeIdea(
  draft: IdeaDraft,
  ctx: { source: Source; lang: Lang; index: number; promptVersion: string; model: string; anchorCheck: AnchorCheck; warnings: string[] },
): Promise<string> {
  const id = ideaId(ctx.source, ctx.promptVersion, ctx.index, draft.title);
  const meta: IdeaMeta = {
    id,
    lang: 'it',
    kind: draft.kind,
    topics: draft.topics.slice(0, 2),
    subtopics: draft.subtopics.slice(0, 3),
    source: {
      id: ctx.source.id,
      lang: ctx.lang,
      title: ctx.source.title,
      ...(ctx.source.author ? { author: ctx.source.author } : {}),
      ...(ctx.source.site ? { site: ctx.source.site } : {}),
      ...(ctx.source.url ? { url: ctx.source.url } : {}),
    },
    anchor: draft.anchor.trim(),
    anchor_check: ctx.anchorCheck,
    quiz: { q: draft.quiz_question.trim(), a: draft.quiz_answer.trim() },
    ...(ctx.warnings.length ? { warnings: ctx.warnings } : {}),
    prompt_version: ctx.promptVersion,
    model: ctx.model,
    created: new Date().toISOString(),
  };
  const content = `---\n${YAML.stringify(meta, { lineWidth: 0 })}---\n\n# ${draft.title.trim()}\n\n${draft.body.trim()}\n`;
  await mkdir(IDEAS_DIR, { recursive: true });
  const file = path.join(IDEAS_DIR, `${id}.md`);
  await writeFile(file, content);
  return file;
}

export function parseIdea(content: string, file: string): IdeaFile {
  const m = content.match(/^---\n([\s\S]*?)\n---\n\n?# (.*)\n\n([\s\S]*)$/);
  if (!m) throw new Error(`Formato non valido: ${file}`);
  return { meta: YAML.parse(m[1]) as IdeaMeta, title: m[2].trim(), body: m[3].trim(), path: file };
}

export async function loadIdeas(): Promise<IdeaFile[]> {
  let names: string[] = [];
  try {
    names = (await readdir(IDEAS_DIR)).filter((n) => n.endsWith('.md')).sort();
  } catch {
    return [];
  }
  return Promise.all(names.map(async (n) => parseIdea(await readFile(path.join(IDEAS_DIR, n), 'utf8'), n)));
}
