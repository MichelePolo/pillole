---
id: 1b6c5f-v3-02-rendere-gli-archi-bidirezionali-permette-di
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - architettura-software
  - agenti
source:
  id: 1b6c5fd23745
  lang: en
  title: Scaling HNSWs
  site: antirez.com
  url: http://antirez.com/news/156
anchor: so, my implementation in Redis does things differently by forcing links to be bidirectional
anchor_check: near
quiz:
  q: Perché in una struttura a grafo la cancellazione reale di un nodo richiede archi bidirezionali?
  a: Perché, con archi reciproci, si conoscono tutti i collegamenti in entrata e quindi si possono rimuovere tutti i puntatori verso il nodo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.326Z
---

# Rendere gli archi bidirezionali permette di cancellare davvero i nodi

Nella maggior parte delle implementazioni di HNSW, quando un nodo viene cancellato la memoria non si libera davvero, perché i collegamenti in entrata non si possono risolvere. Imporre che ogni collegamento sia reciproco, cioè che se A punta a B anche B punti ad A, rende possibile rimuovere tutti i puntatori verso il nodo eliminato. I vicini rimasti senza un collegamento vengono ricollegati tra loro scegliendo le coppie più simili. Secondo l'autore questo mantiene un buon richiamo anche dopo aver eliminato il 95% degli elementi. ==Archi reciproci rendono la cancellazione reale e non solo logica.==
