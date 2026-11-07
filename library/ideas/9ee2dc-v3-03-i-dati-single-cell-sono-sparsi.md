---
id: 9ee2dc-v3-03-i-dati-single-cell-sono-sparsi
lang: it
kind: concetto
topics:
  - biologia
  - tecnologia
subtopics:
  - genetica
  - infrastrutture
source:
  id: 9ee2dc8a6067
  lang: en
  title: "Deep learning for single-cell sequencing: a microscope to see the diversity of cells"
  author: Fatima Zahra El Hajji
  site: The Gradient
  url: https://thegradient.pub/deep-learning-for-single-cell-sequencing-a-microscope-to-uncover-the-rich-diversity-of-individual-cells/
anchor: not all zeros in scRNA-seq data can be considered mere missing values
anchor_check: exact
quiz:
  q: Perché non tutti gli zeri nei dati scRNA-seq vanno trattati come valori mancanti?
  a: Perché molti zeri derivano da limiti tecnici e non riflettono il vero livello di espressione, quindi vanno distinti quelli veri da quelli falsi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.462Z
---

# I dati single-cell sono sparsi e pieni di zeri tecnici

Nei dati di RNA a singola cellula compaiono molti valori pari a zero, che in parte non riflettono l'espressione reale del gene ma derivano da limiti tecnici come la bassa cattura dell'RNA o la profondità di sequenziamento. Secondo l'autrice, questo rende inadeguati i metodi statistici tradizionali di imputazione, che trattano ogni zero come un dato mancante: non tutti gli zeri sono semplici valori assenti, e distinguere quelli veri da quelli falsi è il vero problema.
