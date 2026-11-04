import { loadAllState, loadEvents } from './db';
import { loadStoredInterests } from './interests';
import { loadPill } from './pillStore';

// Esporta tutto ciò che l'app sa di te: è l'unico modo di portare i dati fuori dal telefono
// finché non c'è la sincronizzazione (passo 6). Il file serve a tarare i pesi della selezione.
export async function exportData(ideasVersion: string): Promise<number> {
  const [events, state] = await Promise.all([loadEvents(), loadAllState()]);
  const data = {
    format: 'pillole-export',
    formatVersion: 1,
    exportedAt: new Date().toISOString(),
    appVersion: __APP_VERSION__,
    promptVersion: ideasVersion,
    events,
    state,
    pill: loadPill(),
    interests: loadStoredInterests(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const name = `pillole-dati-${new Date().toLocaleDateString('sv-SE')}.json`;
  const file = new File([blob], name, { type: 'application/json' });

  // Sul telefono il foglio di condivisione è più comodo (mandarlo a sé stessi, salvarlo in File);
  // dove non c'è, un download classico.
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: name });
      return events.length;
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return events.length; // annullato dall'utente
    }
  }
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return events.length;
}
