---
id: 1b6c5f-v3-03-serializzare-la-struttura-del-grafo-accelera
lang: it
kind: dato
topics:
  - tecnologia
subtopics:
  - architettura-software
  - infrastrutture
source:
  id: 1b6c5fd23745
  lang: en
  title: Scaling HNSWs
  site: antirez.com
  url: http://antirez.com/news/156
anchor: you need to serialize the nodes and the neighbors as they are
anchor_check: exact
quiz:
  q: Perché salvare i nodi con i vicini è più rapido che ricaricare i vettori e ricostruire il grafo?
  a: Perché si evita di ripetere la ricerca dei vicini necessaria per ogni inserimento, ricostruendo solo i collegamenti salvati.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.326Z
---

# Serializzare la struttura del grafo accelera il caricamento di ordini di grandezza

Ricostruire un indice vettoriale inserendo di nuovo ogni elemento dal disco è molto lento, perché l'inserimento richiede di cercare i vicini. Salvare direttamente i nodi con i loro vicini permette di ricostruire la struttura in memoria semplicemente allocando oggetti e trasformando gli identificativi in puntatori. Nel caso descritto questo ha prodotto un miglioramento di circa 100 volte. Lo stesso principio vale in generale: conviene serializzare lo stato già costruito invece di rifare il lavoro costoso.
