---
id: bd2a1c-v3-05-distanza-e-attenzione-meno-peso-a
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: bd2a1c61491f
  lang: en
  title: The Transformer Family Version 2.0
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/
anchor: adds a constant bias term on query-key attention scores, proportional to pairwise distances
anchor_check: exact
quiz:
  q: Che effetto ha il bias di ALiBi sui punteggi di attenzione?
  a: Introduce una penalità proporzionale alla distanza tra query e chiave, favorendo i token recenti e riducendo il peso di quelli lontani.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.451Z
---

# Distanza e attenzione: meno peso a ciò che è lontano

ALiBi aggiunge ai punteggi di attenzione un termine proporzionale alla distanza tra query e chiave, che favorisce i token recenti e penalizza quelli molto lontani. Le penalità crescono a velocità diverse nelle varie teste, con pesi fissati secondo una progressione geometrica invece che appresi. Secondo l'autore, questo approccio permette al modello di estrapolare a contesti più lunghi di quelli visti in addestramento, e l'idea è simile a quella delle codifiche posizionali relative.
