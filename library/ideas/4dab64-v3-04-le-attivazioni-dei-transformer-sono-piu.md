---
id: 4dab64-v3-04-le-attivazioni-dei-transformer-sono-piu
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: 4dab64a7e3ce
  lang: en
  title: Large Transformer Model Inference Optimization
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-10-inference-optimization/
anchor: activations are harder to quantize than weights in transformer models
anchor_check: exact
quiz:
  q: Perché la quantizzazione naive dei transformer fallisce spesso?
  a: Perché le attivazioni hanno intervalli dinamici molto ampi e valori anomali, che una quantizzazione semplice non riesce a rappresentare.
warnings:
  - titolo di 11 parole (avviso oltre 10)
  - corpo di 53 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.321Z
---

# Le attivazioni dei transformer sono più difficili da quantizzare dei pesi

Quantizzare i transformer a bassa precisione peggiora spesso molto le prestazioni, perché le attivazioni hanno intervalli dinamici ampi e valori anomali. Con modelli di miliardi di parametri compaiono feature con magnitudini molto più grandi delle altre. Per questo molti metodi trattano separatamente pesi e attivazioni, o spostano la difficoltà dalle attivazioni ai pesi.
