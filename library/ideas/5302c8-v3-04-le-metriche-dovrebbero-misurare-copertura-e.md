---
id: 5302c8-v3-04-le-metriche-dovrebbero-misurare-copertura-e
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 5302c8c57a20
  lang: en
  title: A Conjecture on a Fundamental Trade-Off between Certainty and Scope in Symbolic and Generative AI
  site: arxiv.org
  url: https://arxiv.org/pdf/2506.10130
anchor: evaluators might measure performance as a pair (coverage, confidence) rather than a single score
anchor_check: exact
quiz:
  q: Perché l'autore propone di valutare i sistemi con una coppia di misure invece di un solo punteggio?
  a: Perché un punteggio unico nasconde il compromesso tra quanto ampio è l'ambito coperto e quanto il sistema è affidabile in quell'ambito.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-04T23:47:47.948Z
---

# Le metriche dovrebbero misurare copertura e confidenza insieme

Un benchmark che dichiara insieme competenza ampia e accuratezza quasi perfetta dovrebbe far sospettare un errore di valutazione, perché o l'ambito del test è più ristretto di quanto sembri, o l'accuratezza non è dimostrata nei casi peggiori. L'autore suggerisce di valutare un sistema con una coppia di misure, per esempio copertura e confidenza, invece che con un unico punteggio. Così si rende visibile il compromesso tra quanto il sistema copre e quanto è affidabile.
