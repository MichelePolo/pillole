---
id: 76583c-v3-04-il-rumore-utile-rende-la-decisione
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 76583c4985bd
  lang: en
  title: "Learning with not Enough Data Part 1: Semi-Supervised Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-12-05-semi-supervised/
anchor: One critical element in their setup is to have noise during student model training but have no noise for the teacher to produce pseudo labels.
anchor_check: exact
quiz:
  q: Perché lo studente nel Noisy Student viene addestrato con rumore mentre l'insegnante no?
  a: Perché il rumore durante l'addestramento dello studente rende il suo confine decisionale più liscio e gli permette di superare l'insegnante.
warnings:
  - corpo di 59 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-11T10:12:51.186Z
---

# Il rumore utile rende la decisione più liscia

Nel self-training con Noisy Student, il modello insegnante produce le etichette senza rumore, mentre lo studente viene addestrato con rumore come dropout, stochastic depth e RandAugment. Secondo l'autore, questo rumore spinge il confine decisionale a essere più regolare sia sui dati etichettati sia su quelli non etichettati. Lo studente, inoltre, deve essere più grande dell'insegnante per imparare di più.
