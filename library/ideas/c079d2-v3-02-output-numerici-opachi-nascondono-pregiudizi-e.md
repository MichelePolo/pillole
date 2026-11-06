---
id: c079d2-v3-02-output-numerici-opachi-nascondono-pregiudizi-e
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - sicurezza-allineamento
source:
  id: c079d2e63304
  lang: en
  title: Jev introduces a new shape of LLM—System One, aka Decision Models
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Sep/21/jev/
anchor: that floating point number could conceal all manner of unseen bias baked into the models
anchor_check: exact
quiz:
  q: Perché un output che è solo un numero può essere più rischioso di una spiegazione testuale?
  a: Perché un numero senza motivazioni può nascondere pregiudizi del modello che non si riescono a individuare né a correggere.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.951Z
---

# Output numerici opachi nascondono pregiudizi e motivazioni

Quando un sistema restituisce soltanto un numero, non si può chiedergli quali segnali hanno pesato sulla decisione. Secondo l'autore, questa opacità è un passo indietro rispetto ai modelli linguistici, che almeno possono giustificare le proprie risposte, anche se non sempre in modo affidabile. Il problema più serio riguarda i pregiudizi: un punteggio può nascondere distorsioni incorporate nel modello, come nel caso di chi viene scartato in una selezione di candidati. ==Un output senza spiegazioni rende difficile scoprire che cosa il sistema sta davvero valutando.==
