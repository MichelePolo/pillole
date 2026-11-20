---
id: 2cf34d-v3-05-sovrapposizione-tra-domande-di-train-e
lang: it
kind: dato
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
anchor: there is a significant overlap between questions in the train and test sets in several public QA datasets.
anchor_check: exact
quiz:
  q: Che effetto ha la rimozione di domande duplicate o parafrasate dal training set su alcuni modelli?
  a: Molti modelli peggiorano sensibilmente, perché parte delle loro prestazioni dipendeva dalla memorizzazione di domande simili.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.904Z
---

# Sovrapposizione tra domande di train e test gonfia i risultati

Diversi dataset di QA pubblici contengono domande di test molto simili a quelle di addestramento. Secondo lo studio citato, una grande quota delle risposte di test compare anche nei dati di addestramento, e molte domande hanno una parafrasi quasi identica nel train. Quando questi duplicati vengono rimossi, alcuni modelli peggiorano sensibilmente. Quindi parte delle prestazioni misurate può derivare dalla memorizzazione, non dalla capacità di rispondere a domande nuove.
