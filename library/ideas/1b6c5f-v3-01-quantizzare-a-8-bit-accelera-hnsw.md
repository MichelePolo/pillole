---
id: 1b6c5f-v3-01-quantizzare-a-8-bit-accelera-hnsw
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: 1b6c5fd23745
  lang: en
  title: Scaling HNSWs
  site: antirez.com
  url: http://antirez.com/news/156
anchor: 8 bit quantization what you get is an almost 4x speedup
anchor_check: exact
quiz:
  q: Perché la quantizzazione per vettore basata sul massimo valore assoluto rende veloce il calcolo della similarità coseno?
  a: Perché il prodotto scalare si può calcolare con moltiplicazioni intere e poi riportare al valore reale con un unico fattore di scala.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.325Z
---

# Quantizzare a 8 bit accelera HNSW senza perdere precisione

Per gli HNSW, la quantizzazione dei vettori a 8 bit è il miglioramento più concreto: il vettore occupa circa un quarto dello spazio e la ricerca diventa circa quattro volte più veloce. Il richiamo dei risultati resta quasi identico nei casi reali. Il trucco è quantizzare ogni vettore usando il suo massimo valore assoluto come scala, così il prodotto scalare si calcola con operazioni intere semplici e poi si riporta al valore in virgola mobile. ==La quantizzazione è il primo posto dove cercare risparmi di memoria e tempo.==
