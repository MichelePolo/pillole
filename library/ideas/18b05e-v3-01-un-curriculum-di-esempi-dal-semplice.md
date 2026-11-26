---
id: 18b05e-v3-01-un-curriculum-di-esempi-dal-semplice
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 18b05e29ab9d
  lang: en
  title: Curriculum for Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-01-29-curriculum-rl/
anchor: a bad curriculum may even hamper learning
anchor_check: exact
quiz:
  q: Un curriculum di addestramento garantisce sempre un modello migliore alla fine?
  a: "No: può accelerare la convergenza senza migliorare necessariamente la prestazione finale, e un curriculum mal progettato può perfino peggiorare l'apprendimento."
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-23T10:53:54.466Z
---

# Un curriculum di esempi dal semplice al complesso accelera l'apprendimento

L'idea di base è che un modello impari più in fretta se gli esempi vengono presentati in ordine di difficoltà crescente, invece che a caso. Elman nel 1993 mostrò che una rete che impara la grammatica del linguaggio non riusciva affatto a imparare se partiva da dati troppo complessi, mentre con un insieme ristretto di dati semplici e una complessità crescente il risultato cambiava. Il curriculum non garantisce però un modello migliore alla fine: ==un curriculum mal progettato può perfino ostacolare l'apprendimento==. Progettarne uno efficace non è semplice.
