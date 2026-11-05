---
id: 90eb76-v3-02-le-allucinazioni-sono-fallimenti-di-implicazione
lang: it
kind: concetto
topics:
  - ai
  - filosofia
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 90eb76f0f06c
  lang: en
  title: A Categorical Analysis of Large Language Models and Why LLMs Circumvent the Symbol Grounding Problem
  author: |-
    Luciano Floridi

      
    Yiyang Jia

      
    Fernando Tohmé
  site: arxiv.org
  url: https://arxiv.org/html/2512.09117
anchor: hallucinations are entailment failures
anchor_check: exact
quiz:
  q: Quando, secondo il criterio proposto, un output di un LLM è considerato un'allucinazione?
  a: Quando contiene proposizioni che non appartengono all'insieme di proposizioni sostenute dal contenuto di riferimento umano.
warnings:
  - corpo di 59 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-04T23:47:48.005Z
---

# Le allucinazioni sono fallimenti di implicazione, non semplici bug

Gli autori definiscono un'allucinazione come una proposizione prodotta dal modello che non è sostenuta dal contenuto di riferimento umano. In questa lettura, il criterio è l'inclusione insiemistica: l'output del modello deve essere contenuto in ciò che una persona informata ricaverebbe dalle fonti affidabili. Secondo l'articolo, questi fallimenti sono ==intrinseci all'architettura==, quindi non si eliminano semplicemente correggendo errori di implementazione.
