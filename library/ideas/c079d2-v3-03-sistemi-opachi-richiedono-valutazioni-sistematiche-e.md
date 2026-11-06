---
id: c079d2-v3-03-sistemi-opachi-richiedono-valutazioni-sistematiche-e
lang: it
kind: metodo
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
anchor: evals and structured experiments are even more important than they are for regular LLM projects
anchor_check: exact
quiz:
  q: Perché la valutazione sistematica conta più per un modello opaco che per un LLM tradizionale?
  a: Perché, non potendo leggere le motivazioni del modello, bisogna verificarne il comportamento con prove controllate e ripetute.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.951Z
---

# Sistemi opachi richiedono valutazioni sistematiche e continue

Quando il risultato di un modello è opaco, non possiamo fidarci del suo giudizio semplicemente leggendolo. Bisogna verificarlo con valutazioni sistematiche, cioè insiemi di casi controllati ed esperimenti strutturati, confrontando le risposte con ciò che ci si aspetta. Secondo l'autore, questo lavoro diventa ancora più importante rispetto ai normali progetti con LLM. Il costo basso di questi modelli rende però economico eseguire migliaia di prove, quindi la verifica sistematica non è più un lusso. ==Più un sistema è opaco, più la valutazione sistematica diventa indispensabile.==
