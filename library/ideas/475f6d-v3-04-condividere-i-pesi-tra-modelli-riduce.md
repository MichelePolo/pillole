---
id: 475f6d-v3-04-condividere-i-pesi-tra-modelli-riduce
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
source:
  id: 475f6d363978
  lang: en
  title: Neural Architecture Search
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-08-06-nas/
anchor: aggressively sharing parameters among child models
anchor_check: exact
quiz:
  q: Perché la condivisione dei parametri tra modelli candidati riduce il costo della ricerca?
  a: Perché i candidati sono sottografi di un supergrafo con pesi condivisi, quindi non devono essere addestrati da zero.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.095Z
---

# Condividere i pesi tra modelli riduce il costo della ricerca

Addestrare ogni architettura candidata da zero costa moltissimo, perché ogni ciclo completo produce un solo dato per il controllore. Una strategia è far condividere i pesi tra i modelli, che sono sottografi di un supergrafo più grande. Così i modelli candidati non partono da zero e la ricerca diventa molto più economica. Secondo l'autrice, questo approccio può ridurre il costo di ordini di grandezza, anche se il risultato dipende dalla qualità del supergrafo. ==Riutilizzare i pesi tra candidati rende la ricerca molto più economica.==
