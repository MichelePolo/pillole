---
id: b003e8-v3-03-lo-stile-di-apprendimento-lento-rende
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - agenti
  - apprendimento-memoria
source:
  id: b003e8b2488e
  lang: en
  title: Meta Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-06-23-meta-rl/
anchor: Adjusting the weights of a recurrent network is slow but it allows the model to work out a new task fast
anchor_check: exact
quiz:
  q: Perché aggiornare lentamente i pesi di una rete può rendere veloce l'adattamento a un nuovo compito?
  a: Perché il lungo addestramento dei pesi produce un algoritmo interno che, nel test, risolve il nuovo compito rapidamente attraverso la dinamica dell'attività della rete.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.225Z
---

# Lo stile di apprendimento lento rende veloce l'adattamento

Secondo l'autrice, aggiornare i pesi di una rete ricorrente è lento, ma consente al modello di risolvere rapidamente un nuovo compito, usando un proprio algoritmo di apprendimento implementato nella dinamica della sua attività interna. È un'idea generale: un apprendimento lento e costoso produce una capacità di apprendimento rapido in situazioni nuove. Il meccanismo ricorda il modo in cui un apprendimento graduale si traduce in intuizioni immediate.
