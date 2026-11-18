---
id: 5bdaf0-v3-04-i-modelli-linguistici-possono-diagnosticare-i
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 5bdaf053b66c
  lang: en
  title: Reducing Toxicity in Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-03-21-lm-toxicity/
anchor: exploiting the capacity of a pretrained language model to detect socially undesired attributes in its own outputs
anchor_check: exact
quiz:
  q: Che cosa serve a un modello per fare autodiagnosi dei propri output secondo questo metodo?
  a: Basta un template di prompt con la descrizione dell'attributo indesiderato, senza un dataset etichettato.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-17T10:51:32.377Z
---

# I modelli linguistici possono diagnosticare i propri output

Un modello linguistico pre-addestrato può essere interrogato con un semplice template che chiede se il testo contenga un certo attributo indesiderato, misurando la probabilità relativa di rispondere sì o no. Questo metodo di autodiagnosi non richiede un dataset etichettato per l'addestramento. Secondo Schick e colleghi, la sua efficacia cresce con la dimensione del modello, quindi funziona meglio sui modelli più grandi.
