---
id: 206334-v3-01-lo-stile-di-scrittura-si-legge
lang: it
kind: metodo
topics:
  - letteratura
  - ai
subtopics:
  - saggistica
  - altro
source:
  id: 2063347b816b
  lang: en
  title: Reproducing Hacker News writing style fingerprinting
  site: antirez.com
  url: http://antirez.com/news/150
anchor: it wants to capture words that each specific user over-uses or under-uses compared to the expected
anchor_check: exact
quiz:
  q: Perché il metodo Burrows-Delta usa scarti rispetto alla media invece delle frequenze grezze?
  a: Perché le frequenze grezze riflettono soprattutto il linguaggio medio, mentre gli scarti mettono in evidenza le parole che un autore usa più o meno del normale.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.051Z
---

# Lo stile di scrittura si legge nelle parole sovra- e sottoutilizzate

Il metodo Burrows-Delta non confronta i contenuti di cosa si dice, ma il modo in cui una persona usa le parole rispetto alla media linguistica. Per ogni parola frequente si calcola quanto un autore la usa più o meno del normale, si standardizza rispetto alla variabilità della parola nel corpus e si ottiene un vettore di scarti. ==Due autori con scarti simili hanno uno stile simile, anche se parlano di argomenti diversi.== Il punto chiave è che lo stile emerge dalle parole non legate al tema.
