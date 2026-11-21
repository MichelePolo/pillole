---
id: 7b9f4f-v3-04-un-idea-di-novita-va-misurata
lang: it
kind: metodo
topics:
  - ai
  - matematica
subtopics:
  - agenti
  - probabilita-statistica
source:
  id: 7b9f4f54765d
  lang: en
  title: Exploration Strategies in Deep Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-06-07-exploration-drl/
anchor: We need an non-zero count for most states, even when they haven't been seen before.
anchor_check: exact
quiz:
  q: Perché il semplice conteggio delle visite non basta negli spazi di stati continui o ad alta dimensione?
  a: Perché quasi tutti gli stati risultano non visitati mai, quindi serve una stima di conteggio non nulla anche per stati nuovi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.930Z
---

# Un'idea di novità va misurata, non solo contata

Contare quante volte uno stato è stato visitato funziona nei problemi semplici, ma diventa impraticabile quando gli stati sono continui o ad alta dimensione, perché quasi nessuno stato risulta mai visto. La soluzione è stimare una quantità pseudo-conteggio con un modello di densità o con funzioni hash che raggruppano stati simili. ==Così anche gli stati nuovi ricevono un valore di novità significativo.== È un'idea che collega la statistica di frequenza alla pratica dell'apprendimento con reti neurali.
