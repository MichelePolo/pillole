---
id: 57a4a3-v3-05-non-tutti-gli-strati-di-una
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 57a4a31db8fe
  lang: en
  title: Are Deep Neural Networks Dramatically Overfitted?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-03-14-overfit/
anchor: "Are all layers created equal? The short answer is: No."
anchor_check: near
quiz:
  q: Quali strati di una rete tendono a essere critici quando li si reinizializza?
  a: Soprattutto i primi strati, quelli più vicini all'ingresso, mentre reinizializzare gli strati superiori causa solo un calo trascurabile.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.258Z
---

# Non tutti gli strati di una rete contano allo stesso modo

Reinizializzare o ri-randomizzare un singolo strato mostra quanto ciascuno sia critico. Ri-randomizzare qualunque strato distrugge le prestazioni, mentre reinizializzare riporta al valore iniziale solo i primi strati, vicini all'ingresso, come critici; gli strati superiori contano poco. Nelle reti residuali le connessioni di scorciatoia distribuiscono questa sensibilità lungo la rete. ==Gli strati non sono tutti uguali==, e questo suggerisce che le reti sovra-capacitate si limitano da sole a pochi strati critici.
