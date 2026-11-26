---
id: bf0a61-v3-03-la-colorazione-chiede-di-capire-il
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
anchor: due to the multimodal nature of the colorization problem
anchor_check: exact
quiz:
  q: Perché per la colorazione conviene predire una distribuzione di colori invece di un valore singolo?
  a: Perché un oggetto può avere più colori plausibili, cioè il problema è multimodale, e una distribuzione gestisce meglio questa ambiguità.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.172Z
---

# La colorazione chiede di capire il contenuto dell'immagine

Colorare un'immagine in scala di grigi è un compito di predizione senza etichette: il modello deve stimare i colori plausibili a partire dalla luminosità. Per gestire il fatto che un oggetto può avere più colori possibili, conviene predire una distribuzione su valori di colore discretizzati, usando la cross-entropia, invece di predire un singolo valore con errore quadratico. Secondo l'autrice, questa scelta rispecchia la natura multimodale del problema.
