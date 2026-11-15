---
id: 4810e1-v3-01-un-tipo-di-dato-puo-essere
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 4810e1d5f1e4
  lang: en
  title: Vector Sets are part of Redis
  site: antirez.com
  url: http://antirez.com/news/149
anchor: Many databases propose vector similarity as a kind of index, but that's Redis, and things in Redis are data structures
anchor_check: exact
quiz:
  q: Perché l'autore considera i vector set una struttura dati e non un indice?
  a: "Perché in Redis le cose sono strutture dati: si creano per chiave, si modificano con comandi e si interrogano come gli altri tipi di dato."
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.317Z
---

# Un tipo di dato può essere una struttura, non un indice

Molti database offrono la similarità tra vettori come un indice a parte. Nel caso di Redis, l'autore sostiene che le cose sono strutture dati, e i vector set seguono questa logica: si creano come qualsiasi altra chiave, si aggiungono elementi e si interrogano con comandi propri. ==Il valore sta nel modello dei dati e nell'API, più che nel meccanismo interno.== Questo permette di usare più insiemi piccoli, uno per chiave, invece di un unico grande indice.
