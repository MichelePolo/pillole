---
id: bf0a61-v3-04-confrontare-positivi-e-negativi-insegna-a
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: bf0a610ccb4a
  lang: en
  title: Self-Supervised Representation Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-11-10-self-supervised/
anchor: uses cross-entropy loss to measure how well the model can classify the “future” representation amongst a set of unrelated “negative” samples
anchor_check: exact
quiz:
  q: Perché il contrastive learning preferisce classificare il target tra negativi invece di predire direttamente il futuro?
  a: Perché una perdita semplice come l'MSE ha capacità insufficiente e un modello generativo completo sarebbe troppo costoso.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.172Z
---

# Confrontare positivi e negativi insegna a distinguere

Il contrastive learning addestra il modello a riconoscere quale campione sia il vero target tra molti campioni non correlati, usando una perdita di tipo cross-entropia. In CPC, ad esempio, il modello deve identificare il futuro corretto tra negativi presi da altri punti. L'autore sostiene che questo approccio sia motivato dal fatto che una perdita semplice come l'MSE ha capacità insufficiente, mentre un modello generativo completo costa troppo.
