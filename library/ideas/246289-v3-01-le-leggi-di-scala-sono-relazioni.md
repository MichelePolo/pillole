---
id: 246289-v3-01-le-leggi-di-scala-sono-relazioni
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 2462892d260e
  lang: en
  title: Scaling Laws, Carefully
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-06-24-scaling-laws/
anchor: the training loss $L$ decreases predictably as we scale up model size $N$, dataset size $D$, and compute $C$
anchor_check: exact
quiz:
  q: Perché le leggi di scala sono utili per progettare modelli grandi prima di addestrarli?
  a: Perché permettono di estrapolare, a partire da piccoli esperimenti, il loss e il fabbisogno di dati e calcolo di modelli molto più grandi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.472Z
---

# Le leggi di scala sono relazioni a potenza prevedibili

Il loss di un modello di deep learning tende a diminuire in modo prevedibile quando si aumentano dimensione del modello, quantità di dati e calcolo. Su una scala log-log questa relazione appare come una retta. ==Questa regolarità permette di stimare il comportamento di modelli grandi a partire da esperimenti piccoli e poco costosi==, che è il motivo per cui le leggi di scala sono così utili nella pratica. Il principio resta valido indipendentemente dalle singole costanti numeriche che cambiano da studio a studio.
