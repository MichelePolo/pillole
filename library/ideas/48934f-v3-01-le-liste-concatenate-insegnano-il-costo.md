---
id: 48934f-v3-01-le-liste-concatenate-insegnano-il-costo
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
anchor: how order is fundamentally costly, because if you want to insert an element “in place” you have to go from one node to the other
anchor_check: exact
quiz:
  q: Perché inserire un elemento in una posizione precisa di una lista concatenata è costoso?
  a: Perché bisogna attraversare i nodi uno dopo l'altro partendo dalla testa finché non si raggiunge la posizione desiderata.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.275Z
---

# Le liste concatenate insegnano il costo di O(1) e O(N)

Quando si vede per la prima volta una lista concatenata, si capisce in modo concreto che cosa siano i tempi costanti e lineari. ==Aggiungere in testa costa sempre lo stesso, mentre inserire in mezzo richiede di scorrere i nodi uno dopo l'altro.== Questa esperienza spinge a cercare modi per accelerare il processo e prepara a concetti più avanzati. Secondo l'autore, pochi altri strumenti didattici mostrano in modo così diretto come lo spazio e il tempo pesino nel calcolo.
