---
id: 246289-v3-03-modelli-piu-piccoli-con-piu-dati
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 2462892d260e
  lang: en
  title: Scaling Laws, Carefully
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-06-24-scaling-laws/
anchor: Chinchilla (70B parameter count, 1.4T token budget), a model 4x smaller
anchor_check: exact
quiz:
  q: Perché il modello Chinchilla ha superato Gopher pur essendo più piccolo?
  a: Perché a parità di calcolo è stato addestrato su circa quattro volte più token, il che lo ha reso più efficiente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.473Z
---

# Modelli più piccoli con più dati possono vincere

Lo studio Chinchilla ha concluso che, con un budget di calcolo fisso, la dimensione del modello e il numero di token dovrebbero crescere alla stessa velocità. Secondo questa analisi, molti modelli grandi dell'epoca erano sotto-addestrati: un modello di 70 miliardi di parametri addestrato su più dati superava uno da 280 miliardi con un budget simile. Il messaggio pratico è che conviene spesso addestrare un modello più piccolo su più dati piuttosto che uno molto grande e fermarsi presto.
