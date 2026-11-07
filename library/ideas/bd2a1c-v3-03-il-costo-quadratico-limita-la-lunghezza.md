---
id: bd2a1c-v3-03-il-costo-quadratico-limita-la-lunghezza
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: bd2a1c61491f
  lang: en
  title: The Transformer Family Version 2.0
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/
anchor: Naively increasing context length leads to high consumption in both time and memory and may not be supported due to hardware constraints
anchor_check: near
quiz:
  q: Perché allungare semplicemente il contesto di un Transformer è problematico?
  a: Perché il costo in tempo e in memoria dell'attenzione cresce quadraticamente con la lunghezza della sequenza, e l'hardware può non sostenerlo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.451Z
---

# Il costo quadratico limita la lunghezza del contesto

Aumentare ingenuamente la lunghezza del contesto fa crescere il costo di calcolo e di memoria dell'attenzione in modo quadratico rispetto alla lunghezza della sequenza. È il motivo per cui molte delle varianti del Transformer cercano di ridurre l'attenzione localmente, con approssimazioni a basso rango o con memorie esterne. Il problema non è solo teorico: l'hardware reale può non reggere sequenze lunghe, e questo spinge a ripensare il meccanismo stesso.
