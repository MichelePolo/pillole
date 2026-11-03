---
id: 65396d-v2-01-trovare-bug-non-somiglia-al-proof
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - privacy-sicurezza
source:
  id: 65396d7e31ee
  lang: en
  title: AI cybersecurity is not proof of work
  site: antirez.com
  url: https://antirez.com/news/163
anchor: The proof of work is the wrong analogy
anchor_check: exact
quiz:
  q: Perché, secondo l'autore, la potenza di calcolo non basta a vincere nella ricerca di bug come nel proof of work?
  a: Perché lo spazio dei percorsi possibili nel codice si satura, quindi oltre un certo punto più tentativi non aggiungono nulla.
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T07:12:03.459Z
---

# Trovare bug non somiglia al proof of work

Nel proof of work, trovare una collisione di hash diventa esponenzialmente più difficile con l'aumentare di N, ma con abbastanza lavoro si trova sempre. Chi dispone di più risorse prima o poi vince. Secondo l'autore, la scoperta di bug funziona diversamente: le esecuzioni di un modello linguistico seguono rami diversi, ma lo spazio dei rami possibili nel codice prima o poi si satura. Oltre quel punto, aggiungere tentativi non serve più, e conta solo quanto il modello capisce davvero il problema. Per questo la potenza di calcolo da sola non decide chi trova le vulnerabilità.
