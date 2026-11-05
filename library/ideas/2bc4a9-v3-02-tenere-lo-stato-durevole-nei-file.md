---
id: 2bc4a9-v3-02-tenere-lo-stato-durevole-nei-file
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: 2bc4a920b1b3
  lang: en
  title: Harness Engineering for Self-Improvement
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-07-04-harness/
anchor: A harness should not carry the entire workflow and all logs in context; instead, it should keep durable state in files.
anchor_check: exact
quiz:
  q: Perché conviene memorizzare log e stato in file invece che nel contesto del modello?
  a: Perché i log crescono oltre la finestra di contesto, mentre i file permettono di recuperare, cercare e ripristinare lo stato anche dopo interruzioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T00:05:05.590Z
---

# Tenere lo stato durevole nei file, non nel contesto

Un harness efficace non dovrebbe caricare nel contesto tutto il flusso di lavoro e tutti i log, perché questi crescono oltre la finestra di contesto. Secondo l'autore, conviene salvare stato, risultati di esperimenti, diff e tracce di errore in file, così l'agente può rileggerli, cercarli e recuperare dopo un'interruzione. Il vantaggio è che la capacità di leggere e scrivere file, già presente nei modelli, rende questo approccio naturale e in miglioramento con i modelli stessi.
