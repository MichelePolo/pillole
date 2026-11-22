---
id: da9814-v3-01-le-architetture-semplici-reggono-anche-traffico
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: da9814d5561c
  lang: en
  title: In defense of simple architectures
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/simple-architectures/
anchor: computers are fast enough that high-traffic apps can be served with simple architectures
anchor_check: exact
quiz:
  q: Perché un'architettura semplice spesso basta anche per traffico molto alto?
  a: Perché per la maggior parte delle applicazioni i computer sono abbastanza veloci da servire molto traffico con una struttura semplice, che costa meno da costruire.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.898Z
---

# Le architetture semplici reggono anche traffico enorme

Per la maggior parte delle applicazioni, anche con traffico da sito tra i primi cento al mondo, i computer di oggi sono abbastanza veloci da reggere un'architettura semplice, cioè un monolite su un database tradizionale. L'autore osserva che molti progetti scelgono invece sistemi complessi a microservizi, copiando ciò che è di moda alle conferenze, anche quando la loro scala non lo richiede. ==Una struttura semplice basta spesso molto più a lungo di quanto si pensi==, e costa meno da costruire e da far funzionare. Il vantaggio non è estetico: meno componenti significano meno cose che possono rompersi.
