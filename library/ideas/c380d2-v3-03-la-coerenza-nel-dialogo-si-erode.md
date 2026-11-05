---
id: c380d2-v3-03-la-coerenza-nel-dialogo-si-erode
lang: it
kind: dato
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
anchor: the lack of instruction stability also comes with safety concerns
anchor_check: exact
quiz:
  q: Perché la perdita di stabilità delle istruzioni è anche un problema di sicurezza?
  a: Perché un chatbot che si allontana dalle istruzioni di sicurezza diventa più esposto a jailbreak e allucinazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.576Z
---

# La coerenza nel dialogo si erode con i turni

Le istruzioni di sistema guidano il comportamento dei modelli linguistici, ma nelle conversazioni lunghe il modello tende a perderle. Secondo l'autore, con più turni il chatbot si allontana dal ruolo assegnato, diventando più vulnerabile a jailbreak e allucinazioni. Per misurare questo fenomeno sono stati fatti dialogare due agenti per molti turni, osservando la stabilità delle istruzioni nel tempo. Il risultato indica che la fedeltà al compito non si mantiene semplicemente aumentando la lunghezza del contesto.
