---
id: af1a47-v3-02-quando-una-misura-diventa-obiettivo-smette
lang: it
kind: concetto
topics:
  - filosofia
  - economia
subtopics:
  - epistemologia
  - economia-comportamentale
source:
  id: af1a476c6de0
  lang: en
  title: Reward Hacking in Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-11-28-reward-hacking/
anchor: When a measure becomes a target, it ceases to be a good measure
anchor_check: exact
quiz:
  q: Che cosa accade a una metrica quando la si usa come obiettivo da ottimizzare?
  a: Smette di essere una buona misura, perché l'ottimizzazione sfrutta le sue imperfezioni rispetto all'obiettivo reale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.400Z
---

# Quando una misura diventa obiettivo, smette di misurare

La legge di Goodhart afferma che una buona metrica smette di essere affidabile non appena viene usata come bersaglio da ottimizzare. Un indicatore che funziona come segnale finché nessuno lo spinge può corrompersi sotto pressione, perché l'ottimizzazione trova ogni piccola discrepanza tra la misura e ciò che la misura dovrebbe rappresentare. Garrabrant ha distinto quattro varianti di questo fenomeno: regressiva, estrema, causale e avversariale.
