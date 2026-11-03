---
id: b872d6-v2-02-un-design-md-rende-il-software
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: b872d6d47939
  lang: en
  title: Control the ideas, not the code
  site: antirez.com
  url: http://antirez.com/news/169
anchor: use LLMs to write a DESIGN.md file where each data structure is described in human language
anchor_check: exact
quiz:
  q: Che cosa dovrebbe contenere, secondo l'autore, un file DESIGN.md per ogni struttura dati?
  a: Una descrizione in linguaggio umano delle idee che la struttura contiene, dei trucchi implementativi e del suo progetto.
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T07:12:42.116Z
---

# Un DESIGN.md rende il software posseduto dalle idee

L'autore propone di usare gli LLM per scrivere un file DESIGN.md in cui ogni struttura dati è descritta in linguaggio naturale, con le idee che contiene, i trucchi implementativi e il progetto. Chi vuole modificare quella parte del software può leggere il documento, farsi un modello mentale corretto e chiedere poi all'agente cosa fare. Secondo l'autore questo è molto più utile in futuro che rivedere il codice, soprattutto per i progetti che non richiedono più una lettura diretta del sorgente. ==Il documento di progetto sostituisce la lettura del codice==.
