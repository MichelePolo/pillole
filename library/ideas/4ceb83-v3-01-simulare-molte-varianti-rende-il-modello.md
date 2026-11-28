---
id: 4ceb83-v3-01-simulare-molte-varianti-rende-il-modello
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: 4ceb83900555
  lang: en
  title: Domain Randomization for Sim2Real Transfer
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-05-05-domain-randomization/
anchor: we are able to create a variety of simulated environments with randomized properties and train a model that works across all of them
anchor_check: exact
quiz:
  q: Perché addestrare un modello su molti ambienti simulati casuali può aiutarlo a funzionare nel mondo reale?
  a: Perché il mondo reale viene visto come un campione della stessa ampia distribuzione di variazioni, quindi il modello generalizza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-27T10:59:26.996Z
---

# Simulare molte varianti rende il modello robusto alla realtà

Addestrare un modello in un simulatore è utile perché produce dati quasi infiniti, ma la realtà differisce sempre dalla simulazione. La ==domain randomization== propone di non cercare una simulazione perfetta: si creano molti ambienti simulati con proprietà casuali (attrito, massa, luci, texture, posizione della camera) e si addestra il modello a funzionare su tutti. Il mondo reale diventa semplicemente uno dei tanti campioni di quella distribuzione, quindi il modello può generalizzarvi senza aver mai visto esattamente quell'ambiente.
