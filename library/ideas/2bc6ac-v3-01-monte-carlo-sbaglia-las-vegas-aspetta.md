---
id: 2bc6ac-v3-01-monte-carlo-sbaglia-las-vegas-aspetta
lang: it
kind: concetto
topics:
  - tecnologia
  - matematica
subtopics:
  - architettura-software
  - probabilita-statistica
source:
  id: 2bc6ac828588
  lang: en
  title: Las Vegas, Monte Carlo, and Integer Factorization
  author: John
  site: John D. Cook | Applied Mathematics Consulting
  url: https://www.johndcook.com/blog/2026/11/26/las-vegas-monte-carlo/
anchor: Las Vegas algorithms have a variable runtime but a fixed (i.e. zero) error rate.
anchor_check: exact
quiz:
  q: Qual è la differenza fondamentale tra un algoritmo Monte Carlo e un algoritmo Las Vegas?
  a: Il Monte Carlo ha tempo fisso e errore variabile, il Las Vegas ha tempo variabile e errore nullo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-27T10:59:27.068Z
---

# Monte Carlo sbaglia; Las Vegas aspetta

Gli algoritmi Monte Carlo hanno un tempo di esecuzione fisso ma un tasso d'errore variabile, mentre gli algoritmi Las Vegas hanno un tempo variabile e un tasso d'errore nullo. La distinzione è utile perché indica che cosa si paga in cambio di una risposta: nel primo caso la precisione, nel secondo la durata. ==Un Las Vegas, se termina, dà sempre la risposta giusta.== Il nome, coniato da László Babai nel 1979, è un gioco di parole sul metodo Monte Carlo.
