---
id: f34111-v3-03-aggiungere-conoscenza-nuova-con-il-fine
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: f341118d2274
  lang: en
  title: Extrinsic Hallucinations in LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-07-07-hallucination/
anchor: They found that (1) LLMs learn fine-tuning examples with new knowledge slower than other examples
anchor_check: exact
quiz:
  q: Perché il fine-tuning su conoscenza nuova può aumentare le allucinazioni?
  a: Perché quando il modello apprende la maggior parte degli esempi sconosciuti tende a inventare risposte, mentre quelli già noti migliorano le prestazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.636Z
---

# Aggiungere conoscenza nuova con il fine-tuning può aumentare le allucinazioni

Gekhman e colleghi hanno osservato che gli esempi con conoscenza nuova vengono appresi più lentamente di quelli coerenti con ciò che il modello già sa. Quando però il modello finisce per impararne la maggior parte, tende a inventare di più. La prestazione migliore si ottiene quando il modello apprende la maggioranza degli esempi già noti e solo pochi di quelli sconosciuti. Ciò suggerisce cautela nell'usare il fine-tuning supervisionato per aggiornare la conoscenza di un modello.
