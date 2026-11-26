---
id: d9a569-v3-01-il-throttling-cfs-danneggia-la-latenza
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: d9a569d5fe21
  lang: en
  title: The container throttling problem
  site: danluu.com
  url: https://danluu.com/cgroup-throttling/
anchor: which is disastrous for tail latency
anchor_check: exact
quiz:
  q: Perché il throttling della quota CFS peggiora la latenza delle richieste più lente?
  a: Perché il processo viene messo in pausa quando supera la quota nel periodo, e le richieste in corso restano ferme durante la pausa.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.254Z
---

# Il throttling CFS danneggia la latenza delle code

Con il meccanismo di quota CFS, un container può usare più core del proprio limite per brevi periodi, e poi viene messo in pausa per riportare il consumo medio sotto la quota. ==Questa pausa forzata è disastrosa per la latenza nelle code==, perché le richieste già in corso restano ferme anche quando il carico è alto ma non eccessivo in media. Il problema nasce quindi non dal consumo medio di CPU, che può restare basso, ma dai picchi di parallelismo che esauriscono la quota nel periodo.
