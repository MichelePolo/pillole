---
id: 57cf4a-v3-03-il-modello-deve-vedere-le-immagini
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 57cf4a2ec0df
  lang: en
  title: Generalized Visual Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-06-09-vlm/
anchor: the most important configuration is to fuse visual information early on into the transformer layers
anchor_check: exact
quiz:
  q: Secondo gli esperimenti su VisualBERT, quale configurazione conta di più?
  a: Integrare le informazioni visive presto nei livelli del transformer e pre-addestrare sul dataset di didascalie.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-08T09:06:54.725Z
---

# Il modello deve vedere le immagini al momento giusto

Secondo gli esperimenti di ablazione riportati, la scelta più importante per VisualBERT è integrare le informazioni visive presto nei livelli del transformer e pre-addestrare il modello su un dataset di didascalie. Invece l'inizializzazione da un BERT pre-addestrato e l'obiettivo di predizione frase-immagine hanno effetti relativamente piccoli. Secondo l'autrice, il punto decisivo è quindi dove e quando la visione entra nel modello.
