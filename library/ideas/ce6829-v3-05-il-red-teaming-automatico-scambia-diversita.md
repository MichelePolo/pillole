---
id: ce6829-v3-05-il-red-teaming-automatico-scambia-diversita
lang: it
kind: dato
topics:
  - ai
subtopics:
  - sicurezza-allineamento
source:
  id: ce68292451aa
  lang: en
  title: Adversarial Attacks on LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/
anchor: There is a clear tradeoff between sample diversity and attack success rate.
anchor_check: exact
quiz:
  q: Che cosa si perde quando il reinforcement learning massimizza il successo degli attacchi?
  a: La diversità dei prompt, perché il sistema tende a sfruttare un unico schema di attacco efficace.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.879Z
---

# Il red-teaming automatico scambia diversità con successo

Nel red-teaming basato su modelli, un LLM genera prompt che provocano output dannosi nel modello bersaglio. Un risultato sottolineato dall'autore è il compromesso tra diversità e tasso di successo: l'ottimizzazione con reinforcement learning massimizza il successo, ma tende a concentrarsi su un solo schema di attacco che funziona, perdendo varietà. Il metodo zero-shot, al contrario, preserva la diversità ma ottiene meno successi.
