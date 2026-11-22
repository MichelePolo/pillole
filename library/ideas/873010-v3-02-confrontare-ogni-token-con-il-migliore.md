---
id: 873010-v3-02-confrontare-ogni-token-con-il-migliore
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
source:
  id: 873010a9ddd2
  lang: en
  title: First Token Cutoff LLM sampling
  site: antirez.com
  url: http://antirez.com/news/142
anchor: the algorithm refuses every token that is worse than a given percentage if compared to T0
anchor_check: exact
quiz:
  q: Come viene misurato, nel First Token Cutoff, quanto un token è peggiore del migliore?
  a: Con la formula 1 meno la probabilità del token diviso per la probabilità del token migliore T0, e lo si accetta solo se non supera la soglia co.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.496Z
---

# Confrontare ogni token con il migliore

Il First Token Cutoff propone di fissare una soglia relativa al token più probabile T0. Per ogni altro token si calcola quanto è peggiore di T0 come rapporto, cioè 1 meno la probabilità del token diviso per quella di T0. Solo i token con questo scarto entro un valore fissato, chiamato co, entrano nell'insieme da cui si estrae a caso. In questo modo esiste un limite rigido e comprensibile al peggior token ammesso, indipendentemente dalla forma della distribuzione. Secondo l'autore, questa semplicità rende il parametro intuitivo da usare.
