---
id: c8f3f2-v3-05-byol-apprende-senza-usare-coppie-negative
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
anchor: Unlike most popular contrastive learning based approaches, BYOL does not use negative pairs.
anchor_check: exact
quiz:
  q: Come riesce BYOL a evitare il collasso senza coppie negative?
  a: Usa una rete target aggiornata come media mobile della rete online, e la normalizzazione per batch introduce implicitamente un effetto contrastivo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-16T09:53:43.149Z
---

# BYOL apprende senza usare coppie negative

BYOL sostiene di raggiungere risultati allo stato dell'arte senza usare campioni negativi. Usa due reti, una online e una target, con quest'ultima aggiornata come media mobile dei pesi della prima. La rete online prova a predire la rappresentazione della rete target. Secondo le osservazioni riportate nella fonte, la normalizzazione per batch introduce implicitamente una forma di apprendimento contrastivo, che aiuta a evitare il collasso del modello.
