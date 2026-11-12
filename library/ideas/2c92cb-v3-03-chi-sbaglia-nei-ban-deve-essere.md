---
id: 2c92cb-v3-03-chi-sbaglia-nei-ban-deve-essere
lang: it
kind: concetto
topics:
  - tecnologia
  - psicologia
subtopics:
  - privacy-sicurezza
  - bias-cognitivi
source:
  id: 2c92cb983373
  lang: en
  title: Diseconomies of scale in fraud, spam, support, and moderation
  site: danluu.com
  url: https://danluu.com/diseconomies-scale/
anchor: without any sort of tracking of false positives, there was effectively no mechanism to decrease the false positive rate
anchor_check: exact
quiz:
  q: Perché un sistema che misura solo i falsi negativi tende a produrre troppi falsi positivi?
  a: Perché senza tracciare i falsi positivi non c'è nessun meccanismo per ridurli, mentre le truffe non prese vengono corrette con nuove regole.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-11T10:12:51.285Z
---

# I ban sbagliati vanno contati

Un sistema antifrode che banna per errore una persona legittima non è un dettaglio trascurabile. L'autore racconta che alcune aziende non tracciavano affatto i falsi positivi, ossia i casi in cui il ban era sbagliato. Se si misurano solo i falsi negativi, cioè le truffe non prese, il sistema tende ad allargarsi senza freno. Il ragionamento secondo cui quasi tutti i ban sono giusti va verificato, perché 'quasi tutti' non significa 'tutti'. Un tasso di errore accettabile esiste, ma va scelto e monitorato esplicitamente.
