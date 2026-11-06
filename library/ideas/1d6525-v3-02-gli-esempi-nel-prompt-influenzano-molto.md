---
id: 1d6525-v3-02-gli-esempi-nel-prompt-influenzano-molto
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 1d65254430ae
  lang: en
  title: Prompt Engineering
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/
anchor: choice of prompt format, training examples, and the order of the examples can lead to dramatically different performance
anchor_check: exact
quiz:
  q: Perché la scelta degli esempi in un prompt few-shot è importante?
  a: Perché formato, esempi e ordine possono cambiare drasticamente le prestazioni del modello.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.820Z
---

# Gli esempi nel prompt influenzano molto le prestazioni

Negli approcci few-shot, dare al modello alcuni esempi di input e output corretti aiuta a capire l'intento e i criteri della risposta, e di solito migliora il risultato rispetto a nessun esempio. Il costo è un maggior consumo di token e il rischio di superare il limite di contesto con testi lunghi. Anche la scelta, l'ordine e il formato degli esempi possono far oscillare le prestazioni in modo drastico, da quasi casuali a quasi allo stato dell'arte.
