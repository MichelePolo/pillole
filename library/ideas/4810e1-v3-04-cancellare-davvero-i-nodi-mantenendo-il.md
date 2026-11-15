---
id: 4810e1-v3-04-cancellare-davvero-i-nodi-mantenendo-il
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - architettura-software
  - modelli-linguistici
source:
  id: 4810e1d5f1e4
  lang: en
  title: Vector Sets are part of Redis
  site: antirez.com
  url: http://antirez.com/news/149
anchor: I don't use tombstone deletions, but effectively unlink the node in the moment it gets deleted
anchor_check: exact
quiz:
  q: Perché l'autore non usa le cancellazioni a lapide (tombstone) nel grafo HNSW?
  a: Perché preferisce scollegare il nodo al momento della cancellazione e ricollegare i vicini, così la memoria viene liberata subito e la connettività resta buona.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.319Z
---

# Cancellare davvero i nodi mantenendo il grafo connesso

Molte implementazioni di HNSW marcano i nodi cancellati senza rimuoverli davvero. L'autore sceglie un'altra strada: scollega il nodo nel momento in cui viene eliminato e ricollega i vicini più adatti tra loro, così la memoria si libera subito e la connettività del grafo resta buona. Per riuscirci impone che i collegamenti siano reciproci, non più una proprietà approssimativa. ==Eliminare davvero un elemento richiede di riparare il grafo, non solo di segnarlo.==
