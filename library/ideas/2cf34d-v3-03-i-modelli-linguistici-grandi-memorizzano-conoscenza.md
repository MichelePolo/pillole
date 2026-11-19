---
id: 2cf34d-v3-03-i-modelli-linguistici-grandi-memorizzano-conoscenza
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 2cf34df8cd69
  lang: en
  title: How to Build an Open-Domain Question Answering System?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-10-29-odqa/
anchor: Given enough parameters, these models are able to memorize some factual knowledge within parameter weights.
anchor_check: exact
quiz:
  q: Quali limiti dei modelli che memorizzano fatti nei parametri sono indicati nel testo?
  a: Non possono modificare o espandere facilmente la memoria, non spiegano bene le previsioni e possono produrre affermazioni inesistenti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.902Z
---

# I modelli linguistici grandi memorizzano conoscenza nei propri parametri

Un modello linguistico pre-addestrato su grandi quantità di testo può memorizzare fatti nei pesi della rete, e quindi rispondere a domande senza accedere a fonti esterne. Questo approccio closed-book è semplice, ma l'autore osserva che questi modelli non possono modificare facilmente la propria memoria, non spiegano bene le proprie previsioni e possono produrre affermazioni inesistenti. Per questi motivi si affiancano spesso recupero di documenti e generazione.
