---
id: c8f3f2-v3-03-batch-grandi-forniscono-negativi-piu-diversi
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: c8f3f2a59bb8
  lang: en
  title: Contrastive Representation Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-05-31-contrastive/
anchor: Only when the batch size is big enough, the loss function can cover a diverse enough collection of negative samples
anchor_check: exact
quiz:
  q: Perché i metodi contrastivi che usano negativi nel batch hanno bisogno di batch grandi?
  a: Perché solo con batch grandi la perdita copre un insieme di esempi negativi abbastanza vario e impegnativo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-16T09:53:43.148Z
---

# Batch grandi forniscono negativi più diversi e utili

Nei metodi contrastivi che usano negativi presi dallo stesso batch, la dimensione del batch conta molto. Solo con un batch abbastanza grande la funzione di perdita copre una varietà sufficiente di esempi negativi, abbastanza difficili da spingere il modello a imparare rappresentazioni significative. Questo limita però la scalabilità di metodi come SimCLR, che richiedono batch molto grandi. MoCo nasce anche per separare la dimensione del batch dal numero di negativi.
