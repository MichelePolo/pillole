---
id: 93e53a-v3-03-dinamica-di-langevin-campionare-usando-solo
lang: it
kind: concetto
topics:
  - ai
  - fisica
subtopics:
  - termodinamica
  - agenti
source:
  id: 93e53a97f2e3
  lang: en
  title: What are Diffusion Models?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-07-11-diffusion-models/
anchor: Langevin dynamics is a concept from physics, developed for statistically modeling molecular systems.
anchor_check: exact
quiz:
  q: Quale vantaggio offre il rumore nella dinamica di Langevin stocastica?
  a: Evita che l'ottimizzazione resti bloccata in minimi locali.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.329Z
---

# Dinamica di Langevin: campionare usando solo gradienti

La dinamica di Langevin, nata in fisica per modellare sistemi molecolari, permette di generare campioni da una distribuzione di probabilità usando soltanto i gradienti del logaritmo della densità, attraverso una catena di aggiornamenti con rumore. Combinata con la discesa stocastica del gradiente, il rumore iniettato evita che l'ottimizzazione resti intrappolata in minimi locali. ==Il legame tra modelli generativi e fisica statistica è quindi profondo e non solo metaforico==.
