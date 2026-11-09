---
id: 1cc4df-v3-04-qualita-dei-dati-generati-affinita-e
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 1cc4df7eb2c7
  lang: en
  title: "Learning with not Enough Data Part 3: Data Generation"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-04-15-data-gen/
anchor: Affinity is a model-sensitive metric for distribution shift
anchor_check: exact
quiz:
  q: Perché per valutare i dati sintetici non basta misurare la diversità?
  a: Perché anche l'affinità, cioè quanto l'aumento sposta la distribuzione rispetto a ciò che il modello conosce, deve essere adeguata per ottenere buone prestazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-09T09:56:12.691Z
---

# Qualità dei dati generati: affinità e diversità

Secondo l'autore, la qualità dei dati sintetici può essere misurata con due dimensioni. L'affinità misura quanto un'augmentation sposta la distribuzione dei dati rispetto a ciò che il modello ha appreso, osservando la differenza di prestazioni tra dati puliti e aumentati. La diversità misura la complessità dei dati aumentati rispetto al modello, per esempio tramite la loss finale di addestramento. Le prestazioni finali dipendono dal fatto che entrambe siano sufficientemente alte.
