---
id: c079d2-v3-01-i-modelli-decisionali-restituiscono-probabilita-non
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: c079d2e63304
  lang: en
  title: Jev introduces a new shape of LLM—System One, aka Decision Models
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Sep/21/jev/
anchor: It’s great for anything that can be expressed as a classification task
anchor_check: exact
quiz:
  q: Perché un modello che restituisce solo probabilità è adatto alla classificazione e non alla scrittura di testi?
  a: Perché classificare significa scegliere tra categorie o valutare un'affermazione, compiti che si esprimono bene con un numero, mentre la scrittura richiede testo in uscita.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.950Z
---

# I modelli decisionali restituiscono probabilità, non testo

Un modello decisionale non genera testo: riceve un contenuto e restituisce numeri, come la probabilità che un'affermazione sia vera, la scelta tra alcune categorie o un punteggio su una scala. Per questo è adatto a compiti di classificazione, come rilevare lo spam, assegnare etichette, ordinare per priorità o riordinare i risultati di una ricerca. ==Il vantaggio sta nel ricevere un valore preciso e veloce invece di una frase da interpretare.== Il limite è che il modello decide senza poter spiegare le proprie ragioni.
