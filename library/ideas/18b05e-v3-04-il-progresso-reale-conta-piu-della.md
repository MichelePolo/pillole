---
id: 18b05e-v3-04-il-progresso-reale-conta-piu-della
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
source:
  id: 18b05e29ab9d
  lang: en
  title: Curriculum for Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-01-29-curriculum-rl/
anchor: absolute learning progress (short for ALP) is measured as
anchor_check: exact
quiz:
  q: Su quale misura si basano i metodi che scelgono i compiti in base al progresso di apprendimento?
  a: Sulla variazione della ricompensa, cioè sulla differenza tra i risultati ottenuti con compiti diversi o in momenti diversi, non sul livello assoluto di prestazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-23T10:53:54.471Z
---

# Il progresso reale conta più della performance assoluta

Nei metodi di curriculum automatico, ciò che guida la scelta dei compiti non è quanto bene il modello fa oggi, ma quanto sta migliorando. Portelas e colleghi misurano il progresso di apprendimento come la differenza tra la ricompensa ottenuta con un nuovo compito e quella ottenuta con il compito più vicino già provato. Così si privilegiano le regioni dello spazio dei compiti in cui il modello sta imparando di più, invece di quelle già dominate o troppo difficili. Il principio generale è che i compiti vanno scelti in base a quanto velocemente il modello vi migliora, non al suo livello attuale.
