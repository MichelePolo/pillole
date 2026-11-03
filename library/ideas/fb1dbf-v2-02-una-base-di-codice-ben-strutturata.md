---
id: fb1dbf-v2-02-una-base-di-codice-ben-strutturata
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: fb1dbfd32b33
  lang: en
  title: Not just development, distribution of software may change as well
  site: antirez.com
  url: http://antirez.com/news/170
anchor: once you have two solid examples of tensor parallel graph execution, a strong coding agent can infer how to implement the same thing for other backend/model pairs.
anchor_check: exact
quiz:
  q: Perché esempi solidi nel codice facilitano l'implementazione di nuove funzioni da parte di un agente?
  a: Perché l'agente può dedurre dagli esempi esistenti come implementare la stessa funzione in altri casi, usando il codice come guida.
warnings:
  - titolo di 11 parole (max 8)
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T07:12:29.813Z
---

# Una base di codice ben strutturata guida gli agenti di programmazione

Quando un progetto contiene esempi solidi di una funzione, un agente di programmazione può dedurre come implementarla altrove. Secondo l'autore, dopo due buone implementazioni di esecuzione parallela su tensori, l'agente può replicarla per altri backend e modelli, e con un motore che supporta due modelli bene, un terzo può essere realizzato quasi automaticamente. Il codice esistente funziona così da guardrail che orienta l'implementazione. Anche per questo la documentazione dovrebbe servire non solo alle persone, ma anche agli agenti che devono capire come modificare il sistema.
