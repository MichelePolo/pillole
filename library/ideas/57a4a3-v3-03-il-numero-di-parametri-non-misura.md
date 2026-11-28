---
id: 57a4a3-v3-03-il-numero-di-parametri-non-misura
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 57a4a31db8fe
  lang: en
  title: Are Deep Neural Networks Dramatically Overfitted?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-03-14-overfit/
anchor: The number of parameters is not correlated with model overfitting in the field of deep learning
anchor_check: exact
quiz:
  q: Perché la dimensione intrinseca può essere molto più bassa del numero di parametri di una rete?
  a: Perché per imparare basta muoversi in un piccolo sottospazio casuale dello spazio dei parametri, quindi la complessità effettiva è minore di quella apparente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.257Z
---

# Il numero di parametri non misura la complessità

Il numero di parametri di una rete non è correlato con l'overfitting. La dimensione intrinseca propone una misura alternativa: si ottimizza solo in un sottospazio casuale di dimensione d, e si cerca il d più piccolo che produce una buona soluzione. Su CIFAR10 una rete completamente connessa con oltre 650mila parametri ha una dimensione intrinseca di circa 9mila. ==Le reti sono molto più semplici di quanto appaiano==, perché non serve esplorare tutte le dimensioni dello spazio dei parametri per imparare bene.
