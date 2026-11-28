---
id: 7ee1bc-v3-03-il-campionamento-a-un-minuto-nasconde
lang: it
kind: storia
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 7ee1bc77600b
  lang: en
  title: Some latency measurement pitfalls
  site: danluu.com
  url: https://danluu.com/latency-pitfalls/
anchor: We've all seen incidents where some bursty, sub-minutely event, is the cause of a problem.
anchor_check: exact
quiz:
  q: Che cosa può fare una metrica raccolta ogni minuto quando la causa di un incidente dura pochi secondi?
  a: Può non mostrare la causa, perché l'evento breve viene mediato o perso nell'aggregazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.262Z
---

# Il campionamento a un minuto nasconde gli eventi brevi

Le metriche raccolte con risoluzione di un minuto possono non mostrare la causa di un problema quando questa dura solo pochi secondi. Nel caso descritto, una cache mostrava un forte aumento di latenza all'istante zero, seguito da trenta secondi di traffico quasi nullo. Il motivo era un meccanismo distribuito che marcava i server come morti dopo troppi errori. Vedere i dati a risoluzione più fine ha reso subito chiaro il meccanismo che causava errori e latenza. ==Eventi brevi possono essere la causa di incidenti che la vista a minuti non rivela.==
