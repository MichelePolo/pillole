---
id: c811c8-v3-06-il-checkpointing-di-attivazioni-scambia-calcolo
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: c811c8fa03ef
  lang: en
  title: How to Train Really Large Models on Many GPUs?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-09-25-train-large/
anchor: It reduces the memory cost of training a $\ell$ layer deep neural net to $O(\sqrt{\ell})$
anchor_check: exact
quiz:
  q: Qual è il costo del ricalcolo delle attivazioni in cambio del risparmio di memoria?
  a: Un passaggio in avanti aggiuntivo per batch, cioè più tempo di calcolo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.097Z
---

# Il checkpointing di attivazioni scambia calcolo con memoria

Invece di conservare tutte le attivazioni intermedie, si salvano solo quelle ai confini delle partizioni e le altre vengono ricalcolate durante la retropropagazione. Il costo è un passaggio in avanti extra per batch, ma la memoria necessaria può scendere da un valore lineare nel numero di strati a circa la sua radice quadrata. È un esempio chiaro di come si possa barattare tempo di calcolo con spazio di memoria.
