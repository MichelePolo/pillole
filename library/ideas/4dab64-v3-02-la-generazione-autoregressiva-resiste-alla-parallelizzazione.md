---
id: 4dab64-v3-02-la-generazione-autoregressiva-resiste-alla-parallelizzazione
lang: it
kind: concetto
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
anchor: Inference generation is executed in an autoregressive fashion, making the decoding process hard to parallel.
anchor_check: exact
quiz:
  q: Perché la decodifica autoregressiva è difficile da parallelizzare?
  a: Perché ogni token dipende dai precedenti, quindi non può essere generato in parallelo agli altri.
warnings:
  - corpo di 51 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.320Z
---

# La generazione autoregressiva resiste alla parallelizzazione

La generazione di un testo avviene un token alla volta, e ogni token dipende da quelli precedenti. Questo rende il processo di decodifica difficile da parallelizzare, anche quando l'hardware sarebbe in grado di fare molti calcoli insieme. È una delle due ragioni strutturali per cui l'inferenza dei grandi transformer è lenta.
