// Il testo delle fonti e le idee generate da esso sono dati non fidati.

// Caratteri di controllo C0 (tranne \t e \n), DEL e C1: in un terminale possono
// formare sequenze di escape che cambiano titolo della finestra, colori o contenuto.
const CONTROL = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;

export function stripControl(s: string): string {
  return s.replace(CONTROL, '');
}

// Titoli, autori e nomi di sito: una riga sola. Finiscono nei log, e nel runner di GitHub
// Actions una riga che inizia con "::" è un comando del workflow: un titolo con un a capo
// non deve poterne aprire una.
export function oneLine(s: string): string {
  return stripControl(s).replace(/\s+/g, ' ').trim();
}

// Neutralizza i tag che delimitano la fonte nel messaggio a Claude, così una pagina
// non può chiudere <text> o <source> e scrivere fuori dal suo contenitore.
// Tollera spazi e caratteri di formato invisibili (U+200B, U+FEFF, U+00AD…) tra "<",
// "/" e il nome, e copre anche i delimitatori con nonce (text_xxxx).
// Gli altri "<" restano intatti, perché l'anchor deve combaciare con il testo originale.
const DELIMITER = /<([\s\p{Cf}]*\/?[\s\p{Cf}]*)(source|text)(?![a-z])/giu;

export function neutralizeDelimiters(s: string): string {
  return s.replace(DELIMITER, '&lt;$1$2');
}
