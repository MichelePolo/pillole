---
id: 878201-v3-06-calcolare-la-valutazione-senza-condividere-il
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - infrastrutture
  - agenti
source:
  id: "878201399682"
  lang: en
  title: Evolution Strategies
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-09-05-evolution-strategies/
anchor: By only communicating the random seeds between workers, it is enough for the master node to do parameter update.
anchor_check: exact
quiz:
  q: Cosa viene scambiato tra i nodi di calcolo nel metodo OpenAI ES?
  a: Solo i semi del generatore casuale, non i grandi parametri del modello, che restano locali a ciascun nodo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.910Z
---

# Calcolare la valutazione senza condividere il modello

Nel lavoro di OpenAI sulle strategie evolutive per l'apprendimento per rinforzo, ogni lavoratore perturba i parametri con rumore casuale e valuta la prestazione in parallelo. Poiché basta condividere i semi del generatore casuale, i nodi non devono scambiarsi grandi modelli. Il nodo centrale può quindi aggiornare i parametri usando solo le prestazioni ottenute. Secondo l'autrice, questo design è particolarmente elegante e scalabile.
