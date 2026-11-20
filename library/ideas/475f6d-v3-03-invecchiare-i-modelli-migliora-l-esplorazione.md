---
id: 475f6d-v3-03-invecchiare-i-modelli-migliora-l-esplorazione
lang: it
kind: metodo
topics:
  - ai
  - biologia
subtopics:
  - agenti
  - evoluzione
source:
  id: 475f6d363978
  lang: en
  title: Neural Architecture Search
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-08-06-nas/
anchor: always discard the oldest models within each cycle
anchor_check: exact
quiz:
  q: Perché l'evoluzione regolarizzata elimina il modello più vecchio anche se è buono?
  a: Per evitare di restringere la ricerca troppo presto su soluzioni già buone e favorire l'esplorazione dello spazio.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.094Z
---

# Invecchiare i modelli migliora l'esplorazione evolutiva

Nell'evoluzione regolarizzata usata da AmoebaNet, a ogni ciclo si sceglie il migliore tra alcuni candidati casuali, se ne produce una mutazione e la si aggiunge alla popolazione. Il modello più vecchio viene però rimosso, anche se è buono. Questo favorisce i genotipi recenti e impedisce di restringersi troppo presto su soluzioni già buone. L'idea generale è che mantenere la diversità durante la ricerca aiuti a esplorare meglio lo spazio. ==Eliminare il più vecchio impedisce di chiudersi troppo presto su soluzioni già buone.==
