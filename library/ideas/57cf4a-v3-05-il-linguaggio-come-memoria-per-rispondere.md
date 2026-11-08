---
id: 57cf4a-v3-05-il-linguaggio-come-memoria-per-rispondere
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 57cf4a2ec0df
  lang: en
  title: Generalized Visual Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-06-09-vlm/
anchor: GPT3 is considered as an unstructured, implicit knowledge base.
anchor_check: exact
quiz:
  q: Che funzione ha il modello linguistico nel metodo PICa?
  a: Funziona come una base di conoscenza implicita e non strutturata che risponde alle domande a partire dalle descrizioni testuali delle immagini.
warnings:
  - corpo di 58 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-08T09:06:54.727Z
---

# Il linguaggio come memoria per rispondere a domande visive

Per le domande che richiedono conoscenze esterne, il sistema PICa converte prima le immagini in didascalie o etichette testuali, poi usa esempi few-shot per chiedere a GPT-3 la risposta. Il modello linguistico funge così da base di conoscenza implicita e non strutturata. Un'idea utile è che la descrizione testuale dell'immagine diventa il ponte tra percezione e sapere generale.
