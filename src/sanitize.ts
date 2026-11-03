// Il testo delle fonti e le idee generate da esso sono dati non fidati.

// Caratteri di controllo C0 (tranne \t e \n), DEL e C1: in un terminale possono
// formare sequenze di escape che cambiano titolo della finestra, colori o contenuto.
const CONTROL = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;

export function stripControl(s: string): string {
  return s.replace(CONTROL, '');
}

// Neutralizza i tag che delimitano la fonte nel messaggio a Claude, così una pagina
// non può chiudere <text> o <source> e scrivere fuori dal suo contenitore.
// Gli altri "<" restano intatti, perché l'anchor deve combaciare con il testo originale.
export function neutralizeDelimiters(s: string): string {
  return s.replace(/<(\/?\s*)(source|text)\b/gi, '&lt;$1$2');
}
