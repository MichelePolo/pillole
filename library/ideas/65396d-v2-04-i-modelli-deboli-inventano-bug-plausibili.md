---
id: 65396d-v2-04-i-modelli-deboli-inventano-bug-plausibili
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 65396d7e31ee
  lang: en
  title: AI cybersecurity is not proof of work
  site: antirez.com
  url: https://antirez.com/news/163
anchor: Stronger models hallucinate less, so they can't see the problem in any side of the spectrum
anchor_check: exact
quiz:
  q: Perché, secondo l'autore, un modello intermedio può smettere di segnalare il bug SACK?
  a: Perché i modelli più forti allucinano meno e non riescono a vedere il problema, mentre quelli deboli inventano bug non reali.
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T07:12:03.463Z
---

# I modelli deboli inventano bug plausibili

L'autore avverte di non fidarsi di chi dice che i modelli deboli trovano il bug SACK di OpenBSD: lui stesso li ha provati. Producono ipotesi plausibili, come la mancata validazione dell'inizio della finestra o l'overflow di interi, senza capire perché insieme creino un problema. Si tratta di riconoscimento di pattern su codice sospetto, non di comprensione né di capacità di scrivere un exploit. Ne segue un paradosso: un modello abbastanza forte da non inventare nulla, ma non abbastanza da trovare il bug vero, tende a non segnalare alcun bug. Secondo l'autore, i modelli più forti allucinano meno.
