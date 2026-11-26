---
id: 79eed7-v3-01-le-prestazioni-degli-algoritmi-si-misurano
lang: it
kind: metodo
topics:
  - tecnologia
  - matematica
subtopics:
  - architettura-software
  - probabilita-statistica
source:
  id: 79eed7982051
  lang: it
  title: L'Exponential Time Hypothesis è falsa - Maddmaths!
  author: AILAxMaddMaths!
  site: maddmaths.simai.eu
  url: https://maddmaths.simai.eu/ailaxmaddmaths/lexponential-time-hypothesis-e-falsa/
anchor: Misurare le prestazioni di un algoritmo usando un cronometro non dà nessuna previsione per esecuzioni future
anchor_check: exact
quiz:
  q: Perché si misura il tempo di un algoritmo contando operazioni invece che secondi?
  a: Perché il conteggio delle operazioni in funzione della dimensione dell'input dà una previsione valida per esecuzioni future, mentre il cronometro dipende dalla macchina e dalle condizioni del momento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.260Z
---

# Le prestazioni degli algoritmi si misurano in operazioni

Il cronometro non predice le prestazioni future di un algoritmo. La teoria degli algoritmi conta invece le operazioni elementari necessarie in funzione della dimensione dell'input, e giudica di solito il caso peggiore. Per questo un algoritmo può sembrare più veloce di un altro in generale pur essendo più lento per alcuni input specifici. Il confronto tra algoritmi diventa così un confronto tra funzioni della dimensione del problema, che resta valido indipendentemente dalla macchina usata.
