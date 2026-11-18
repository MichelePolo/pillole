---
id: 91c8f7-v3-04-il-fine-tuning-con-feedback-umano
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - sicurezza-allineamento
  - modelli-linguistici
source:
  id: 91c8f7fce27f
  lang: en
  title: Controllable Neural Text Generation
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/
anchor: Reward learning from human feedback (Christiano et al., 2017) is a better way to align what we measure with what we actually care about.
anchor_check: exact
quiz:
  q: Perché si preferisce un modello di ricompensa appreso dal feedback umano alle metriche come BLEU?
  a: Perché le metriche di sovrapposizione di parole non sempre corrispondono alla qualità giudicata dalle persone, mentre il feedback umano allinea meglio ciò che si misura a ciò che conta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.871Z
---

# Il fine-tuning con feedback umano allinea il modello alle preferenze

Invece di misurare la qualità con metriche come BLEU o ROUGE, che contano le parole in comune, si può addestrare un modello di ricompensa a partire dai giudizi umani. Questo modello guida poi l'ottimizzazione con apprendimento per rinforzo, e spesso si aggiunge una penalità che impedisce al modello di allontanarsi troppo dal comportamento originale. Il principio è misurare ciò che conta davvero per le persone.
