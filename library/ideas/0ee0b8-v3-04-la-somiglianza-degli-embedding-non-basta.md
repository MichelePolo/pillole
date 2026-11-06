---
id: 0ee0b8-v3-04-la-somiglianza-degli-embedding-non-basta
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - modelli-linguistici
  - probabilita-statistica
source:
  id: 0ee0b8f51ebf
  lang: en
  title: Do text embeddings perfectly encode text?
  author: Jack Morris
  site: The Gradient
  url: https://thegradient.pub/text-embedding-inversion/
anchor: we see a very high cosine similarity – around 0.97
anchor_check: exact
quiz:
  q: Un embedding molto simile a quello originale garantisce che il testo generato sia identico all'originale?
  a: No, secondo l'autore testi diversi possono avere embedding molto simili, pur non essendo identici al testo di partenza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.813Z
---

# La somiglianza degli embedding non basta a garantire il testo

Secondo l'autore, un modello che ricostruisce un testo diverso dall'originale può comunque produrre un embedding molto simile a quello vero, con similarità coseno intorno a 0,97. Questo mostra che la vicinanza nello spazio degli embedding non implica identità del testo. Il fatto che collisioni tra testi diversi non siano state osservate negli esperimenti è, per l'autore, ciò che rende possibile il recupero.
