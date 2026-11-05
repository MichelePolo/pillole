---
id: 5334e7-v3-04-un-indice-numerico-come-parte-della
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 5334e7d1c1ef
  lang: en
  title: "Redis array type: short story of a long development"
  site: antirez.com
  url: http://antirez.com/news/164
anchor: the numerical index is part of the semantics
anchor_check: exact
quiz:
  q: Che cosa intende l'autore affermando che l'indice numerico dovrebbe far parte della semantica di un tipo di dato?
  a: Che l'indice numerico dovrebbe essere un elemento centrale del comportamento del tipo, non solo un dettaglio interno.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.451Z
---

# Un indice numerico come parte della semantica dei dati

L'autore sostiene che sia ormai il momento per Redis di avere un tipo di dato in cui l'indice numerico faccia parte della semantica. Nella struttura Array, gli elementi sono accessibili tramite indici numerici anche molto ampi, senza allocazioni enormi, grazie a una rappresentazione sparsa a più livelli. ==Secondo l'autore, l'indice numerico dovrebbe essere un concetto di primo livello==, e non un dettaglio di implementazione.
