---
id: 1d6525-v3-01-il-prompt-engineering-orienta-il-modello
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 1d65254430ae
  lang: en
  title: Prompt Engineering
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/
anchor: refers to methods for how to communicate with LLM to steer its behavior for desired outcomes without updating the model weights
anchor_check: exact
quiz:
  q: Che cosa distingue il prompt engineering dall'addestramento di un modello?
  a: Il prompt engineering orienta il comportamento del modello attraverso il modo in cui gli si comunica il compito, senza modificarne i pesi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.820Z
---

# Il prompt engineering orienta il modello senza riaddestrarlo

Il prompt engineering è l'insieme dei metodi con cui si comunica con un modello linguistico per orientarne il comportamento verso risultati desiderati, senza aggiornarne i pesi. ==Non è una tecnica fissa ma una scienza empirica==: lo stesso metodo può funzionare molto diversamente tra modelli diversi, e richiede sperimentazione e euristiche. Il suo obiettivo di fondo è legato all'allineamento e alla governabilità del modello.
