---
id: e01d33-v3-05-gli-esempi-difficili-possono-essere-errori
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: e01d339bfba6
  lang: en
  title: Thinking about High-Quality Human Data
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-02-05-human-data-quality/
anchor: we should not consider all hard-to-learn samples to be incorrect
anchor_check: exact
quiz:
  q: Perché un esempio difficile da apprendere non va sempre eliminato?
  a: Perché gli esempi difficili possono essere ambigui o informativi, e aiutare il modello a generalizzare, invece di essere solo etichette errate.
warnings:
  - corpo di 54 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.785Z
---

# Gli esempi difficili possono essere errori o informazioni utili

Monitorare come cambia la predizione di un modello durante l'addestramento aiuta a individuare dati sospetti. Gli esempi appresi con difficoltà e con bassa confidenza hanno più probabilità di avere etichette sbagliate, ma non vanno scartati automaticamente. Secondo l'autore, anche gli esempi ambigui e difficili possono essere molto informativi e aiutare la generalizzazione fuori distribuzione.
