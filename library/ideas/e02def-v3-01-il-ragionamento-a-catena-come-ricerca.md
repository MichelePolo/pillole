---
id: e02def-v3-01-il-ragionamento-a-catena-come-ricerca
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: e02def1370d5
  lang: en
  title: Reflections on AI at the end of 2025
  site: antirez.com
  url: http://antirez.com/news/157
anchor: After information and concepts relevant to the prompt topic is in the context window
anchor_check: exact
quiz:
  q: Quali sono i due meccanismi con cui, secondo l'autore, il chain of thought migliora le risposte?
  a: La ricerca interna nelle rappresentazioni del modello e, combinata con il reinforcement learning, l'apprendimento a produrre token che convergono verso una risposta utile.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.417Z
---

# Il ragionamento a catena come ricerca interna

Secondo l'autore, il chain of thought migliora le risposte per due ragioni. La prima è che il modello esplora le proprie rappresentazioni interne: una volta che nel contesto compaiono informazioni e concetti rilevanti per il tema del prompt, può rispondere meglio, come una forma di ricerca interna. La seconda emerge quando si combina il ragionamento con il reinforcement learning: il modello impara a produrre un token dopo l'altro, e ogni token modifica il suo stato, fino a convergere verso una risposta utile. ==Il ragionamento scritto è quindi una forma di ricerca che avviene in parole.==
