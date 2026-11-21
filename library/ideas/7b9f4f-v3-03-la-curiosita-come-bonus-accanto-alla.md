---
id: 7b9f4f-v3-03-la-curiosita-come-bonus-accanto-alla
lang: it
kind: metodo
topics:
  - ai
  - psicologia
subtopics:
  - agenti
  - abitudini-motivazione
source:
  id: 7b9f4f54765d
  lang: en
  title: Exploration Strategies in Deep Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-06-07-exploration-drl/
anchor: augment the environment reward with an additional bonus signal to encourage extra exploration
anchor_check: exact
quiz:
  q: Qual è lo scopo del bonus intrinseco sommato alla ricompensa dell'ambiente?
  a: Incoraggiare l'esplorazione quando la ricompensa esterna è rara o assente, bilanciando sfruttamento ed esplorazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.929Z
---

# La curiosità come bonus accanto alla ricompensa esterna

Un modo comune per migliorare l'esplorazione consiste nel sommare alla ricompensa dell'ambiente un segnale interno di bonus, pesato da un parametro che regola l'equilibrio tra sfruttare ed esplorare. L'idea si ispira alla motivazione intrinseca studiata in psicologia: l'esplorazione dovrebbe essere gratificante di per sé. ==Il bonus cresce con la curiosità, la sorpresa e la familiarità di uno stato.== Questo permette di incoraggiare comportamenti utili anche quando la ricompensa esterna è rara.
