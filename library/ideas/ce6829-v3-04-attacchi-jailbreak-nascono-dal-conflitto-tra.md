---
id: ce6829-v3-04-attacchi-jailbreak-nascono-dal-conflitto-tra
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
anchor: "Competing objective: This refers to a scenario when a model’s capabilities"
anchor_check: exact
quiz:
  q: Quali sono le due modalità di fallimento della sicurezza individuate per progettare i jailbreak?
  a: Il conflitto tra obiettivi di capacità e sicurezza, e la mancata generalizzazione della sicurezza a domini di capacità diversi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.878Z
---

# Attacchi jailbreak nascono dal conflitto tra obiettivi

Secondo Wei et al., un modo utile per progettare jailbreak è individuare due modalità di fallimento della sicurezza. La prima è il conflitto tra obiettivi: la capacità di seguire istruzioni può entrare in collisione con l'obiettivo di sicurezza, e gli attacchi sfruttano questa tensione chiedendo, per esempio, di iniziare con una conferma affermativa. La seconda è la mancata generalizzazione: la sicurezza addestrata su alcuni domini non copre domini in cui il modello ha capacità, come codifiche o lingue diverse.
