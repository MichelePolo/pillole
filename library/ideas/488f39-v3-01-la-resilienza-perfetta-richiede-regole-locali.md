---
id: 488f39-v3-01-la-resilienza-perfetta-richiede-regole-locali
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
  - architettura-software
source:
  id: 488f394ae9e8
  lang: en
  title: Network Researchers Nail Down Theory of ‘Perfect Resilience’
  author: Ben Brubaker
  site: Quanta Magazine
  url: https://www.quantamagazine.org/network-researchers-nail-down-theory-of-perfect-resilience-20261120/
anchor: routers must direct packets using only locally accessible information
anchor_check: exact
quiz:
  q: Perché i router non possono usare una mappa completa della rete per instradare i pacchetti?
  a: Perché calcolare i percorsi minimi su tutta la rete richiede troppo tempo rispetto ai pochi millisecondi disponibili.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.977Z
---

# La resilienza perfetta richiede regole locali, non mappe globali

Le reti di router devono reagire in frazioni di millisecondo, quindi non possono ricalcolare percorsi minimi su tutta la rete. Ogni router deve decidere solo con le informazioni locali, come lo stato dei link verso i vicini. Questo vincolo rende il problema della resilienza molto più difficile, perché senza coordinamento globale i pacchetti possono restare intrappolati in cicli. ==La velocità richiesta trasforma un problema globale in uno locale.== Il vincolo non è un dettaglio tecnico: è ciò che determina quali reti possono essere progettate per sopravvivere a guasti arbitrari.
