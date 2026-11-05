---
id: 87ed01-v3-03-il-campionamento-parallelo-ha-limiti-che
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 87ed01723e4f
  lang: en
  title: Why We Think
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2025-05-01-thinking/
anchor: Parallel sampling is simple, intuitive and easier to implement, but bounded by the model capability
anchor_check: exact
quiz:
  q: Quale rischio comporta la revisione sequenziale rispetto al campionamento parallelo?
  a: Può trasformare risposte corrette in errate o introdurre allucinazioni, oltre a essere più lenta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.417Z
---

# Il campionamento parallelo ha limiti che la revisione supera

Secondo l'autore, esistono due strategie principali per usare il calcolo al momento della risposta: il campionamento parallelo, che genera più risposte insieme e ne sceglie una, e la revisione sequenziale, che corregge iterativamente la risposta precedente. Il primo è semplice ma limitato dalla capacità del modello di trovare la soluzione in un solo tentativo. La seconda permette di riflettere sugli errori, ma è più lenta e rischia di rovinare risposte già corrette.
