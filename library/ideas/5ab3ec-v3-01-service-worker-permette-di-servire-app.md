---
id: 5ab3ec-v3-01-service-worker-permette-di-servire-app
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
anchor: These allow JavaScript to intercept HTTP requests for new pages and resources and serve them from client-side code instead.
anchor_check: exact
quiz:
  q: Perché un service worker è utile per far funzionare un'applicazione server-side nel browser?
  a: Perché intercetta le richieste HTTP di pagine e risorse e le serve con codice eseguito lato client, senza un server reale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.873Z
---

# Service worker permette di servire app Python nel browser

Il vecchio Datasette Lite funzionava simulando richieste dentro un web worker e inserendo l'HTML con innerHTML, quindi gli script non venivano eseguiti. La nuova versione usa i service worker, che intercettano le richieste HTTP di pagine e risorse e le servono dal codice lato client. ==Così l'app gira quasi come un server reale, con JavaScript e CSS funzionanti.== Il principio vale anche fuori da questo progetto: un'intercettazione delle richieste lato browser può sostituire un server.
