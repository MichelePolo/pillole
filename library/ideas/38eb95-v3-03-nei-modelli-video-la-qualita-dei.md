---
id: 38eb95-v3-03-nei-modelli-video-la-qualita-dei
lang: it
kind: dato
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: 38eb95b0e9e6
  lang: en
  title: Diffusion Models for Video Generation
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-04-12-diffusion-video/
anchor: a filtered, higher quality dataset leads to better model quality, even when this dataset is much smaller
anchor_check: exact
quiz:
  q: Perché un dataset video più piccolo ma filtrato può dare modelli migliori?
  a: Perché la qualità dei dati, con clip ben selezionate e didascalie accurate, pesa più della sola quantità.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.474Z
---

# Nei modelli video la qualità dei dati conta più della quantità

Il lavoro su Stable Video Diffusion mostra che la curatela del dataset incide molto sulle prestazioni del modello. Si tagliano i video in clip, si annotano, e si eliminano le clip con poco movimento, con troppo testo visibile o con scarso valore estetico. Gli esperimenti riportati indicano che un dataset più piccolo ma filtrato e di qualità superiore produce modelli migliori. Secondo l'autrice, quindi, la selezione dei dati è una leva decisiva quanto le dimensioni dell'addestramento.
