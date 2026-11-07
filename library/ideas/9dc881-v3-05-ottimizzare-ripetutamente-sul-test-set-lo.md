---
id: 9dc881-v3-05-ottimizzare-ripetutamente-sul-test-set-lo
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - bias-cognitivi
  - modelli-linguistici
source:
  id: 9dc881aa2545
  lang: en
  title: Why Doesn’t My Model Work?
  author: Michael Lones
  site: The Gradient
  url: https://thegradient.pub/why-doesnt-my-model-work/
anchor: if you’re developing a model iteratively and using the same test set to evaluate the model after each iteration, then you’re basically using that test set to guide the development of the model
anchor_check: exact
quiz:
  q: Cosa succede se si usa lo stesso test set a ogni iterazione dello sviluppo di un modello?
  a: Il test set guida lo sviluppo e il modello finisce per adattarsi a esso, dando una stima di generalizzazione troppo ottimistica.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.409Z
---

# Ottimizzare ripetutamente sul test set lo rende inutile

Se si modifica il modello, lo si valuta sullo stesso test set e si ripete finché il risultato non soddisfa, il test set guida lo sviluppo e diventa parte dell'addestramento. Il modello finisce per adattarsi a quei dati specifici, e la misura di generalizzazione risulta troppo ottimistica. Lo stesso vale per i benchmark pubblici usati da tutta la comunità, per cui conviene usarne più d'uno e variare i dati.
