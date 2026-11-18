---
id: 5ab3ec-v3-04-python-puo-girare-nel-browser-per
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 5ab3ec093f2b
  lang: en
  title: Running the full server-side Datasette Python app in the browser with service workers and Pyodide
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Nov/17/datasette-lite/
anchor: Almost any Python application should be able to pull the same trick
anchor_check: exact
quiz:
  q: Quale limite principale viene indicato per le app Python eseguite nel browser?
  a: "I database: SQLite funziona bene, mentre PostgreSQL e MySQL in WebAssembly sono ancora poco praticati."
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.875Z
---

# Python può girare nel browser per creare anteprime

Secondo l'autore, quasi qualsiasi applicazione Python può funzionare nel browser tramite WebAssembly e Pyodide. Questo offre un modo economico per creare ambienti di anteprima, mostrare funzionalità e riprodurre bug, senza avviare un server. Le estensioni scritte in C o Rust, che prima bloccavano questa strada, possono oggi essere compilate per Pyodide. Il limite principale resta i database: SQLite funziona senza problemi, mentre PostgreSQL o MySQL in WebAssembly sono ancora un percorso poco battuto.
