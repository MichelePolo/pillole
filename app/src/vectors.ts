// Gli embedding in ideas.json: 384 interi a 8 bit in base64 (512 caratteri invece di ~2.450
// come numeri JSON). build-index li quantizza su 127 rispetto al valore più grande; qui si
// rinormalizzano, perché la scala persa non conta: i coseni si fanno su vettori unitari.
// Errore misurato sul coseno: medio 0,0004, massimo 0,0024.
export function decodeVec(b64: string): number[] {
  const bin = atob(b64);
  const v = new Array<number>(bin.length);
  let sq = 0;
  for (let k = 0; k < bin.length; k++) {
    const b = bin.charCodeAt(k);
    v[k] = b > 127 ? b - 256 : b; // byte con segno
    sq += v[k] * v[k];
  }
  const n = Math.sqrt(sq) || 1;
  return v.map((x) => x / n);
}
