---
id: e03a8f-v3-02-uno-stato-compresso-puo-sostituire-la
lang: it
kind: concetto
topics:
  - ai
  - filosofia
subtopics:
  - modelli-linguistici
  - epistemologia
source:
  id: e03a8fbe8af2
  lang: en
  title: Mamba Explained
  author: Kola Ayonrinde
  site: The Gradient
  url: https://thegradient.pub/mamba-explained/
anchor: the state is a compression of the past
anchor_check: exact
quiz:
  q: Qual è il compromesso tra un modello con stato piccolo e uno con stato grande?
  a: Lo stato piccolo è efficiente ma può perdere informazioni; lo stato grande è più efficace ma costoso in memoria e calcolo.
warnings:
  - corpo di 59 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.916Z
---

# Uno stato compresso può sostituire la memoria completa

Un modello a spazio di stati riassume tutto il passato in un vettore di dimensione fissa, aggiornato a ogni passo. Questo lo rende efficiente, perché la memoria non cresce con la sequenza, ma ==il rischio è perdere informazioni utili che non sono state conservate nello stato.== Il problema diventa quindi decidere cosa vale la pena ricordare e cosa scartare.
