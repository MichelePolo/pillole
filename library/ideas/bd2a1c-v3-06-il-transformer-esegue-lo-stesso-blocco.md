---
id: bd2a1c-v3-06-il-transformer-esegue-lo-stesso-blocco
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: bd2a1c61491f
  lang: en
  title: The Transformer Family Version 2.0
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/
anchor: Universal Transformer (Dehghani, et al. 2019) combines self-attention in Transformer with the recurrent mechanism in RNN
anchor_check: exact
quiz:
  q: Che cosa cambia nell'Universal Transformer rispetto al Transformer classico?
  a: Lo stesso blocco viene applicato ricorsivamente con parametri condivisi, e nella versione adattiva il numero di passi varia per ogni token.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.452Z
---

# Il Transformer esegue lo stesso blocco in ricorrenza

Universal Transformer combina l'auto-attenzione del Transformer con la ricorrenza delle RNN: lo stesso blocco viene applicato iterativamente ai rappresentanti di ciascuna posizione, con parametri condivisi. Se il numero di passi è fisso, il modello equivale a un Transformer multistrato con pesi condivisi tra gli strati. La versione adattiva decide dinamicamente quanti passi eseguire per ogni token, il che permette di spendere più calcolo dove serve.
