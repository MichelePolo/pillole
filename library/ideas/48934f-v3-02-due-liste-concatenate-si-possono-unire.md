---
id: 48934f-v3-02-due-liste-concatenate-si-possono-unire
lang: it
kind: metodo
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
anchor: you can split a linked list into two in O(1), and you can glue two linked lists in O(1) as well
anchor_check: exact
quiz:
  q: Perché in Redis il buffer di output del client poteva essere unito a quello reale senza problemi?
  a: Perché il buffer era una lista concatenata, che si può unire a un'altra lista in tempo costante.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.276Z
---

# Due liste concatenate si possono unire o spezzare in tempo costante

Una proprietà delle liste concatenate è la composizione: si può dividere una lista in due e si possono unire due liste, in entrambi i casi in tempo costante. Secondo l'autore, questa caratteristica apre usi interessanti. Nel caso di Redis, un thread che lavora su una richiesta lenta usa un client fittizio, così non servono lock; al termine, il buffer di output viene agganciato a quello del client reale. Ciò è possibile proprio perché il buffer è una lista concatenata.
