---
id: 4dab64-v3-05-il-pruning-strutturato-permette-accelerazioni-reali
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
anchor: Unstructured pruning often does not work well with modern hardware and doesn’t lead to actual inference speedup.
anchor_check: exact
quiz:
  q: Perché il pruning strutturato è preferibile per velocizzare l'inferenza?
  a: Perché mantiene una struttura compatibile con l'hardware e le moltiplicazioni dense, quindi produce accelerazioni reali.
warnings:
  - corpo di 55 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.322Z
---

# Il pruning strutturato permette accelerazioni reali

Il pruning elimina pesi poco importanti per ridurre il modello. Quello non strutturato, però, rende le matrici irregolari e spesso non accelera l'inferenza sull'hardware moderno. Il pruning strutturato mantiene una forma compatibile con le moltiplicazioni dense, quindi può produrre velocità effettive. Secondo l'autrice, questo è il tipo di pruning su cui conviene concentrarsi per l'inferenza.
