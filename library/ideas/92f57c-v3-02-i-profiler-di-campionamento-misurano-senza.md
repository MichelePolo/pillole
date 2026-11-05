---
id: 92f57c-v3-02-i-profiler-di-campionamento-misurano-senza
lang: it
kind: metodo
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
anchor: They’re very low overhead and can provide a deep insight into running systems, without needing to instrument those systems first.
anchor_check: exact
quiz:
  q: Qual è il vantaggio principale di un profiler di campionamento rispetto a uno basato su tracciamento?
  a: Ha un overhead molto basso e permette di analizzare sistemi in esecuzione senza modificarli prima.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.392Z
---

# I profiler di campionamento misurano senza strumentare il codice

Un profiler di campionamento interrompe periodicamente il programma in esecuzione e registra lo stack delle chiamate attive. Confrontando questi campioni si stima quali funzioni consumano più tempo. Secondo l'autore, il metodo ha un overhead molto basso e permette di osservare un sistema già in funzione senza doverlo modificare o instrumentare in anticipo. Questa tecnica esisteva già in strumenti esterni, ma ora fa parte della libreria standard di Python.
