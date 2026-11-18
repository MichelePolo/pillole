---
id: 91c8f7-v3-02-la-decodifica-cambia-l-output-senza
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 91c8f7fce27f
  lang: en
  title: Controllable Neural Text Generation
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/
anchor: By adopting different decoding methods, we can place restrictions or preferences on the sampling process to alter the generated samples without modifying any model weights.
anchor_check: exact
quiz:
  q: Perché il greedy search tende a produrre testo ripetitivo?
  a: Perché sceglie sempre il token più probabile, e così può ricadere in ripetizioni di frasi anche con modelli ben addestrati.
warnings:
  - corpo di 58 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.870Z
---

# La decodifica cambia l'output senza toccare i pesi

Il modo in cui si scelgono i token successivi, con temperatura, top-k, nucleus sampling o penalizzazione delle ripetizioni, altera molto il testo prodotto senza modificare il modello. Il greedy search tende a ripetere frasi, mentre il campionamento puro può produrre testo meno coerente. La scelta della strategia di decodifica è quindi una leva importante di controllo, spesso sottovalutata.
