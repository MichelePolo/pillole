---
id: 7b9f4f-v3-06-il-disaccordo-tra-modelli-segnala-l
lang: it
kind: concetto
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
anchor: we could use the disagreement among models to set the exploration bonus
anchor_check: exact
quiz:
  q: Perché il disaccordo tra più modelli predittivi può guidare l'esplorazione?
  a: Perché indica bassa confidenza nelle previsioni, quindi richiede più esplorazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.931Z
---

# Il disaccordo tra modelli segnala l'incertezza

Quando più modelli predittivi indipendenti danno risposte diverse, il disaccordo tra loro è un segnale di bassa confidenza e suggerisce di esplorare di più. Usare la varianza di un insieme di modelli come bonus è un'idea semplice e robusta. ==L'incertezza collettiva diventa così una guida diretta all'esplorazione.== Questo approccio riflette l'idea più generale che il disaccordo tra fonti indipendenti sia un buon motivo per indagare.
