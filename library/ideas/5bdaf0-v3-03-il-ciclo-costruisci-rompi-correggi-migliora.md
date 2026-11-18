---
id: 5bdaf0-v3-03-il-ciclo-costruisci-rompi-correggi-migliora
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - sicurezza-allineamento
source:
  id: 5bdaf053b66c
  lang: en
  title: Reducing Toxicity in Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-03-21-lm-toxicity/
anchor: Build it, break it, fix it
anchor_check: exact
quiz:
  q: Qual è il vantaggio di includere esempi avversari nel riaddestramento del classificatore?
  a: Il modello diventa più robusto contro gli attacchi che prima riusciva a eludere.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-17T10:51:32.375Z
---

# Il ciclo «costruisci, rompi, correggi» migliora i classificatori

Dinan e colleghi propongono un processo iterativo con esseri umani nel ciclo: si addestra un classificatore, poi lavoratori umani cercano di scrivere messaggi tossici che il modello classifica come sicuri, e infine il modello viene riaddestrato includendo questi esempi avversari. Ripetendo il ciclo, il sistema diventa più robusto, sebbene oltre un certo numero di round le prestazioni sul compito standard possano peggiorare per overfitting.
