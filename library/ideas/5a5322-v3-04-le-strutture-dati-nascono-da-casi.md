---
id: 5a5322-v3-04-le-strutture-dati-nascono-da-casi
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 5a5322fb32a7
  lang: en
  title: From where I left
  site: antirez.com
  url: http://antirez.com/news/144
anchor: "the fitness of new features into Redis was about two things: use cases and internal design fit"
anchor_check: exact
quiz:
  q: Quali due criteri usava l'autore per decidere se inserire una nuova funzionalità in Redis?
  a: L'aderenza a casi d'uso reali e la coerenza con il design interno del sistema.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.146Z
---

# Le strutture dati nascono da casi d'uso e coerenza interna

Secondo l'autore, il criterio con cui ha deciso quali funzionalità inserire in Redis non era la popolarità o la moda, ma due aspetti: quanto la funzione risponde a casi d'uso reali e quanto si integra con il design interno. Per questo ha rifiutato alcune idee apparentemente adatte e ne ha accettate altre che sembravano fuori contesto, come gli script Lua e i sorted set. ==Redis è, nelle sue parole, un insieme di mattoncini per programmatori, non un prodotto chiuso.==
