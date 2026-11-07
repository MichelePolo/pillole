---
id: 189b69-v3-05-il-pigro-addestramento-i-parametri-cambiano
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 189b698067bc
  lang: en
  title: Some Math behind Neural Tangent Kernel
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-09-08-ntk/
anchor: the network parameters hardly change
anchor_check: exact
quiz:
  q: Che cosa significa lazy training nelle reti sovraparametrizzate?
  a: Significa che la perdita scende a zero mentre i parametri della rete cambiano pochissimo, restando quasi nella configurazione iniziale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.364Z
---

# Il pigro addestramento: i parametri cambiano poco

Nelle reti fortemente sovraparametrizzate si osserva che la perdita scende quasi a zero mentre i parametri cambiano pochissimo. Questo fenomeno è detto lazy training: la rete apprende senza muoversi molto nello spazio dei parametri, e lo Jacobiano dell'output resta quasi invariato. Chizat e colleghi hanno mostrato che, per una rete a due livelli, il rapporto di variazione tende a zero quando il numero di neuroni nascosti cresce. Il concetto aiuta a capire quando la teoria lineare è una buona approssimazione.
