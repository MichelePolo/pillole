---
id: 76583c-v3-05-pre-training-e-self-training-sono
lang: it
kind: dato
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
anchor: Self-training can bring in additive improvement on top of pre-training, even using the same data source.
anchor_check: exact
quiz:
  q: Quando il pre-training smette di essere utile secondo gli esperimenti citati?
  a: Quando sono disponibili molti esempi etichettati per il compito downstream, dove diventa neutro o dannoso.
warnings:
  - corpo di 51 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-11T10:12:51.187Z
---

# Pre-training e self-training sono complementari

Secondo gli esperimenti citati, il self-training aiuta anche quando il pre-training non funziona, e i due approcci possono sommarsi. Il pre-training è utile con pochi dati etichettati, ma diventa neutro o dannoso quando i dati etichettati sono abbondanti. Per questo la combinazione dei due metodi è spesso la strada più efficace.
