// Lettura ad alta voce con la Web Speech API: voci di sistema, costo zero.

export const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

function italianVoice(): SpeechSynthesisVoice | undefined {
  const voices = speechSynthesis.getVoices();
  return voices.find((v) => v.lang === 'it-IT' && v.localService) ?? voices.find((v) => v.lang.startsWith('it'));
}

// Il Markdown della card diventa testo semplice: niente "uguale uguale" letti dalla voce.
const plain = (md: string) => md.replace(/==(.+?)==/g, '$1').replace(/[*_`#>]/g, '');

export function speak(title: string, body: string, onEnd: () => void): void {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(`${title}. ${plain(body)}`);
  u.lang = 'it-IT';
  const voice = italianVoice();
  if (voice) u.voice = voice;
  u.onend = u.onerror = onEnd;
  speechSynthesis.speak(u);
}

export function stopSpeaking(): void {
  if (speechSupported) speechSynthesis.cancel();
}
