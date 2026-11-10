---
id: d363b0-v3-01-un-agente-puo-ricevere-input-sensoriali
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: d363b026f0d9
  lang: en
  title: Locating the source of a mysterious beep with Claude
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Nov/9/mysterious-beeps/
anchor: Claude doesn’t have native audio input (yet), but it can run JavaScript and Python code that can analyze audio captured by a microphone.
anchor_check: exact
quiz:
  q: Perché l'agente può comunque 'sentire' un suono pur non avendo un ingresso audio nativo?
  a: Perché può eseguire codice che analizza l'audio catturato da un microfono collegato ai dispositivi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.486Z
---

# Un agente può ricevere input sensoriali tramite dispositivi

Il modello linguistico non ha un ingresso audio nativo, ma può eseguire codice JavaScript e Python che analizza ciò che un microfono registra. Collegando più dispositivi via WebSocket e inviando loro nuovo codice, l'agente ottiene quelli che l'autore chiama ==orecchie==: un modo per percepire il mondo fisico attorno a sé. Secondo l'autore, cercare modi per far percepire il mondo ai coding agent è un campo promettente e divertente.
