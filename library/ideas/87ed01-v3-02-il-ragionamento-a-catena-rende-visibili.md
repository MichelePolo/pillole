---
id: 87ed01-v3-02-il-ragionamento-a-catena-rende-visibili
lang: it
kind: metodo
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
anchor: CoT has a nice property that it allows the model to use a variable amount of compute depending on the hardness of the problem
anchor_check: exact
quiz:
  q: Qual è il vantaggio del ragionamento a catena rispetto a una risposta immediata?
  a: Permette di usare una quantità di calcolo variabile, adattata alla difficoltà del problema, prima di produrre la risposta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.417Z
---

# Il ragionamento a catena rende visibili i passaggi

La catena di pensiero (chain-of-thought) consiste nel far generare al modello passaggi intermedi prima della risposta finale. Questo permette di usare molto più calcolo per ogni token della risposta, e la quantità di calcolo può variare in base alla difficoltà del problema. Il metodo ha però un limite: il testo generato è un'interpretazione del processo interno, e l'autore sostiene che non si può dare per scontato che sia fedele a ciò che il modello fa davvero.
