---
id: 028a83-v3-04-il-campionamento-per-core-set-cerca
lang: it
kind: metodo
topics:
  - ai
  - matematica
subtopics:
  - probabilita-statistica
  - geometria-topologia
source:
  id: 028a8389cdec
  lang: en
  title: "Learning with not Enough Data Part 2: Active Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-02-20-active-learning/
anchor: It is equivalent to the $k$-Center problem
anchor_check: exact
quiz:
  q: Perché l'approccio core-set tende a perdere efficacia con molte classi o dati ad alta dimensionalità?
  a: Perché la copertura rappresentativa dello spazio diventa più difficile con molte classi e alta dimensionalità, per via della maledizione della dimensionalità.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.410Z
---

# Il campionamento per core-set cerca copertura rappresentativa

L'approccio core-set considera l'active learning come un problema di copertura: scegliere un piccolo insieme di punti che rappresenti bene l'intero dataset, in modo che il modello addestrato su di essi si comporti in modo simile a quello addestrato su tutti i dati. Il problema equivale al k-center ed è NP-difficile, quindi si risolve con un algoritmo greedy. Il metodo funziona bene con poche classi ma perde efficacia quando le classi o le dimensioni dei dati crescono.
