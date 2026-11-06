---
id: 97b2c5-v3-02-il-ragionamento-e-l-azione-si
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
source:
  id: 97b2c5f4478d
  lang: en
  title: LLM Powered Autonomous Agents
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-06-23-agent/
anchor: integrates reasoning and acting within LLM
anchor_check: exact
quiz:
  q: Che cosa aggiunge il passo di ragionamento al semplice agire di un agente, secondo l'autore?
  a: Migliora le prestazioni rispetto a un agente che esegue solo azioni, perché guida la scelta delle azioni successive.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.716Z
---

# Il ragionamento e l'azione si alimentano a vicenda

Il metodo ReAct intreccia il ragionamento in linguaggio naturale con azioni concrete, come interrogare un motore di ricerca o un'API. Il ragionamento aiuta a decidere quale azione compiere, mentre l'osservazione del risultato permette di correggere il ragionamento successivo. Gli esperimenti riportati dall'autore mostrano che la versione con il passo di pensiero funziona meglio di quella che agisce soltanto. ==Pensare prima di agire rende l'agente più affidabile.==
