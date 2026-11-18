---
id: c8f3f2-v3-04-i-negativi-difficili-migliorano-l-apprendimento
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
anchor: Sampling bias which refers to false negative samples in contrastive learning can lead to a big performance drop.
anchor_check: exact
quiz:
  q: Perché i falsi negativi sono un problema nell'apprendimento contrastivo non supervisionato?
  a: Perché esempi della stessa classe vengono trattati come negativi, causando un forte calo delle prestazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-16T09:53:43.148Z
---

# I negativi difficili migliorano l'apprendimento ma sono rischiosi

Un negativo difficile è un esempio con etichetta diversa dall'ancora ma con rappresentazione molto vicina ad essa. Usarli rende l'apprendimento più efficace, ma senza etichette è facile prendere per negativi esempi che in realtà appartengono alla stessa classe, detti falsi negativi. Secondo l'autrice, Chuang e colleghi hanno mostrato che questo errore di campionamento può far crollare le prestazioni. Per questo sono stati proposti metodi di correzione del bias.
