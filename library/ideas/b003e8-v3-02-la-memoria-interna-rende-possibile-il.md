---
id: b003e8-v3-02-la-memoria-interna-rende-possibile-il
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - modelli-linguistici
  - apprendimento-memoria
source:
  id: b003e8b2488e
  lang: en
  title: Meta Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-06-23-meta-rl/
anchor: Without memory, meta-RL would not work.
anchor_check: exact
quiz:
  q: Perché un agente di meta-RL ha bisogno di una rete ricorrente?
  a: Perché il suo stato nascosto gli permette di memorizzare e aggiornare ciò che ha appreso sul compito in corso durante l'interazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.224Z
---

# La memoria interna rende possibile il meta-apprendimento

Un agente di meta-RL deve poter conservare informazioni sul compito in corso mentre interagisce con l'ambiente. Le reti ricorrenti, come le LSTM, mantengono uno stato nascosto che funziona da memoria: aggiornandolo durante l'esperienza, l'agente registra ciò che ha scoperto sul compito attuale. Secondo l'autore, senza questa memoria il meta-RL non funzionerebbe. La scelta è coerente con l'idea di fornire alla politica la storia di azioni e ricompense recenti.
