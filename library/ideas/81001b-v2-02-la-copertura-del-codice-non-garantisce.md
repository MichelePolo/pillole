---
id: 81001b-v2-02-la-copertura-del-codice-non-garantisce
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 81001b41cce4
  lang: en
  title: A new era for software testing
  site: antirez.com
  url: http://antirez.com/news/168
anchor: covering all the lines of the code does not mean covering all the possible states
anchor_check: exact
quiz:
  q: Perché avere tutte le righe di codice coperte da test non basta a garantire la qualità?
  a: Perché le righe coperte non equivalgono a tutti gli stati possibili del programma, e alcune combinazioni di stati restano non verificate.
warnings:
  - titolo di 10 parole (max 8)
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T08:21:35.337Z
---

# La copertura del codice non garantisce la copertura degli stati

Un insieme di test può coprire tutte le righe di codice senza esplorare tutte le possibili combinazioni di stati in cui il programma può trovarsi. ==Questo limite spiega perché i test tradizionali lasciano spazio a errori anche quando sembrano completi.== I problemi di tempistica, la configurazione dell'ambiente e gli esiti che si possono giudicare solo a vista restano difficili da automatizzare. Per questo servono controlli che vadano oltre la semplice esecuzione delle righe di codice.
