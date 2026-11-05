---
id: 2bc4a9-v3-04-piu-modelli-non-bastano-senza-una
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
  - agenti
source:
  id: 2bc4a920b1b3
  lang: en
  title: Harness Engineering for Self-Improvement
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-07-04-harness/
anchor: Recursive structure alone is not enough. The base model must be capable enough to improve the mechanism.
anchor_check: exact
quiz:
  q: Cosa mostra l'esperimento STOP con modelli diversi?
  a: Che il miglioramento ricorsivo funziona solo se il modello di base è abbastanza capace; con modelli più deboli peggiora le prestazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T00:05:05.592Z
---

# Più modelli non bastano senza una base capace

Lo studio STOP mostra che un ciclo ricorsivo di miglioramento dell'ottimizzatore funziona con GPT-4 ma peggiora con modelli più deboli come GPT-3.5 e Mixtral. Secondo l'autore, questo indica che la sola struttura ricorsiva non basta: il modello di base deve essere abbastanza capace da migliorare il meccanismo stesso. Il miglioramento dell'harness rende quindi il modello più utilizzabile, ma l'intelligenza resta il fattore centrale.
