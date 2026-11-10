---
id: 028a83-v3-05-gli-esempi-dimenticati-segnalano-i-dati
lang: it
kind: dato
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
anchor: unforgettable examples can be safely removed without compromising model performance
anchor_check: exact
quiz:
  q: Che cosa indicano gli esempi che il modello dimentica spesso durante l'addestramento?
  a: Indicano esempi con etichette rumorose o caratteristiche insolite, e il loro conteggio può suggerire quanto siano informativi per il modello.
warnings:
  - corpo di 57 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.411Z
---

# Gli esempi dimenticati segnalano i dati ridondanti

Uno studio ha mostrato che durante l'addestramento molti esempi, una volta appresi, non vengono più dimenticati: sono ridondanti e potrebbero essere rimossi senza danno. Al contrario, esempi con etichette rumorose o con caratteristiche insolite vengono dimenticati spesso. La frequenza con cui un esempio viene dimenticato può quindi essere un segnale utile sulla sua importanza per il modello.
