---
id: 57cf4a-v3-04-modelli-diversi-possono-collaborare-tramite-il
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: 57cf4a2ec0df
  lang: en
  title: Generalized Visual Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-06-09-vlm/
anchor: language is considered as the intermediate representation by which different models can exchange information
anchor_check: exact
quiz:
  q: Che ruolo svolge il linguaggio nei Socratic Models?
  a: È la rappresentazione intermedia con cui i diversi modelli scambiano informazioni, senza bisogno di nuovo addestramento.
warnings:
  - corpo di 59 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-08T09:06:54.726Z
---

# Modelli diversi possono collaborare tramite il linguaggio

Il framework Socratic Models compone più modelli pre-addestrati, ciascuno per una modalità diversa, usando il linguaggio come mezzo comune. L'output di un modello non linguistico viene inserito in un prompt testuale e poi elaborato da un modello linguistico per il ragionamento. Così si combinano sistemi già esistenti senza ulteriore addestramento, con il linguaggio come interfaccia che li fa dialogare.
