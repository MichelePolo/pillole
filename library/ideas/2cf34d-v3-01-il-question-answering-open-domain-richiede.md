---
id: 2cf34d-v3-01-il-question-answering-open-domain-richiede
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 2cf34df8cd69
  lang: en
  title: How to Build an Open-Domain Question Answering System?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-10-29-odqa/
anchor: The “open-domain” part refers to the lack of the relevant context for any arbitrarily asked factual question.
anchor_check: exact
quiz:
  q: Che cosa distingue il question answering open-domain dalla comprensione di un testo (reading comprehension)?
  a: Nell'open-domain al modello non viene fornito il contesto che contiene la risposta, mentre nella reading comprehension il contesto è dato insieme alla domanda.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.901Z
---

# Il question answering open-domain richiede di trovare la risposta senza contesto

Nel question answering open-domain il modello riceve solo la domanda, senza un testo che contenga la risposta. Il compito è quindi diverso dalla comprensione del testo, dove il contesto è fornito. La risposta è oggettiva, e questo rende la valutazione delle prestazioni semplice. La distinzione tra modelli con accesso a una fonte esterna (open-book) e senza (closed-book) è il punto di partenza per capire gli approcci successivi.
