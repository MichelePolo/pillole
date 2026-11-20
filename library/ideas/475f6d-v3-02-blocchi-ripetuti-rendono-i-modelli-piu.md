---
id: 475f6d-v3-02-blocchi-ripetuti-rendono-i-modelli-piu
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 475f6d363978
  lang: en
  title: Neural Architecture Search
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-08-06-nas/
anchor: A well-designed cell module enables transferability between datasets.
anchor_check: exact
quiz:
  q: Perché conviene costruire una rete come ripetizione di una stessa cella?
  a: Perché una cella ben progettata si trasferisce facilmente tra dataset diversi e la dimensione del modello si regola cambiando il numero di ripetizioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.094Z
---

# Blocchi ripetuti rendono i modelli più facili da trasferire

Invece di progettare ogni livello di una rete, si può definire una cella che si ripete più volte, come avviene in Inception e ResNet. Una cella ben progettata può essere riutilizzata su dataset diversi e la dimensione del modello si regola semplicemente cambiando il numero di ripetizioni. Questo schema di impilare moduli si è rivelato una strategia utile nell'ingegneria delle architetture. ==Impilare moduli ben progettati è un modo efficace di costruire modelli forti.==
