---
id: 65396d-v2-02-piu-tentativi-non-superano-il-limite
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - privacy-sicurezza
source:
  id: 65396d7e31ee
  lang: en
  title: AI cybersecurity is not proof of work
  site: antirez.com
  url: https://antirez.com/news/163
anchor: eventually the cap becomes not "M" (because of saturated state of the code AND the LLM sampler meaningful paths)
anchor_check: exact
quiz:
  q: Quale fattore diventa il vero limite quando si campiona molte volte un modello su un codice?
  a: L'intelligenza del modello, perché gli stati del codice e i percorsi utili del campionatore si esauriscono.
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T07:12:03.461Z
---

# Più tentativi non superano il limite del modello

Se si campiona lo stesso modello sullo stesso codice molte volte, il numero di tentativi smette presto di contare. Il codice ha un numero finito di stati e i percorsi significativi del campionatore si esauriscono. Il tetto diventa allora l'intelligenza del modello, non il numero M di prove. Un modello debole può generare token per un tempo infinito senza mai capire che una mancata validazione dell'inizio della finestra, combinata con un overflow di interi, produce il bug. L'autore usa come esempio il bug SACK di OpenBSD.
