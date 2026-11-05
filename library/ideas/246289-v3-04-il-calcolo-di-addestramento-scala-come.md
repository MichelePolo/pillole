---
id: 246289-v3-04-il-calcolo-di-addestramento-scala-come
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: 2462892d260e
  lang: en
  title: Scaling Laws, Carefully
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-06-24-scaling-laws/
anchor: the training FLOPs per token are approximately $6N$
anchor_check: exact
quiz:
  q: Perché il calcolo di addestramento è circa sei volte il numero di parametri per token?
  a: Perché il passaggio in avanti costa circa due FLOP per parametro e quello all'indietro circa il doppio di quello in avanti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.473Z
---

# Il calcolo di addestramento scala come 6ND

Un'approssimazione utile è che, per un Transformer, i FLOP di addestramento per token siano circa sei volte il numero di parametri non legati agli embedding. Il conto deriva dal fatto che il passaggio in avanti costa circa due FLOP per parametro e quello all'indietro circa il doppio del passaggio in avanti. Moltiplicando per il numero di token D si ottiene il calcolo totale C circa uguale a 6ND. È una formula semplice che permette di stimare costi di addestramento prima di lanciare un run.
