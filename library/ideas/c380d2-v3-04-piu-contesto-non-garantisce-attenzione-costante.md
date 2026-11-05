---
id: c380d2-v3-04-piu-contesto-non-garantisce-attenzione-costante
lang: it
kind: dato
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: c380d26cbf1a
  lang: en
  title: "What's Missing From LLM Chatbots: A Sense of Purpose"
  author: Kenneth Li
  site: The Gradient
  url: https://thegradient.pub/dialog/
anchor: they become distracted after only 1.6k tokens
anchor_check: exact
quiz:
  q: Perché avere una finestra di contesto grande non basta a mantenere la coerenza nel dialogo?
  a: Perché il modello può distrarsi molto prima di raggiungere il limite teorico della finestra.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.576Z
---

# Più contesto non garantisce attenzione costante

Molti modelli possono gestire finestre di contesto molto lunghe, ma nei dialoghi l'autore osserva un calo dell'attenzione molto prima del limite teorico. Secondo i suoi esperimenti, il modello si distrae dopo circa 1.600 token in una conversazione in cui ogni battuta vale circa 100 token. L'autore sostiene che questo effetto sia strutturale nei Transformer con lo schema di prompting attuale. Capire questo limite è importante per progettare sistemi conversazionali affidabili.
