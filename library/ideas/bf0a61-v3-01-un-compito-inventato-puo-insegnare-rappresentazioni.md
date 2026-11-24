---
id: bf0a61-v3-01-un-compito-inventato-puo-insegnare-rappresentazioni
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: bf0a610ccb4a
  lang: en
  title: Self-Supervised Representation Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-11-10-self-supervised/
anchor: we expect the model to learn high-quality latent variables for real-world tasks
anchor_check: exact
quiz:
  q: Perché un compito di pretesto come la predizione della rotazione viene usato anche se la sua accuratezza non interessa?
  a: Perché serve a far apprendere al modello una rappresentazione intermedia utile per compiti reali successivi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.170Z
---

# Un compito inventato può insegnare rappresentazioni utili

L'apprendimento auto-supervisionato costruisce etichette a partire dagli stessi dati non etichettati, formulando un compito di predizione di una parte dell'informazione a partire dal resto. L'accuratezza su questo compito artificiale conta poco: ciò che interessa è la rappresentazione intermedia che il modello impara, sperando che catturi significati semantici o strutturali utili a compiti successivi. Secondo l'autore, questa è la ragione per cui l'idea è così efficace quando le etichette umane sono costose e i dati non etichettati abbondano.
