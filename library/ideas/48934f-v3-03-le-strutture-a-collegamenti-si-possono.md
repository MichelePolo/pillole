---
id: 48934f-v3-03-le-strutture-a-collegamenti-si-possono
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 48934fdfc38a
  lang: en
  title: In defense of linked lists
  site: antirez.com
  url: http://antirez.com/news/138
anchor: Add a pointer to the previous element, and now it is possible to go both sides.
anchor_check: exact
quiz:
  q: Quale modifica permette di muoversi in entrambe le direzioni in una lista concatenata?
  a: Aggiungere a ogni nodo un puntatore all'elemento precedente, oltre a quello al successivo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.277Z
---

# Le strutture a collegamenti si possono estendere in molti modi

Le liste concatenate sono facili da modificare. Aggiungendo un puntatore al nodo precedente si può andare in entrambe le direzioni; inserendo puntatori a salti si ottiene una skip list con proprietà diverse; mettendo più elementi in ogni nodo si ottiene una unrolled list con un diverso comportamento della cache. Possono anche essere incorporate nelle strutture dati, come fa il kernel Linux con le sue macro. Questa flessibilità rende la struttura un punto di partenza per molte varianti.
