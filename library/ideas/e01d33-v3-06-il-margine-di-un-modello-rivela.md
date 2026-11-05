---
id: e01d33-v3-06-il-margine-di-un-modello-rivela
lang: it
kind: metodo
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
anchor: mislabeled samples would have a smaller margin than correct samples
anchor_check: exact
quiz:
  q: Perché un'etichetta errata tende ad avere un margine basso durante l'addestramento?
  a: Perché l'apprendimento dagli altri esempi della stessa classe spinge il modello verso la risposta giusta, in contrasto con l'etichetta sbagliata.
warnings:
  - corpo di 59 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.786Z
---

# Il margine di un modello rivela etichette sbagliate

Il metodo AUM misura, durante l'addestramento, la differenza tra il punteggio assegnato alla classe corretta e quello della classe concorrente più alta, mediando su tutte le epoche. Un margine negativo o molto basso suggerisce un'etichetta errata, perché la generalizzazione dagli altri esempi della stessa classe spinge nella direzione opposta. Una soglia viene stimata inserendo esempi fittizi con etichetta inventata.
