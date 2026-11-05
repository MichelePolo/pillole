---
id: 92f57c-v3-03-la-retrocompatibilita-richiede-di-abbandonare-versioni
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 92f57cbc8464
  lang: en
  title: Hello Python 3.15, goodbye 3.10, and now I can use 3.11
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Oct/12/python-3-15/
anchor: My policy for my main open source projects is to keep them working in every supported Python version.
anchor_check: exact
quiz:
  q: Perché ritirare il supporto a una vecchia versione di Python è utile per chi sviluppa software?
  a: Perché permette di usare le funzionalità introdotte nelle versioni più recenti senza dover mantenere la compatibilità con quella vecchia.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.394Z
---

# La retrocompatibilità richiede di abbandonare versioni vecchie

L'autore mantiene i suoi progetti open source compatibili con tutte le versioni di Python ancora supportate. Quando una versione esce dal supporto, può smettere di tenere compatibilità con essa e usare le funzionalità introdotte nelle versioni più recenti. In questo caso, il ritiro di Python 3.10 gli permette di adottare novità della 3.11, come tomllib e TaskGroup. Il principio generale è che ogni vincolo di compatibilità ha una scadenza, e il suo abbandono sblocca strumenti migliori.
