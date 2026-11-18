---
id: c8f3f2-v3-02-le-augmentation-creano-varianti-che-preservano
lang: it
kind: metodo
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
anchor: The augmentation should significantly change its visual appearance but keep the semantic meaning unchanged.
anchor_check: exact
quiz:
  q: Perché le trasformazioni usate per creare coppie positive devono cambiare l'aspetto ma non il significato?
  a: Così il modello impara la parte essenziale della rappresentazione e ignora le variazioni irrilevanti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-16T09:53:43.147Z
---

# Le augmentation creano varianti che preservano il significato

Nell'apprendimento contrastivo sulle immagini, una stessa istanza viene trasformata più volte per ottenere coppie positive. Le trasformazioni devono cambiare molto l'aspetto visivo lasciando invariato il contenuto semantico. Così il modello è spinto a imparare ciò che è essenziale nella rappresentazione, ignorando le variazioni irrilevanti. Secondo la fonte, la combinazione di ritaglio casuale e distorsione del colore è cruciale per SimCLR.
