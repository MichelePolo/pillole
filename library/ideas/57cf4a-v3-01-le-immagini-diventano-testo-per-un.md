---
id: 57cf4a-v3-01-le-immagini-diventano-testo-per-un
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
source:
  id: 57cf4a2ec0df
  lang: en
  title: Generalized Visual Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-06-09-vlm/
anchor: images are divided into multiple smaller patches and each patch is treated as one
anchor_check: exact
quiz:
  q: Perché si possono trattare le patch di un'immagine come token di testo?
  a: Perché suddividendo l'immagine in patch, ciascuna può essere inserita nella sequenza come un token, permettendo al modello di elaborare testo e immagini insieme.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-08T09:06:54.724Z
---

# Le immagini diventano testo per un modello linguistico

Per far ragionare un modello linguistico sulle immagini si può trattare la visione come un'altra forma di input. Un approccio diretto è dividere l'immagine in patch e trattare ciascuna patch come un token della sequenza, addestrando il modello su testo e immagini insieme. In questo modo il modello può scoprire da sé i legami tra ciò che vede e le parole che usa, invece di passare da un rilevatore di oggetti separato.
