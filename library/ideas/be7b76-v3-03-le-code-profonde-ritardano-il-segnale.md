---
id: be7b76-v3-03-le-code-profonde-ritardano-il-segnale
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
  - architettura-software
source:
  id: be7b76e71de8
  lang: en
  title: A decade of major cache incidents at Twitter
  site: danluu.com
  url: https://danluu.com/cache-incidents/
anchor: Allowing high queue depth before applying backpressure can be dangerous
anchor_check: exact
quiz:
  q: Perché una coda molto profonda può essere dannosa in un sistema sotto carico?
  a: Perché ritarda il segnale di sovraccarico, così i client scadono, riprovano e peggiorano il problema.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.282Z
---

# Le code profonde ritardano il segnale di sovraccarico

Secondo l'autore, accettare una coda molto lunga prima di applicare contropressione è pericoloso. Una coda profonda fa sì che le richieste aspettino a lungo senza che il sistema lo segnali, e nel frattempo i client scadono, riprovano e aggravano la situazione. Applicare la contropressione prima, rifiutando o limitando il lavoro in ingresso, permette al sistema di recuperare. Nel caso descritto, ridurre la dimensione della coda di attesa delle connessioni ha aiutato a far arrivare il segnale di sovraccarico in anticipo.
