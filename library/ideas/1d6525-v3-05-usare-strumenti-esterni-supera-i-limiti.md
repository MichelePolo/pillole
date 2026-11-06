---
id: 1d6525-v3-05-usare-strumenti-esterni-supera-i-limiti
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: 1d65254430ae
  lang: en
  title: Prompt Engineering
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/
anchor: Both PAL (Program-aided language models); Gao et al. 2022) and PoT
anchor_check: exact
quiz:
  q: Perché un modello linguistico può beneficiare di strumenti esterni?
  a: Perché può delegare calcoli, ricerche o altre operazioni a sistemi affidabili, compensando i propri limiti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.822Z
---

# Usare strumenti esterni supera i limiti del modello

Molti approcci permettono al modello di chiamare strumenti esterni, come calcolatrici, motori di ricerca o interpreti di codice, per compensare ciò che non sa fare bene da solo: calcoli precisi, informazioni recenti, conoscenze private. Il modello delega l'esecuzione a un sistema affidabile e integra il risultato nel contesto. Questo separa il ragionamento dal calcolo vero e proprio, purché il modello sappia scrivere codice o richieste sufficientemente buone.
