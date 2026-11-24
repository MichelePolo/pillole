---
id: bf0a61-v3-05-il-tempo-dei-video-fornisce-un
lang: it
kind: concetto
topics:
  - ai
  - fisica
subtopics:
  - modelli-linguistici
  - termodinamica
source:
  id: bf0a610ccb4a
  lang: en
  title: Self-Supervised Representation Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-11-10-self-supervised/
anchor: The order of frames describes certain rules of reasonings and physical logics
anchor_check: exact
quiz:
  q: Perché l'ordine dei fotogrammi di un video è un segnale utile per l'apprendimento auto-supervisionato?
  a: Perché l'ordine dei fotogrammi codifica regole fisiche e il movimento degli oggetti, che il modello deve capire per riconoscere la sequenza corretta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.173Z
---

# Il tempo dei video fornisce un segnale gratuito

Nei video i fotogrammi vicini nel tempo sono più simili, e l'ordine dei fotogrammi rispetta regole fisiche come la gravità e la direzione del movimento. Un modello che verifica se una sequenza è nell'ordine giusto, o che riconosce la freccia del tempo, deve ragionare sul moto degli oggetti. Secondo l'autore, questi compiti migliorano poi la classificazione delle azioni quando usati come pre-addestramento, anche se serve ancora un fine-tuning.
