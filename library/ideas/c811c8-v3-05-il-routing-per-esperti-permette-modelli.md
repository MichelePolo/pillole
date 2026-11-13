---
id: c811c8-v3-05-il-routing-per-esperti-permette-modelli
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: c811c8fa03ef
  lang: en
  title: How to Train Really Large Models on Many GPUs?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-09-25-train-large/
anchor: "The core of the idea is ensembling learning: Combination of multiple weak learners gives you a strong learner!"
anchor_check: exact
quiz:
  q: Perché il Mixture-of-Experts può aumentare la capacità del modello senza aumentare proporzionalmente il calcolo?
  a: Perché per ogni input viene attivato solo un sottoinsieme di esperti, quindi non tutti i parametri vengono usati.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.096Z
---

# Il routing per esperti permette modelli molto più grandi

Nel modello Mixture-of-Experts, una rete contiene molti sotto-modelli chiamati esperti, e un meccanismo di gating decide quali attivare per ogni input. Così non tutti i parametri vengono usati a ogni passo, e la capacità del modello può crescere senza un proporzionale aumento di calcolo. ==Il punto cruciale è che il gating sceglie solo pochi esperti per ciascun input==, e l'idea di base è quella dell'ensemble: più modelli deboli combinati danno un modello forte.
