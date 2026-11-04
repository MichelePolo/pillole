// I temi che l'utente può scegliere: uno per ogni argomento del vocabolario (src/vocabulary.ts).
// Solo dati, niente React: build-index li importa per controllare che non manchi nessun argomento.
// L'ordine è quello del cloud: tinte e lunghezze alternate, così due pill vicine non si somigliano.

export interface Theme {
  id: string; // l'argomento, come in ideas.json
  label: string;
  hue: number; // tinta OKLCH: i pastelli si ricavano in index.css (.theme-pill)
}

export const THEMES: readonly Theme[] = [
  { id: 'filosofia', label: 'Filosofia', hue: 315 },
  { id: 'fisica', label: 'Fisica', hue: 200 },
  { id: 'arte', label: 'Arte', hue: 35 },
  { id: 'ai', label: 'AI', hue: 285 },
  { id: 'letteratura', label: 'Letteratura', hue: 60 },
  { id: 'biologia', label: 'Biologia', hue: 140 },
  { id: 'cinema', label: 'Cinema', hue: 10 },
  { id: 'matematica', label: 'Matematica', hue: 170 },
  { id: 'storia', label: 'Storia', hue: 85 },
  { id: 'psicologia', label: 'Psicologia', hue: 345 },
  { id: 'tecnologia', label: 'Tecnologia', hue: 230 },
  { id: 'musica', label: 'Musica', hue: 258 },
  { id: 'economia', label: 'Economia', hue: 110 },
];

export const MAX_THEMES = 6;

const byId = new Map(THEMES.map((t) => [t.id, t]));

export const themeLabel = (id: string) => byId.get(id)?.label ?? id.replace(/-/g, ' ');
export const themeHue = (id: string) => byId.get(id)?.hue ?? 60; // un tema sconosciuto resta neutro e caldo
export const isTheme = (id: string) => byId.has(id);
