---
id: 93e53a-v3-01-il-rumore-aggiunto-a-passi-graduali
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 93e53a97f2e3
  lang: en
  title: What are Diffusion Models?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-07-11-diffusion-models/
anchor: add small amount of Gaussian noise to the sample in $T$ steps
anchor_check: exact
quiz:
  q: Che cosa fa il processo di diffusione in avanti sui dati?
  a: Aggiunge gradualmente piccole quantità di rumore gaussiano fino a trasformare il dato in rumore quasi puro.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.327Z
---

# Il rumore aggiunto a passi graduali distrugge i dati

Il processo di diffusione in avanti aggiunge piccole quantità di rumore gaussiano a un dato in T passi, con una sequenza di varianza controllata. Con il progredire dei passi il campione perde progressivamente le sue caratteristiche riconoscibili, finché diventa indistinguibile da un rumore gaussiano isotropo. ==Il modello impara il processo inverso==, cioè come ricostruire un campione plausibile partendo dal rumore, e in questo sta l'idea centrale dei modelli di diffusione.
