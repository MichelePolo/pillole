---
id: 4dab64-v3-03-la-distillazione-trasferisce-competenze-da-un
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 4dab64a7e3ce
  lang: en
  title: Large Transformer Model Inference Optimization
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-10-inference-optimization/
anchor: transferring skills from a pre-trained expensive model (“teacher model”) into the student
anchor_check: exact
quiz:
  q: Cosa rende possibile la distillazione tra un insegnante e uno studente?
  a: "La compatibilità dello spazio di output: lo studente può avere un'architettura diversa purché imiti le uscite dell'insegnante."
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.320Z
---

# La distillazione trasferisce competenze da un modello grande a uno piccolo

Nella distillazione della conoscenza un modello piccolo, detto studente, viene addestrato a imitare le uscite di un modello grande e costoso, detto insegnante. Non servono architetture identiche, basta che lo spazio di output sia compatibile. Il risultato è un modello più economico da far girare, che conserva gran parte delle prestazioni. L'autrice cita come esempio DistilBERT, che riduce i parametri di BERT del 40% mantenendo il 97% delle prestazioni.
