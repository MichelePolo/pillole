---
id: a6ca24-v3-03-restare-nel-ciclo-evitare-agenti-opachi
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
source:
  id: a6ca24d98e40
  lang: en
  title: Coding with LLMs in the summer of 2025 (an update)
  site: antirez.com
  url: http://antirez.com/news/154
anchor: Avoid any RAG that will show only part of the code / context to the LLM.
anchor_check: exact
quiz:
  q: Perché l'autore sconsiglia il recupero automatico di porzioni di contesto?
  a: Perché mostra al modello solo una parte del codice, e questo ne degrada le prestazioni; l'utente deve controllare cosa il modello vede.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-08T09:06:54.790Z
---

# Restare nel ciclo, evitare agenti opachi

Secondo l'autore, conviene non affidare il lavoro ad agenti o a editor con agenti integrati. È meglio mostrare il codice direttamente al modello più capace e spostare a mano il codice dal terminale all'interfaccia web, così si segue ogni passaggio. Anche il recupero automatico di porzioni di contesto va evitato, perché mostra al modello solo una parte del codice e ne peggiora le prestazioni. ==Tenere il controllo su cosa il modello vede== significa restare il vero autore del codice, potenziato dall'IA.
