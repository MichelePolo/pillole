---
id: ae558d-v3-02-modelli-deboli-inventano-bug-quelli-forti
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: ae558da72e14
  lang: en
  title: AI cybersecurity is not proof of work
  site: antirez.com
  url: http://antirez.com/news/163
anchor: It's just pattern matching of bug classes on code that looks may have a problem
anchor_check: exact
quiz:
  q: Perché un modello debole può segnalare una vulnerabilità che in realtà non comprende?
  a: Perché riconosce per pattern classi di bug in codice sospetto, senza capire come i problemi si combinano in un exploit.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.582Z
---

# Modelli deboli inventano bug, quelli forti meno

Secondo l'autore, i modelli linguistici più piccoli, davanti a codice che sembra sospetto, riconoscono per somiglianza classi di bug senza capire come più problemi combinati producano una vulnerabilità reale. Il risultato è un allarme plausibile ma falso, che a volte cade per caso vicino al bug vero. ==Il riconoscimento di pattern non basta per trovare un exploit.== Modelli più forti allucinano meno e segnalano meno falsi bug, ma proprio per questo possono anche non vedere il problema reale. Il test proposto dall'autore è semplice: provarlo direttamente con modelli open weight economici.
