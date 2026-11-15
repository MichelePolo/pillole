---
id: 93e53a-v3-05-un-campionamento-deterministico-rende-le-immagini
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: 93e53a97f2e3
  lang: en
  title: What are Diffusion Models?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-07-11-diffusion-models/
anchor: DDIM has the same marginal noise distribution but deterministically maps noise back to the original data samples.
anchor_check: exact
quiz:
  q: Perché un campionamento deterministico consente interpolazioni significative nello spazio latente?
  a: Perché a un dato rumore iniziale corrisponde sempre lo stesso campione, quindi lo spazio latente diventa coerente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.330Z
---

# Un campionamento deterministico rende le immagini coerenti

Il modello di diffusione implicita (DDIM) usa un parametro che, se posto a zero, rende il processo di generazione deterministico: lo stesso rumore iniziale produce sempre la stessa immagine. Questo permette di saltare molti passi, ottenendo campioni di buona qualità con meno iterazioni. Di conseguenza, ==il rumore iniziale diventa una rappresentazione latente su cui si possono fare interpolazioni semanticamente sensate==.
