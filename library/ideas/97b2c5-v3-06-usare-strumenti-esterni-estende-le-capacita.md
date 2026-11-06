---
id: 97b2c5-v3-06-usare-strumenti-esterni-estende-le-capacita
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: 97b2c5f4478d
  lang: en
  title: LLM Powered Autonomous Agents
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-06-23-agent/
anchor: Equipping LLMs with external tools can significantly extend the model capabilities.
anchor_check: exact
quiz:
  q: Perché non basta dare a un modello l'accesso a uno strumento esterno per farlo funzionare bene?
  a: Perché il modello deve sapere quando usare lo strumento e saper estrarre gli argomenti corretti dalla richiesta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.719Z
---

# Usare strumenti esterni estende le capacità del modello

Un modello linguistico da solo non conosce informazioni recenti né sa eseguire calcoli affidabili, ma può chiamare strumenti esterni come API, calcolatrici o motori di ricerca. Il lavoro sull'uso degli strumenti mostra che è però decisivo sapere quando e come usarli, e questo dipende dalla capacità del modello di estrarre gli argomenti giusti. L'autore osserva che i problemi espressi in forma verbale sono più difficili da risolvere di quelli espressi esplicitamente, perché il modello fatica a ricavare i parametri corretti.
