---
id: af1a47-v3-05-chi-valuta-un-modello-puo-essere
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: af1a476c6de0
  lang: en
  title: Reward Hacking in Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-11-28-reward-hacking/
anchor: LLMs are sensitive to the position of responses and suffer from positional bias
anchor_check: exact
quiz:
  q: Quale tecnica riduce il bias di posizione quando un LLM valuta più risposte?
  a: Aggregare i punteggi su diversi ordini di presentazione delle risposte, ed eventualmente coinvolgere revisori umani nei casi difficili.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.401Z
---

# Chi valuta un modello può essere ingannato dall'ordine

Quando un LLM viene usato come giudice di altri testi, il suo giudizio dipende da fattori estranei alla qualità, come la posizione delle risposte nel contesto. Wang e colleghi hanno osservato che invertendo l'ordine dei candidati cambia spesso il punteggio, e che i modelli tendono a preferire i propri output. Per ridurre questo bias si possono usare più spiegazioni, aggregare i risultati su più ordini e coinvolgere esseri umani nei casi più difficili.
