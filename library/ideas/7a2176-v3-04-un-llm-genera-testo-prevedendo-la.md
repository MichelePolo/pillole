---
id: 7a2176-v3-04-un-llm-genera-testo-prevedendo-la
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
anchor: the decoder is trying to generate a series of words
anchor_check: exact
quiz:
  q: Qual è il compito di output di un modello come GPT secondo l'articolo?
  a: Prevedere il token o la parola successiva in una sequenza, dato il contesto precedente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.859Z
---

# Un LLM genera testo prevedendo la parola successiva

Il compito finale di un modello linguistico come GPT è semplice da descrivere: dato il testo finora, prevedere il token successivo. Il decoder produce una sequenza di parole una alla volta, scegliendo quella più probabile in base al contesto. Blocchi di attenzione e normalizzazione servono a rendere questa previsione accurata. ==Il compito del decoder è generare una sequenza di parole, una dopo l'altra.== Capire questo meccanismo aiuta a spiegare sia le capacità sia gli errori che l'autore chiama allucinazioni, cioè risposte plausibili ma sbagliate.
