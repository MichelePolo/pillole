---
id: 0ee0b8-v3-01-gli-embedding-possono-contenere-quasi-tutto
lang: it
kind: dato
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - privacy-sicurezza
source:
  id: 0ee0b8f51ebf
  lang: en
  title: Do text embeddings perfectly encode text?
  author: Jack Morris
  site: The Gradient
  url: https://thegradient.pub/text-embedding-inversion/
anchor: the text embedding vector contains a fixed number of bits
anchor_check: exact
quiz:
  q: Perché un database di embedding non è al sicuro solo perché contiene numeri invece di testo?
  a: Perché dai vettori si può risalire, con metodi come vec2text, al testo originale quasi integralmente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.812Z
---

# Gli embedding possono contenere quasi tutto il testo originale

Un embedding è un vettore numerico prodotto da un modello neurale per rappresentare un testo. Si pensava che fosse una forma compressa e sicura, ma l'autore mostra che il testo può essere ricostruito quasi perfettamente a partire dal vettore. ==Un embedding non è quindi una protezione automatica dei dati==, e chi conserva vettori dovrebbe considerarli informazione sensibile come il testo stesso.
