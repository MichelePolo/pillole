---
id: 6da9de-v3-02-le-reti-neurali-tendono-a-imparare
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - sicurezza-allineamento
  - modelli-linguistici
source:
  id: 6da9dee34fd1
  lang: en
  title: Neural algorithmic reasoning
  author: Petar Veličković
  site: The Gradient
  url: https://thegradient.pub/neural-algorithmic-reasoning/
anchor: learning “clever hacks” and sidestepping the actual procedure that they are attempting to execute
anchor_check: exact
quiz:
  q: Perché una rete neurale potente può comunque fallire nell'eseguire un algoritmo fuori dai dati di addestramento?
  a: Perché può imparare scorciatoie legate alle caratteristiche dei dati di addestramento invece della procedura reale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-08T09:06:54.676Z
---

# Le reti neurali tendono a imparare scorciatoie

Secondo l'autore, anche una rete neurale espressiva, addestrata a eseguire un algoritmo di grafi, può andare in overfitting sulle caratteristiche della distribuzione dei dati di addestramento. Invece di eseguire la procedura vera, impara trucchi che funzionano solo sugli input simili a quelli visti. Fuori distribuzione il comportamento crolla. Per questo non basta scegliere un modello potente: serve controllare cosa il modello sta davvero facendo.
