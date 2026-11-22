---
id: dcd5da-v3-04-il-costo-quadratico-dell-attenzione-si
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: dcd5da018bf2
  lang: en
  title: The Transformer Family
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/
anchor: The compute and memory cost of the vanilla Transformer grows quadratically with sequence length
anchor_check: exact
quiz:
  q: Perché l'attenzione sparsa rende possibili sequenze più lunghe?
  a: Perché limita le connessioni di attenzione a un sottoinsieme di posizioni, riducendo il costo quadratico di calcolo e memoria.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.492Z
---

# Il costo quadratico dell'attenzione si riduce con matrici sparse

Il costo di calcolo e di memoria del Transformer classico cresce quadraticamente con la lunghezza della sequenza, rendendo difficili sequenze molto lunghe. Le varianti sparse limitano a un sottoinsieme di posizioni le connessioni di attenzione, scegliendo schemi che permettono comunque a ogni elemento di raggiungere gli altri attraverso un percorso. Così si addestrano reti dense con centinaia di strati su sequenze molto lunghe, altrimenti infattibili. ==Limitare le connessioni di attenzione rende scalabili sequenze molto lunghe.==
