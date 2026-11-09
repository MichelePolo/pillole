---
id: 1cc4df-v3-05-un-modello-puo-generare-dati-per
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: 1cc4df7eb2c7
  lang: en
  title: "Learning with not Enough Data Part 3: Data Generation"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-04-15-data-gen/
anchor: Few shot prompting is shown to be effective for LM to learn within context without extra training.
anchor_check: exact
quiz:
  q: Come si possono usare i grandi modelli linguistici quando mancano dati di addestramento?
  a: Generando esempi sintetici con few-shot prompting e usandoli per addestrare un modello dedicato, filtrando quelli di scarsa qualità.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-09T09:56:12.691Z
---

# Un modello può generare dati per addestrarne un altro

Invece di raccogliere esempi reali, si può chiedere a un grande modello linguistico, con pochi esempi nel prompt, di generare input etichettati o non etichettati per un compito specifico. Un modello più piccolo viene poi addestrato su questi dati sintetici. Il metodo è utile quando i dati reali sono scarsi, ma richiede filtri, perché una parte dei campioni generati sarà errata o non allineata con l'etichetta.
