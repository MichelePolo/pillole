---
id: 7a2176-v3-01-il-testo-va-trasformato-in-numeri
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 7a21767383b4
  lang: en
  title: "Car-GPT: Could LLMs finally make self-driving cars happen?"
  author: Jérémy Cohen
  site: The Gradient
  url: https://thegradient.pub/car-gpt/
anchor: The input of a neural network is always a number
anchor_check: exact
quiz:
  q: Perché un modello linguistico deve convertire il testo in token prima di elaborarlo?
  a: Perché una rete neurale riceve in ingresso solo numeri, quindi il testo va prima trasformato in una sequenza di token numerici.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.858Z
---

# Il testo va trasformato in numeri

Una rete neurale non legge parole: accetta soltanto numeri. Per questo il testo in ingresso viene prima convertito in una sequenza di token, cioè di unità che possono essere parole, sotto-parole o singoli caratteri. Ogni token corrisponde a un numero, e la scelta di cosa sia un token dipende dal modello. ==La tokenizzazione è il ponte tra il linguaggio e il calcolo==, e influisce su quanto bene il modello gestisce parole rare o composte. Capire questo passaggio aiuta a intuire perché alcuni input vengono trattati meglio di altri.
