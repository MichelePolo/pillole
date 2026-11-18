---
id: c7babf-v3-03-il-pre-training-contiene-gia-le
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: c7babf95d158
  lang: en
  title: Reasoning models are just LLMs
  site: antirez.com
  url: http://antirez.com/news/146
anchor: the models already learned the representations needed in order to perform reasoning
anchor_check: exact
quiz:
  q: Perché pochi esempi bastano a un modello per iniziare a ragionare in modo complesso?
  a: Perché il pre-training, basato sulla sola previsione della parola successiva, ha già costruito le rappresentazioni necessarie al ragionamento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.911Z
---

# Il pre-training contiene già le basi del ragionamento

Secondo l'autore, il fatto che pochi esempi bastino per far ragionare un modello suggerisce che il pre-training abbia già costruito le rappresentazioni necessarie. Il lavoro S1 mostra che bastano circa mille esempi perché il modello inizi a costruire passaggi di ragionamento complessi. Il compito originale era solo prevedere la parola successiva, senza supervisione sul ragionamento. ==Il ragionamento poggia su capacità acquisite prima dell'addestramento specifico.== Le fasi successive attivano e affinano queste capacità più che crearle da zero.
