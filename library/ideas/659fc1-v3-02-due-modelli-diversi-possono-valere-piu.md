---
id: 659fc1-v3-02-due-modelli-diversi-possono-valere-piu
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 659fc1318f48
  lang: en
  title: Distributing LLM inference in DwarfStar
  site: antirez.com
  url: http://antirez.com/news/167
anchor: you can pick the continuation where the perplexity is lower
anchor_check: exact
quiz:
  q: Come può un ensemble di due modelli scegliere quale risposta usare senza combinarne i pesi?
  a: Sceglie la continuazione con perplessità più bassa, cioè quella generata dal modello più sicuro di sé.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T00:05:05.568Z
---

# Due modelli diversi possono valere più di uno solo

Un ensemble di modelli linguistici può far lavorare due modelli su due macchine separate, senza condividere nulla, e combinarne i risultati solo alla fine. Un metodo semplice è scegliere la continuazione con perplessità più bassa, cioè quella del modello più sicuro di sé, come se fosse un mixture of experts con instradamento implicito. Il metodo funziona anche quando i due modelli hanno vocabolari diversi, e si possono combinare anche i logit prima del campionamento. Secondo l'autore, le risposte migliorano perché ciascun modello porta il proprio punto di vista su cosa dire dopo, anche se questo resta da verificare su casi più ampi.
