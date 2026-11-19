---
id: 2cf34d-v3-02-il-retriever-reader-separa-la-ricerca
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: 2cf34df8cd69
  lang: en
  title: How to Build an Open-Domain Question Answering System?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-10-29-odqa/
anchor: We can decompose the process of finding answers to given questions into two stages,
anchor_check: exact
quiz:
  q: Quali sono le due fasi del framework retriever-reader?
  a: Trovare il contesto rilevante in una base di conoscenza esterna, e poi elaborare quel contesto per estrarre la risposta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.902Z
---

# Il retriever-reader separa la ricerca dell'evidenza dall'estrazione della risposta

L'approccio retriever-reader risolve il problema in due fasi: prima si cerca nella base di conoscenza il contesto rilevante, poi si elabora quel contesto per estrarre la risposta. È come un esame a libro aperto, in cui lo studente consulta appunti e libri. Le due componenti possono essere addestrate separatamente oppure insieme, da capo a fondo. Questa scomposizione è alla base di molti sistemi successivi.
