---
id: 9dc881-v3-06-con-classi-sbilanciate-l-accuratezza-inganna
lang: it
kind: dato
topics:
  - ai
  - matematica
subtopics:
  - probabilita-statistica
source:
  id: 9dc881aa2545
  lang: en
  title: Why Doesn’t My Model Work?
  author: Michael Lones
  site: The Gradient
  url: https://thegradient.pub/why-doesnt-my-model-work/
anchor: If 90% of the test samples have this label, then you’ll get an accuracy of 90% — a good accuracy for a bad classifier.
anchor_check: exact
quiz:
  q: Perché l'accuratezza può essere fuorviante con dati molto sbilanciati?
  a: Perché un classificatore che predice sempre la classe maggioritaria ottiene un'accuratezza alta pur non imparando nulla di utile.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.409Z
---

# Con classi sbilanciate l'accuratezza inganna

Un classificatore che predice sempre la stessa etichetta può ottenere un'accuratezza del 90% se quella classe è dominante nei dati di test, pur essendo inutile. Per questo, in presenza di forte squilibrio, conviene usare metriche meno sensibili alla distribuzione delle classi, come il punteggio F o il coefficiente di Matthews. Poiché ogni metrica ha limiti, l'autore suggerisce di combinarne più di una.
