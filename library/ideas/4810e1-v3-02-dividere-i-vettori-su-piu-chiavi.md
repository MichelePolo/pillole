---
id: 4810e1-v3-02-dividere-i-vettori-su-piu-chiavi
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 4810e1d5f1e4
  lang: en
  title: Vector Sets are part of Redis
  site: antirez.com
  url: http://antirez.com/news/149
anchor: if you split your vectors into N different keys (hashing the item you are inserting or alike to select which key to pick)
anchor_check: exact
quiz:
  q: Come si possono unire i risultati di ricerche fatte su chiavi diverse?
  a: Si raccolgono i risultati di tutte le chiavi o istanze e li si ordina per punteggio di similarità.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.318Z
---

# Dividere i vettori su più chiavi scala le scritture

Se i vettori vengono distribuiti su N chiavi diverse, scegliendo la chiave con una funzione di hash sull'elemento inserito, ogni sottoinsieme riceve le proprie scritture. Così le inserzioni possono avvenire in parallelo e le scritture crescono in modo quasi lineare. Anche le interrogazioni su chiavi diverse, o su istanze diverse, si possono unire: basta ordinare i risultati per punteggio, dove 1 indica vettori identici e 0 vettori opposti. ==La scalabilità nasce dalla composizione di insiemi indipendenti.==
