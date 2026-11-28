---
id: 4ceb83-v3-02-varia-l-ambiente-finche-il-reale
lang: it
kind: concetto
topics:
  - ai
  - filosofia
subtopics:
  - epistemologia
  - filosofia-della-tecnica
source:
  id: 4ceb83900555
  lang: en
  title: Domain Randomization for Sim2Real Transfer
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-05-05-domain-randomization/
anchor: discrepancies between the source and target domains are modeled as variability in the source domain
anchor_check: exact
quiz:
  q: Qual è l'idea di fondo che spiega perché la domain randomization può funzionare?
  a: Le differenze tra simulazione e realtà vengono trattate come variabilità della simulazione, così la realtà rientra nella distribuzione di addestramento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-27T10:59:26.997Z
---

# Varia l'ambiente finché il reale ricade dentro la distribuzione

Secondo l'autore, la domain randomization funziona perché considera le differenze tra simulazione e realtà come una variabilità interna alla simulazione stessa. Se la gamma delle variazioni è abbastanza ampia, il sistema reale diventa un caso tra i tanti già incontrati in addestramento. L'ipotesi è che il successo dipenda dal fatto che la distribuzione di addestramento copra la realtà, non dall'accuratezza del singolo simulatore.
