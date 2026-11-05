---
id: 92f57c-v3-01-gli-import-pigri-ritardano-il-costo
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
anchor: The module will then be imported the first time those symbols are used in the code that follows.
anchor_check: exact
quiz:
  q: Perché un import pigro può ridurre il tempo di avvio di un programma?
  a: Perché il modulo viene caricato solo quando un suo simbolo viene usato per la prima volta, e non all'avvio.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.392Z
---

# Gli import pigri ritardano il costo di avvio

Con la sintassi lazy import di PEP 810, un modulo viene caricato solo la prima volta che un suo simbolo viene usato nel codice successivo. Questo ==sposta il costo di caricamento al momento dell'uso effettivo==, invece di pagarlo ogni volta che il programma parte. L'autore lo collega al suo strumento a riga di comando, dove installare plugin con librerie pesanti rallentava ogni invocazione di secondi. Il vantaggio è quindi soprattutto per programmi che dipendono da molte librerie ma ne usano solo alcune in ogni esecuzione.
