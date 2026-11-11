---
id: 76583c-v3-03-le-etichette-false-possono-sostenere-il
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - sicurezza-allineamento
  - bias-cognitivi
source:
  id: 76583c4985bd
  lang: en
  title: "Learning with not Enough Data Part 1: Semi-Supervised Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-12-05-semi-supervised/
anchor: Confirmation bias is a problem with incorrect pseudo labels provided by an imperfect teacher model.
anchor_check: exact
quiz:
  q: Perché le pseudo-etichette errate sono un problema?
  a: Perché lo studente può imparare e rafforzare gli errori del modello insegnante, senza migliorare davvero.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-11T10:12:51.186Z
---

# Le etichette false possono sostenere il confirmation bias

Lo pseudo-labeling assegna etichette provvisorie ai dati non etichettati usando le previsioni del modello stesso. Se il modello di partenza sbaglia, lo studente rischia di imparare proprio quegli errori, fenomeno detto confirmation bias. Per limitarlo si usano soglie di confidenza, mixup, minimo di esempi etichettati per batch e augmentation forti. L'autrice sottolinea che l'overfitting su etichette sbagliate non produce un modello migliore.
