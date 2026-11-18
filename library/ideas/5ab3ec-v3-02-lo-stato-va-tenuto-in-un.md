---
id: 5ab3ec-v3-02-lo-stato-va-tenuto-in-un
lang: it
kind: concetto
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
anchor: Pyodide in a service worker would not be able to maintain state beyond around 30 seconds, depending on the browser.
anchor_check: exact
quiz:
  q: Perché l'istanza di Datasette non può stare direttamente nel service worker?
  a: Perché Pyodide in un service worker non può mantenere lo stato oltre una trentina di secondi, quindi serve un web worker dedicato.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.874Z
---

# Lo stato va tenuto in un web worker, non nel service worker

Un service worker non può mantenere lo stato di Pyodide oltre una trentina di secondi, a seconda del browser. Per questo l'autore fa girare ogni istanza di Datasette in un web worker dedicato, e il service worker gli inoltra le richieste tramite la pagina padre. Il vincolo nasce dal modo in cui il browser gestisce il ciclo di vita dei service worker: i processi di lunga durata richiedono un'altra collocazione. Dividere le responsabilità tra componenti con cicli di vita diversi è un'idea più generale.
