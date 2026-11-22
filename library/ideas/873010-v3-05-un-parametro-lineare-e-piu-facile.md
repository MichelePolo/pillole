---
id: 873010-v3-05-un-parametro-lineare-e-piu-facile
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
source:
  id: 873010a9ddd2
  lang: en
  title: First Token Cutoff LLM sampling
  site: antirez.com
  url: http://antirez.com/news/142
anchor: "\"co\" is a linear parameter, so it's particularly simple to reason about"
anchor_check: exact
quiz:
  q: Perché il parametro co è più facile da interpretare rispetto a temperatura e top-p?
  a: "Perché è lineare e ha un significato diretto: indica quanto un token può essere peggiore del migliore, senza dipendere dalla forma della distribuzione."
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.497Z
---

# Un parametro lineare è più facile da regolare

Secondo l'autore, chi usa un LLM via API deve spesso regolare i parametri di campionamento per tentativi ed errori. Un parametro con una descrizione concreta e un'intuizione immediata aiuta molto. Il parametro co è lineare: un valore di 0,5 significa che un token può essere al massimo il 50 per cento peggiore del migliore. Al contrario, temperatura e p del top-p dipendono fortemente dalla forma della distribuzione dei logit, quindi sono più difficili da ragionare.
