---
id: a9be00-v3-02-solo-numeri-di-riga-troppo-fragili
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: a9be0014ddbc
  lang: en
  title: Alternatives for the EDIT tool of LLM agents
  site: antirez.com
  url: http://antirez.com/news/166
anchor: This means, basically, that just using line numbers is very fragile
anchor_check: exact
quiz:
  q: Perché un numero di riga da solo non basta per modificare in sicurezza un file?
  a: Perché le righe possono spostarsi per modifiche fatte altrove, quindi il numero potrebbe indicare un contenuto diverso da quello atteso.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.468Z
---

# Solo numeri di riga: troppo fragili

Indicare una modifica con il solo numero di riga è fragile, perché le righe si spostano quando qualcuno inserisce o cancella testo sopra di esse. Un approccio più solido associa a ogni riga una piccola etichetta, un checksum di quattro caratteri calcolato sul suo contenuto. Leggendo il file, l'agente riceve coppie fatte di numero di riga ed etichetta, e quando modifica le cita entrambe. Se la riga è cambiata, l'etichetta non corrisponde più e la modifica fallisce senza danni. ==Numero di riga più checksum rende la modifica precisa e compatta.== Secondo l'autore, il costo in token di queste etichette è basso.
