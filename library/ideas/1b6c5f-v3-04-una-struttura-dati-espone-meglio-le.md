---
id: 1b6c5f-v3-04-una-struttura-dati-espone-meglio-le
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 1b6c5fd23745
  lang: en
  title: Scaling HNSWs
  site: antirez.com
  url: http://antirez.com/news/156
anchor: many programmers are smart, and if instead of creating a magic system they have no access to, you show them the data structure
anchor_check: exact
quiz:
  q: Perché esporre gli HNSW come struttura dati offre più flessibilità di un indice?
  a: Perché permette di partizionare, combinare e scalare i dati in modi che un indice nascosto non consente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.327Z
---

# Una struttura dati espone meglio le possibilità di un indice

Esporre gli HNSW come tipo di dato, invece che come indice nascosto su altri dati, rende il sistema componibile. Si possono usare chiavi diverse per partizionare i dati, interrogarle in parallelo e unire i risultati lato client, oppure creare una piccola struttura per ogni elemento con scadenza. Secondo l'autore, mostrare agli sviluppatori la struttura e i suoi compromessi permette loro di modellare casi d'uso che un sistema chiuso non renderebbe possibili. ==Dare agli sviluppatori la struttura dati, non una magia chiusa, moltiplica le possibilità d'uso.==
