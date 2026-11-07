---
id: 189b69-v3-01-reti-molto-sovraparametrizzate-si-addestrano-comunque
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 189b698067bc
  lang: en
  title: Some Math behind Neural Tangent Kernel
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-09-08-ntk/
anchor: the optimization process can consistently lead to similarly good outcomes
anchor_check: exact
quiz:
  q: Perché il fatto che una rete abbia più parametri che dati di addestramento è sorprendente?
  a: Perché ci si aspetterebbe che un modello così flessibile memorizzi il rumore e generalizzi male, mentre in pratica spesso generalizza bene.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.362Z
---

# Reti molto sovraparametrizzate si addestrano comunque bene

Le reti neurali hanno spesso più parametri dei dati di addestramento, eppure riescono ad adattarsi ai dati con perdita di addestramento quasi nulla e buona generalizzazione. Anche se i parametri partono da valori casuali, l'ottimizzazione porta spesso a risultati simili. Questo sembra controintuitivo, perché un modello così flessibile potrebbe memorizzare il rumore. La teoria del kernel tangente nasce proprio per spiegare questo comportamento, mostrando come l'addestramento con discesa del gradiente evolva in modo prevedibile.
