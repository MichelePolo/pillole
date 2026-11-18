---
id: 5ab3ec-v3-03-un-prefisso-di-sessione-isola-le
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 5ab3ec093f2b
  lang: en
  title: Running the full server-side Datasette Python app in the browser with service workers and Pyodide
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Nov/17/datasette-lite/
anchor: the parent page generates a random session ID and uses it as a prefix for all of the subsequent hidden asset and page loads.
anchor_check: exact
quiz:
  q: A cosa serve il prefisso di sessione negli URL di Datasette Lite?
  a: A instradare le richieste di ogni scheda verso un'istanza Datasette dedicata, evitando che le schede condividano stato.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.874Z
---

# Un prefisso di sessione isola le istanze tra schede

Il service worker è condiviso tra tutte le schede dello stesso dominio, quindi un'unica istanza avrebbe fatto condividere a tutte le schede plugin e impostazioni. Secondo l'autore, la pagina padre genera un identificativo di sessione casuale e lo usa come prefisso di tutte le richieste successive. Il service worker può così instradare ogni richiesta verso il worker corretto. È un modo semplice per isolare stati diversi che passano attraverso un componente condiviso.
