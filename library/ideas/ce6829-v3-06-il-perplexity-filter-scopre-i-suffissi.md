---
id: ce6829-v3-06-il-perplexity-filter-scopre-i-suffissi
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - sicurezza-allineamento
  - privacy-sicurezza
source:
  id: ce68292451aa
  lang: en
  title: Adversarial Attacks on LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/
anchor: White-box attacks often lead to nonsensical adversarial prompts and thus they can be detected by examining perplexity.
anchor_check: exact
quiz:
  q: Perché un filtro di perplessità può individuare i suffissi adversariali?
  a: Perché spesso sono sequenze senza senso, con perplessità molto alta rispetto al testo normale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.879Z
---

# Il perplexity filter scopre i suffissi adversariali

I suffissi adversariali generati con metodi white-box spesso producono sequenze prive di senso, con perplessità molto alta. Questo le rende individuabili: un filtro basato sulla perplessità può bloccarle. Ma un attaccante può ottimizzare anche per una perplessità più bassa, con un compromesso, perché così l'efficacia dell'attacco tende a calare. Il risultato è una corsa tra difesa e attacco, dove ogni protezione chiede un prezzo in efficacia.
