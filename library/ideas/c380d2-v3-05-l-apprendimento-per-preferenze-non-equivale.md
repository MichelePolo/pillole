---
id: c380d2-v3-05-l-apprendimento-per-preferenze-non-equivale
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - sicurezza-allineamento
  - modelli-linguistici
source:
  id: c380d26cbf1a
  lang: en
  title: "What's Missing From LLM Chatbots: A Sense of Purpose"
  author: Kenneth Li
  site: The Gradient
  url: https://thegradient.pub/dialog/
anchor: the key distinction is between viewing language generation as selecting goal-directed actions in a sequential process
anchor_check: exact
quiz:
  q: Qual è la differenza tra seguire preferenze e perseguire un obiettivo?
  a: Seguire preferenze significa produrre output graditi, mentre perseguire un obiettivo richiede azioni orientate nel tempo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.576Z
---

# L'apprendimento per preferenze non equivale a intenzioni

Secondo l'autore, addestrare un modello a soddisfare preferenze umane è diverso dal dotarlo di intenzioni. Citando Sergey Levine, la distinzione sta nel considerare la generazione del linguaggio come una sequenza di azioni orientate a un obiettivo, anziché come la produzione di output graditi. La pianificazione su più turni manca nell'RLHF originale, che tratta la ricompensa come un problema a un solo passo. Questo limite spiega perché un modello possa sembrare cordiale senza perseguire davvero un fine.
