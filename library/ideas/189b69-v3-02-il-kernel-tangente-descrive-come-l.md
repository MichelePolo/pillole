---
id: 189b69-v3-02-il-kernel-tangente-descrive-come-l
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
anchor: it explains how updating the model parameters on one data sample affects the predictions for other samples
anchor_check: exact
quiz:
  q: Che cosa misura il kernel tangente neurale tra due input?
  a: Misura quanto l'aggiornamento dei parametri guidato da un campione influenzi la previsione sull'altro campione, tramite il prodotto dei gradienti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.363Z
---

# Il kernel tangente descrive come l'addestramento propaga gli effetti

Il kernel tangente neurale è una funzione di similarità che misura come un aggiornamento dei parametri su un campione influenzi la previsione su un altro campione. Si ottiene come prodotto scalare dei gradienti della rete rispetto ai parametri, calcolati per i due input. Durante la discesa del gradiente, l'evoluzione delle previsioni dipende da questo kernel e dal gradiente della perdita. È un'idea potente perché trasforma la dinamica di una rete complessa in una relazione tra campioni.
