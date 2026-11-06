---
id: bb44ad-v3-02-il-fuzzing-batte-spesso-le-domande
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: bb44adf34f21
  lang: en
  title: Agentic test processes, LLM benchmarks, and other notes on agentic coding from Galapagos Island
  site: danluu.com
  url: https://danluu.com/ai-coding/
anchor: fuzzing generally wins on latency to find a bug, and it dominates on finding more bugs and having a lower false positive rate
anchor_check: exact
quiz:
  q: Perché un fuzzer generato da un LLM può essere meno efficace di uno scritto con cura?
  a: Perché i modelli non ragionano bene su come variare gli input per far emergere i bug, e la loro copertura è spesso scarsa.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.806Z
---

# Il fuzzing batte spesso le domande dirette agli LLM

Secondo l'autore, per trovare bug il fuzzing, cioè la generazione casuale di input, di solito è più rapido e trova più errori con meno falsi positivi rispetto a chiedere a un modello linguistico di cercarli. I modelli hanno però un'alta varianza nei risultati, quindi a volte una richiesta diretta funziona, ma in media il fuzzing ha vinto. Anche i fuzzer generati dagli LLM tendono ad avere una copertura sorprendentemente scarsa, perché non ragionano bene su come variare gli input per far emergere i bug.
