// Verifica che l'anchor sia davvero nella fonte: è il controllo di fedeltà più economico.

const normalize = (s: string) =>
  s
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\u2018\u2019\u201a\u2032`´]/g, "'")
    .replace(/[\u201c\u201d\u201e\u00ab\u00bb]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/\s+/g, ' ')
    .trim();

const tokens = (s: string) => normalize(s).replace(/[^\p{L}\p{N}' ]/gu, ' ').split(/\s+/).filter(Boolean);

const trigrams = (t: string[]) => {
  const out = new Set<string>();
  for (let i = 0; i + 2 < t.length; i++) out.add(`${t[i]} ${t[i + 1]} ${t[i + 2]}`);
  return out;
};

export type AnchorCheck = 'exact' | 'near' | 'missing';

// "exact": testo identico a meno di spazi e virgolette; "near": almeno l'80% dei trigrammi
// di parole presenti nella fonte (piccole differenze di punteggiatura); "missing": probabile invenzione.
export function makeAnchorChecker(sourceText: string): (anchor: string) => AnchorCheck {
  const normSource = normalize(sourceText);
  const sourceTri = trigrams(tokens(sourceText));
  return (anchor) => {
    if (!anchor.trim()) return 'missing';
    if (normSource.includes(normalize(anchor))) return 'exact';
    const tri = trigrams(tokens(anchor));
    if (tri.size === 0) return 'missing';
    let hit = 0;
    for (const t of tri) if (sourceTri.has(t)) hit++;
    return hit / tri.size >= 0.8 ? 'near' : 'missing';
  };
}
