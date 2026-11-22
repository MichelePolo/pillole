---
id: 873010-v3-01-il-top-p-puo-scegliere-token
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 873010a9ddd2
  lang: en
  title: First Token Cutoff LLM sampling
  site: antirez.com
  url: http://antirez.com/news/142
anchor: Nucleus sampling fails at doing this because accumulating tokens up to “p”, depending on the distribution may include tokens that are extremely weaker than the first choice.
anchor_check: exact
quiz:
  q: Perché il top-p può includere token molto deboli nella scelta?
  a: Perché accumula token fino a una somma di probabilità p senza considerare quanto siano peggiori del token migliore.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.495Z
---

# Il top-p può scegliere token molto deboli

Il nucleus sampling, detto top-p, accumula i token più probabili fino a una soglia totale p e poi estrae a caso tra essi. Il problema è che questa soglia può includere token nettamente peggiori del primo, perché la somma cumulativa non tiene conto del distacco tra il migliore e gli altri. Così, con una distribuzione piatta in coda, un token con probabilità minuscola può finire tra le scelte e venire estratto con una probabilità non trascurabile. ==Il limite non sta nella soglia in sé, ma nel fatto che nessun vincolo mette un tetto alla qualità del token peggiore ammesso.== Secondo l'autore, questo rischio spinge la generazione fuori dal percorso più sensato.
