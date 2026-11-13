---
id: 97f620-v3-01-ricerca-iterativa-guidata-da-un-test
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - agenti
source:
  id: 97f6209e404b
  lang: en
  title: AI agents act as search tool for more efficient collider physics calculations
  author: Frederick Wehlen
  site: Physics World
  url: https://physicsworld.com/a/ai-agents-act-as-search-tool-for-more-efficient-collider-physics-calculations/
anchor: a test program evaluates the candidate on correctness and efficiency
anchor_check: exact
quiz:
  q: Che cosa rende possibile la ricerca iterativa di algoritmi con un modello linguistico?
  a: Una verifica automatica e rapida che valuti correttezza ed efficienza di ogni candidato, così da guidare la selezione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.029Z
---

# Ricerca iterativa guidata da un test automatico

Il metodo descritto funziona così: un modello linguistico propone un programma candidato, un programma di prova ne valuta correttezza ed efficienza, e il modello riceve il risultato e propone una nuova versione. Il ciclo si ripete e la ricerca si evolve da sola. ==Il punto decisivo è avere una verifica numerica rapida che giudichi ogni candidato.== Senza un controllo automatico affidabile, il metodo non può selezionare le soluzioni migliori.
