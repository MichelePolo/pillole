---
id: bd2a1c-v3-01-l-attenzione-e-una-media-pesata
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: bd2a1c61491f
  lang: en
  title: The Transformer Family Version 2.0
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/
anchor: the output is a weighted sum of the value vectors, where the weight assigned to each value slot is determined by the dot-product of the query with the corresponding key
anchor_check: exact
quiz:
  q: Come viene calcolato l'output del meccanismo di attenzione scalata?
  a: È una somma pesata dei vettori valore, dove i pesi derivano dal prodotto scalare tra la query e ciascuna chiave, normalizzato con softmax.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.450Z
---

# L'attenzione è una media pesata di valori

Nel meccanismo di attenzione scalata con prodotto scalare, il modello calcola un punteggio tra una query e ogni chiave, lo normalizza con softmax e usa questi pesi per fare una media pesata dei valori. ==L'output è quindi una combinazione dei valori, pesata dalla somiglianza tra query e chiavi==. Questa operazione è alla base del Transformer e chiarisce perché l'attenzione possa selezionare le informazioni rilevanti in un contesto.
