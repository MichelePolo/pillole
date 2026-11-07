---
id: 4dab64-v3-01-il-kv-cache-domina-la-memoria
lang: it
kind: dato
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: 4dab64a7e3ce
  lang: en
  title: Large Transformer Model Inference Optimization
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-10-inference-optimization/
anchor: The KV cache should be stored in memory during decoding time
anchor_check: exact
quiz:
  q: Perché la cache KV pesa così tanto durante l'inferenza di un grande modello?
  a: Perché deve restare in memoria per tutta la generazione, conservando le informazioni intermedie di ogni token già elaborato.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.319Z
---

# Il KV cache domina la memoria durante la generazione

Durante la generazione di testo un grande modello linguistico deve conservare in memoria la cache KV, cioè le informazioni intermedie di tutti i token già elaborati. Con batch e contesti grandi, questa cache può superare la dimensione stessa del modello. Per questo l'inferenza è costosa non solo in calcolo ma soprattutto in memoria, e ottimizzarla richiede di agire su questo collo di bottiglia.
