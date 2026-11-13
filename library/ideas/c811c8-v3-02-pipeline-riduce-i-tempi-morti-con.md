---
id: c811c8-v3-02-pipeline-riduce-i-tempi-morti-con
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - infrastrutture
  - modelli-linguistici
source:
  id: c811c8fa03ef
  lang: en
  title: How to Train Really Large Models on Many GPUs?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-09-25-train-large/
anchor: The main idea is to split one minibatch into multiple microbatches and enable each stage worker to process one microbatch simultaneously.
anchor_check: exact
quiz:
  q: Perché dividere un minibatch in microbatch migliora l'uso delle macchine?
  a: Perché permette a più stadi di lavorare contemporaneamente su microbatch diversi, riducendo il tempo di inattività.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.095Z
---

# Pipeline riduce i tempi morti con i microbatch

Nel parallelismo a pipeline un minibatch viene diviso in microbatch, così che più stadi di macchine lavorino contemporaneamente su parti diverse dei dati. Senza questo accorgimento, una rete divisa in strati farebbe lavorare una macchina alla volta, lasciando le altre inattive. ==Il tempo di inattività, la cosiddetta bolla, si riduce quando il numero di microbatch è molto maggiore del numero di partizioni.== Restano comunque costi di comunicazione e di sincronizzazione dei gradienti.
