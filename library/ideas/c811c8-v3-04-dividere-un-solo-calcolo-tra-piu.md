---
id: c811c8-v3-04-dividere-un-solo-calcolo-tra-piu
lang: it
kind: metodo
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
anchor: we can horizontally partition the computation for one tensor operation across multiple devices
anchor_check: exact
quiz:
  q: In che cosa il parallelismo tensoriale differisce dal parallelismo a modello diviso per strati?
  a: Divide il calcolo di una singola operazione all'interno di uno strato, invece di assegnare interi strati a dispositivi diversi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.096Z
---

# Dividere un solo calcolo tra più dispositivi

Il parallelismo tensoriale divide orizzontalmente il calcolo di una singola operazione su più dispositivi, invece di assegnare interi strati a macchine diverse. Nel caso dei transformer, le matrici dei pesi dei livelli MLP e di attenzione vengono spezzate per colonne, così che ogni dispositivo calcoli una parte del risultato e poi le parti vengano combinate. ==È un modo di distribuire la memoria e il calcolo all'interno dello stesso strato==.
