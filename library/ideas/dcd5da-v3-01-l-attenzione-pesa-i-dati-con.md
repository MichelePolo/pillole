---
id: dcd5da-v3-01-l-attenzione-pesa-i-dati-con
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: dcd5da018bf2
  lang: en
  title: The Transformer Family
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/
anchor: the output is a weighted sum of the value vectors
anchor_check: exact
quiz:
  q: Come vengono pesati i valori nell'attenzione del Transformer?
  a: Il peso di ogni valore dipende dal prodotto scalare tra la query e la chiave corrispondente, e l'output è la somma pesata dei valori.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.490Z
---

# L'attenzione pesa i dati con somme ponderate apprese

Nel meccanismo di attenzione un modello impara a concentrarsi selettivamente su alcune parti di un insieme di dati. Il grado di attenzione è quantificato da pesi appresi, e così l'output è di solito una media ponderata. Nel Transformer il peso assegnato a ciascun valore dipende dal prodotto scalare tra la query e la chiave corrispondente. ==L'output è una somma pesata dei valori, con pesi decisi dalla similarità tra query e chiavi.== Questo principio di base regge tutte le varianti successive descritte nella fonte.
