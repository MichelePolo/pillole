---
id: 2cf34d-v3-04-le-basi-di-conoscenza-create-con
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 2cf34df8cd69
  lang: en
  title: How to Build an Open-Domain Question Answering System?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-10-29-odqa/
anchor: its 100k questions are derived from only 536 documents.
anchor_check: exact
quiz:
  q: Perché il dataset SQuAD è considerato poco adatto alla valutazione di sistemi di recupero appreso?
  a: Perché le sue domande derivano da pochissimi documenti, quindi i target di recupero sono molto correlati tra esempi e l'ipotesi di indipendenza dei dati non regge.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.903Z
---

# SQuAD è poco adatto a valutare il recupero appreso

Secondo l'autrice, il dataset SQuAD deriva le sue centomila domande da soli 536 documenti. Di conseguenza i migliori target di recupero sono molto correlati tra gli esempi di addestramento, il che viola l'ipotesi di indipendenza e identica distribuzione dei dati e rende il dataset poco adatto al recupero appreso. Il limite riguarda la costruzione del dataset e va considerato quando si valutano i sistemi end-to-end.
