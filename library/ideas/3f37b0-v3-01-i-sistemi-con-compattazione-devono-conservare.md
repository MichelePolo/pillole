---
id: 3f37b0-v3-01-i-sistemi-con-compattazione-devono-conservare
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: 3f37b0a02f79
  lang: en
  title: Generating running routes with GPT-6 Astra and ChatGPT Work
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Sep/12/astra-running-routes/
anchor: I think any LLM system that uses compaction needs to both preserve the pre-compacted text and make that text available via agent tool calls
anchor_check: exact
quiz:
  q: Perché la compattazione della cronologia può far perdere informazioni utili a un agente AI?
  a: Perché il testo originale viene sostituito dal riassunto e, se non viene conservato né reso consultabile, i passaggi intermedi diventano irrecuperabili.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.422Z
---

# I sistemi con compattazione devono conservare il testo originale

Quando un sistema di intelligenza artificiale riassume la propria cronologia per liberare spazio nel contesto, il testo originale viene sostituito dal riassunto e rischia di andare perso. Secondo l'autore, un sistema di questo tipo dovrebbe fare due cose: conservare il testo precedente alla compattazione e renderlo accessibile all'agente tramite chiamate di strumenti. In questo modo, se più avanti serve recuperare il codice eseguito o i passaggi intermedi, l'informazione non è scomparsa. ==Senza questa memoria recuperabile== l'utente non può verificare come è stato ottenuto un risultato. Il problema emerge nell'esempio dei percorsi di corsa generati con un assistente, dove il codice era già stato compattato quando è stato richiesto.
