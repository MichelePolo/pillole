---
id: 1d6525-v3-04-campionare-piu-risposte-e-votare-riduce
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 1d65254430ae
  lang: en
  title: Prompt Engineering
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/
anchor: sample multiple outputs with temperature > 0 and then selecting the best one out of these candidates
anchor_check: exact
quiz:
  q: Come si sceglie la risposta finale con l'auto-consistenza?
  a: Si generano più risposte campionate e si sceglie la migliore, di solito per voto di maggioranza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.821Z
---

# Campionare più risposte e votare riduce gli errori

L'auto-consistenza consiste nel generare più risposte con una certa casualità e poi scegliere la migliore, di solito tramite voto di maggioranza. Quando il risultato è verificabile, come un programma che passa dei test, la selezione può essere automatica. È un modo semplice per sfruttare la variabilità del modello a favore dell'accuratezza, al prezzo di calcolare più risposte per ogni domanda.
