---
id: 189b69-v3-04-con-larghezza-infinita-la-rete-evolve
lang: it
kind: metodo
topics:
  - ai
  - matematica
subtopics:
  - modelli-linguistici
  - probabilita-statistica
source:
  id: 189b698067bc
  lang: en
  title: Some Math behind Neural Tangent Kernel
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-09-08-ntk/
anchor: a neural network with infinite width can be considerably simplified as governed by the above linearized model
anchor_check: exact
quiz:
  q: Perché una rete di larghezza infinita può essere trattata come un modello lineare durante l'addestramento?
  a: Perché l'approssimazione di Taylor al primo ordine intorno ai parametri iniziali, con kernel costante, rende la dinamica dell'output lineare e risolvibile in forma chiusa.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.364Z
---

# Con larghezza infinita la rete evolve come un modello lineare

Sviluppando la funzione della rete con Taylor al primo ordine intorno ai parametri iniziali, la dinamica dell'addestramento si semplifica in un modello lineare. Nel limite di larghezza infinita, il kernel rimane costante, quindi l'evoluzione dell'output si può risolvere in forma chiusa. Con perdita quadratica, la distanza tra previsioni e obiettivi decresce esponenzialmente. Secondo l'autore, questo implica che una rete molto larga può essere trattata come un modello lineare sotto discesa del gradiente.
