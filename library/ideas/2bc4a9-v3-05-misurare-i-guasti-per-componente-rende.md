---
id: 2bc4a9-v3-05-misurare-i-guasti-per-componente-rende
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - sicurezza-allineamento
source:
  id: 2bc4a920b1b3
  lang: en
  title: Harness Engineering for Self-Improvement
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-07-04-harness/
anchor: every edit should be grounded by evidence
anchor_check: exact
quiz:
  q: Perché associare ogni errore a un componente specifico dell'harness è importante?
  a: Perché rende le modifiche mirate e verificabili, così da attribuire i guadagni alle specifiche modifiche e non a effetti casuali.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T00:05:05.593Z
---

# Misurare i guasti per componente rende i miglioramenti attribuibili

Secondo l'autore, un harness migliora in modo affidabile solo se ogni modifica è legata a una prova. Lo studio AHE scompone l'harness in componenti esplicite, come prompt di sistema, descrizioni e implementazioni degli strumenti, middleware, skill, sottoagenti e memoria a lungo termine. Ogni errore viene associato a un componente e ogni modifica include una previsione verificabile nel turno successivo. Questa osservabilità rende più semplice capire quali cambiamenti hanno davvero prodotto i guadagni.
