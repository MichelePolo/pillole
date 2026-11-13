---
id: c811c8-v3-01-il-collo-di-bottiglia-e-la
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
anchor: The main bottleneck for training very large neural network models is the intense demand for a large amount of GPU memory
anchor_check: exact
quiz:
  q: Qual è il principale ostacolo nell'addestramento di reti neurali molto grandi?
  a: La forte richiesta di memoria GPU, ben oltre ciò che un singolo dispositivo può contenere.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.095Z
---

# Il collo di bottiglia è la memoria della GPU

Addestrare modelli molto grandi richiede una quantità di memoria GPU che supera di gran lunga ciò che un singolo dispositivo può ospitare. Non bastano solo i pesi del modello: ==gradienti e stati dell'ottimizzatore occupano spesso più spazio dei pesi stessi==. Per questo il parallelismo non è un'ottimizzazione facoltativa ma una necessità, e le diverse tecniche nascono per dividere in modi diversi memoria e calcolo tra più macchine.
