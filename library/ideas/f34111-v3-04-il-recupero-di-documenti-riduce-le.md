---
id: f34111-v3-04-il-recupero-di-documenti-riduce-le
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: f341118d2274
  lang: en
  title: Extrinsic Hallucinations in LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-07-07-hallucination/
anchor: Using retrieval to ground the model generation significantly helps reduce hallucination.
anchor_check: exact
quiz:
  q: Perché il recupero di documenti esterni aiuta a ridurre le allucinazioni?
  a: Perché ancorare la generazione a fonti reali lascia meno spazio alle affermazioni inventate.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.638Z
---

# Il recupero di documenti riduce le allucinazioni

Un risultato ricorrente nelle valutazioni citate è che collegare la generazione a fonti esterne recuperate riduce in modo significativo le affermazioni inventate. Anche nei benchmark sulla fattualità, i modelli più grandi tendono a fare meglio. Il principio è semplice: un modello che può controllare le proprie affermazioni su un documento reale ha meno spazio per inventare. Il metodo SAFE, ad esempio, usa ricerche iterative per verificare ogni fatto atomico.
