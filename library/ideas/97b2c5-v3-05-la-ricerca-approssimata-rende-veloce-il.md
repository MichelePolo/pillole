---
id: 97b2c5-v3-05-la-ricerca-approssimata-rende-veloce-il
lang: it
kind: concetto
topics:
  - tecnologia
  - matematica
subtopics:
  - infrastrutture
  - probabilita-statistica
source:
  id: 97b2c5f4478d
  lang: en
  title: LLM Powered Autonomous Agents
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-06-23-agent/
anchor: the approximate nearest neighbors (ANN) algorithm to return approximately top k nearest neighbors to trade off a little accuracy lost for a huge speedup
anchor_check: near
quiz:
  q: Perché si preferisce la ricerca dei vicini approssimati a quella esatta nelle memorie vettoriali?
  a: Perché accetta una piccola perdita di precisione in cambio di un recupero molto più veloce.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.719Z
---

# La ricerca approssimata rende veloce il recupero dalla memoria

Per usare una memoria esterna di grandi dimensioni, le informazioni vengono salvate come rappresentazioni vettoriali e recuperate con una ricerca per prodotto interno massimo. Esatta, questa ricerca sarebbe lenta, quindi si usano algoritmi di vicini approssimati che sacrificano un po' di precisione in cambio di una grande velocità. Esistono diverse strategie, come l'hashing sensibile alla località, gli alberi a proiezioni casuali, i grafi a mondo piccolo gerarchici e la quantizzazione vettoriale. Il trade-off tra precisione e velocità è il punto chiave.
