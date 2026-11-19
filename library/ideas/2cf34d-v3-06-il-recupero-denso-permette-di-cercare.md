---
id: 2cf34d-v3-06-il-recupero-denso-permette-di-cercare
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: 2cf34df8cd69
  lang: en
  title: How to Build an Open-Domain Question Answering System?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-10-29-odqa/
anchor: dense embedding vectors of text produced by neural networks
anchor_check: exact
quiz:
  q: Come si calcola il punteggio di rilevanza nel recupero denso descritto nel testo?
  a: Come prodotto scalare tra la rappresentazione vettoriale della domanda e quella del passaggio.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.904Z
---

# Il recupero denso permette di cercare con prodotti scalari tra vettori

Invece di usare solo termini esatti come TF-IDF, molti sistemi rappresentano domande e documenti come vettori densi prodotti da reti neurali, e misurano la rilevanza con il prodotto scalare. Questo permette di confrontare il significato e non solo le parole. Per trovare i vettori più vicini in grandi collezioni servono tecniche di ricerca veloce del massimo prodotto interno. Il metodo lessicale resta però competitivo e in alcuni casi può essere sufficiente.
