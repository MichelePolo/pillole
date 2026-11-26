---
id: d9a569-v3-02-troppi-thread-concorrenti-esauriscono-la-quota
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
  - infrastrutture
source:
  id: d9a569d5fe21
  lang: en
  title: The container throttling problem
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/cgroup-throttling/
anchor: a heavily threaded application can have more threads executing in parallel than the "number of CPUs" it requested
anchor_check: exact
quiz:
  q: Perché una dimensione eccessiva dei thread pool porta a sovradimensionare la CPU dei servizi?
  a: Perché i thread in eccesso consumano la quota di CPU in poco tempo, causando throttling che costringe a riservare più core per rispettare gli obiettivi di latenza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.255Z
---

# Troppi thread concorrenti esauriscono la quota di CPU

Molti servizi usano thread pool molto più grandi dei core riservati, quindi durante i picchi cercano di eseguire più thread in parallelo del previsto. Questo consuma la quota del periodo in pochi millisecondi e provoca throttling. Il risultato è che i servizi vengono dimensionati con più CPU del necessario per evitare violazioni degli obiettivi di servizio, sprecando risorse. Il dimensionamento dei thread pool andrebbe quindi legato al numero di core effettivamente assegnati.
