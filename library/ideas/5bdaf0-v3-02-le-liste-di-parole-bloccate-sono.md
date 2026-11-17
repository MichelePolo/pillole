---
id: 5bdaf0-v3-02-le-liste-di-parole-bloccate-sono
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
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
anchor: it is still possible to have unsafe content composed of safe tokens
anchor_check: exact
quiz:
  q: Perché un filtro basato su parole bloccate non basta a eliminare i contenuti tossici?
  a: Perché si può produrre contenuto non sicuro usando parole che, singolarmente, non sono offensive.
warnings:
  - corpo di 59 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-17T10:51:32.374Z
---

# Le liste di parole bloccate sono imprecise ma utili

Filtrare le parole offensive è un metodo intuitivo ed efficace per evitare linguaggio esplicito durante la generazione. Tuttavia ha limiti evidenti: una lista di parolacce tende ad avere alta precisione e bassa copertura, perché un contenuto tossico può essere costruito con parole che, prese singolarmente, sono innocue. Il filtro resta quindi un segnale debole, da combinare con altri metodi.
