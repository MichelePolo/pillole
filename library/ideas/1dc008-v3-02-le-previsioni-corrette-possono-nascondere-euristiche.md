---
id: 1dc008-v3-02-le-previsioni-corrette-possono-nascondere-euristiche
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - modelli-linguistici
  - bias-cognitivi
source:
  id: 1dc008c321b4
  lang: en
  title: AGI Is Not Multimodal
  author: Benjamin A. Spiegel
  site: The Gradient
  url: https://thegradient.pub/agi-is-not-multimodal/
anchor: it should raise suspicion when that prediction reflects a better understanding of the training data than the underlying world that led to such data
anchor_check: exact
quiz:
  q: Perché un modello che prevede bene una sequenza può non aver capito il mondo che ha generato quella sequenza?
  a: Perché può aver imparato euristiche particolari e più facili da apprendere che funzionano sui dati di addestramento senza cogliere il sistema reale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.321Z
---

# Le previsioni corrette possono nascondere euristiche superficiali

Un modello può ottenere ottimi risultati nella previsione di sequenze imparando regole particolari che valgono solo in alcuni casi, senza cogliere il sistema che ha generato i dati. Secondo l'autore, questo è il difetto centrale dell'obiettivo di prevedere il token successivo: conserva solo l'informazione utile a quella previsione. ==Se una previsione riflette una comprensione dei dati di addestramento migliore di quella del mondo reale, c'è motivo di sospettare.== Più facile da apprendere è la scorciatoia, più è probabile che il modello la prenda.
