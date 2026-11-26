---
id: 878201-v3-02-cercare-soluzioni-campionando-e-selezionando-i
lang: it
kind: metodo
topics:
  - ai
  - biologia
subtopics:
  - agenti
  - evoluzione
source:
  id: "878201399682"
  lang: en
  title: Evolution Strategies
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-09-05-evolution-strategies/
anchor: Select the best subset of individuals and use them to update
anchor_check: exact
quiz:
  q: Come fa una strategia evolutiva a migliorare le sue soluzioni nel tempo?
  a: Campiona candidati da una distribuzione, seleziona i migliori e aggiorna i parametri della distribuzione verso di essi, ripetendo il ciclo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.907Z
---

# Cercare soluzioni campionando e selezionando i migliori

Le strategie evolutive partono da una distribuzione di probabilità sulle possibili soluzioni, di solito gaussiana, controllata da alcuni parametri. Ad ogni generazione si campionano molti candidati, si valutano e si tengono i migliori, poi i parametri della distribuzione vengono aggiornati in base a quelli selezionati. Ripetendo il ciclo, la distribuzione si concentra progressivamente su regioni di soluzioni migliori, senza bisogno di calcolare gradienti.
