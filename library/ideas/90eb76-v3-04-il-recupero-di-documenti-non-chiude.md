---
id: 90eb76-v3-04-il-recupero-di-documenti-non-chiude
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
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
anchor: an LLM cannot achieve grounding on its own; it must rely indirectly on a human "pre-grounded" content repository
anchor_check: exact
quiz:
  q: Perché i sistemi con retrieval, secondo l'articolo, non risolvono il problema del grounding?
  a: Perché restano confinati ai contenuti prodotti da esseri umani, senza un accesso diretto e causale al mondo.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-04T23:47:48.006Z
---

# Il recupero di documenti non chiude il divario con il mondo

Gli autori esaminano sistemi che collegano l'LLM a basi di conoscenza esterne, come le architetture di retrieval-augmented generation. Secondo la loro analisi, anche questi sistemi restano dentro il livello dei contenuti umani e non stabiliscono un contatto diretto con il mondo. Possono ridurre le allucinazioni vincolando le risposte a fonti verificate, ma ==non trasformano il modello in un soggetto che ancora i simboli alla realtà==.
