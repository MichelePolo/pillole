---
id: 1cc4df-v3-03-le-trasformazioni-devono-cambiare-la-forma
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 1cc4df7eb2c7
  lang: en
  title: "Learning with not Enough Data Part 3: Data Generation"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-04-15-data-gen/
anchor: The goal of data augmentation is to modify the input format
anchor_check: exact
quiz:
  q: Qual è il principio che deve rispettare una buona trasformazione per aumentare i dati?
  a: Deve modificare la forma dell'input senza alterarne il significato semantico e quindi l'etichetta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-09T09:56:12.690Z
---

# Le trasformazioni devono cambiare la forma, non il significato

L'aumento dei dati consiste nel modificare il formato di un esempio, come la formulazione di un testo o l'aspetto di un'immagine, lasciando invariato il suo significato semantico. Un ritaglio, una rotazione o la sostituzione di una parola con un sinonimo sono trasformazioni valide solo se non cambiano l'etichetta. Se la trasformazione altera ciò che conta per il compito, il nuovo esempio diventa rumore.
