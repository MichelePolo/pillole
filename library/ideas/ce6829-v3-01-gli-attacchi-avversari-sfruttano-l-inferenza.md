---
id: ce6829-v3-01-gli-attacchi-avversari-sfruttano-l-inferenza
lang: it
kind: concetto
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
anchor: In the context of large language models In this post we assume the attacks only happen at inference time, meaning that model weights are fixed.
anchor_check: exact
quiz:
  q: Quando, secondo questo quadro, avvengono gli attacchi avversari a un LLM?
  a: Solo al momento dell'inferenza, senza modificare i pesi del modello.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.877Z
---

# Gli attacchi avversari sfruttano l'inferenza, non il training

Gli attacchi avversari agli LLM, in questo quadro, avvengono solo al momento dell'inferenza, mentre i pesi del modello restano fissi. L'attaccante non modifica il modello: costruisce un input che lo spinge a produrre un output che viola il comportamento sicuro che l'addestramento aveva costruito. Questo rende la minaccia concreta per chiunque usi un modello tramite un'interfaccia o un'API, anche senza accesso ai suoi parametri.
