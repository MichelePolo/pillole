---
id: bf0a61-v3-02-ruotare-un-immagine-costringe-il-modello
lang: it
kind: metodo
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
anchor: the model has to learn to recognize high level object parts
anchor_check: exact
quiz:
  q: Perché predire la rotazione di un'immagine porta il modello a imparare concetti semantici?
  a: Perché per riconoscere l'orientamento deve identificare parti degli oggetti e le loro posizioni relative, non solo pattern locali.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.171Z
---

# Ruotare un'immagine costringe il modello a capire le parti

Per predire quale rotazione di 0, 90, 180 o 270 gradi sia stata applicata, il modello non può basarsi su semplici pattern locali: deve riconoscere le parti degli oggetti, come teste, nasi e occhi, e le loro posizioni relative. Il compito è economico da costruire e, secondo l'autrice, spinge la rete a imparare concetti semantici sugli oggetti senza alcuna etichetta.
