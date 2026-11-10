---
id: 028a83-v3-02-l-incertezza-del-modello-guida-la
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 028a8389cdec
  lang: en
  title: "Learning with not Enough Data Part 2: Active Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-02-20-active-learning/
anchor: deep learning models are often overconfident
anchor_check: exact
quiz:
  q: Qual è il limite principale di usare le probabilità del modello come misura di incertezza?
  a: Le reti profonde sono spesso troppo sicure di sé, quindi le loro probabilità non corrispondono bene alla vera incertezza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.409Z
---

# L'incertezza del modello guida la scelta dei campioni

Una strategia molto diffusa, detta uncertainty sampling, seleziona gli esempi su cui il modello è più incerto, misurando l'incertezza con la confidenza delle probabilità previste, con il margine tra le due classi più probabili o con l'entropia. Il punto debole è che le reti neurali profonde sono spesso troppo sicure di sé e le loro probabilità non riflettono bene la vera incertezza, quindi questo criterio va usato con cautela.
