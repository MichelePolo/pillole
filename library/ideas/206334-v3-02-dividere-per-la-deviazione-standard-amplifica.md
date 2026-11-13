---
id: 206334-v3-02-dividere-per-la-deviazione-standard-amplifica
lang: it
kind: metodo
topics:
  - matematica
  - psicologia
subtopics:
  - probabilita-statistica
  - psicologia-sociale
source:
  id: 2063347b816b
  lang: en
  title: Reproducing Hacker News writing style fingerprinting
  site: antirez.com
  url: http://antirez.com/news/150
anchor: words that have a much higher variance among usage of different writers are less important
anchor_check: exact
quiz:
  q: Che cosa misura il punteggio z in questo contesto?
  a: Quanto la frequenza di una parola per un autore si discosta dalla media globale, in unità di deviazione standard.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.052Z
---

# Dividere per la deviazione standard amplifica i segnali rilevanti

Una parola che varia molto da un autore all'altro dice poco sullo stile di una persona specifica, quindi il suo scarto va ridimensionato. Dividendo lo scarto dalla media per la deviazione standard globale della parola, si ottiene il punteggio z. Questo punteggio misura quanto una parola sia anomala per un autore in un senso o nell'altro, e rende confrontabili parole molto frequenti con parole rare.
