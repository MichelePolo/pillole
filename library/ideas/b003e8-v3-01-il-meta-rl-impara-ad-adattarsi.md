---
id: b003e8-v3-01-il-meta-rl-impara-ad-adattarsi
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - agenti
source:
  id: b003e8b2488e
  lang: en
  title: Meta Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-06-23-meta-rl/
anchor: a meta-learning model is expected to generalize to new tasks or new environments that have never been encountered during training
anchor_check: near
quiz:
  q: Che cosa deve saper fare un buon modello di meta-learning quando incontra un compito nuovo?
  a: Adattarsi rapidamente al nuovo compito con poca esperienza, generalizzando da quelli già visti durante l'addestramento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.223Z
---

# Il meta-RL impara ad adattarsi a compiti nuovi

Il meta-reinforcement learning addestra un agente su una distribuzione di compiti simili, così che, davanti a un compito mai visto, riesca a risolverlo rapidamente. Non si tratta di imparare un singolo compito, ma di imparare a imparare: l'adattamento avviene al momento del test, con poca esperienza sul nuovo ambiente, e senza aggiornare esplicitamente i pesi. ==L'obiettivo è un agente che generalizza a nuovi ambienti==, non uno specializzato in uno solo.
