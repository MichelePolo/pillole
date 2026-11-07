---
id: 9dc881-v3-02-il-modello-puo-imparare-variabili-nascoste
lang: it
kind: storia
topics:
  - ai
subtopics:
  - sicurezza-allineamento
source:
  id: 9dc881aa2545
  lang: en
  title: Why Doesn’t My Model Work?
  author: Michael Lones
  site: The Gradient
  url: https://thegradient.pub/why-doesnt-my-model-work/
anchor: These are features that are present in data, and which happen to be predictive of class labels within the data
anchor_check: exact
quiz:
  q: Che differenza c'è tra una variabile nascosta e una correlazione spuria?
  a: La variabile nascosta è una caratteristica legata indirettamente alle etichette, mentre la correlazione spuria è un pattern senza alcun rapporto reale con il resto dei dati.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.408Z
---

# Il modello può imparare variabili nascoste invece del fenomeno

Una variabile nascosta è una caratteristica dei dati che predice le etichette per una via indiretta, senza essere legata causalmente a esse. Nel caso delle radiografie Covid, la posizione del corpo al momento della scansione correlava con la malattia, e i modelli hanno imparato a riconoscere la posa invece della patologia. Spesso questi indizi sono sotto gli occhi di tutti, come filigrane o timbri temporali nelle immagini.
