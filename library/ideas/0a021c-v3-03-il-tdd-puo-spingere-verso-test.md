---
id: 0a021c-v3-03-il-tdd-puo-spingere-verso-test
lang: it
kind: concetto
topics:
  - tecnologia
  - psicologia
subtopics:
  - architettura-software
  - bias-cognitivi
source:
  id: 0a021c995d76
  lang: en
  title: How well do agents use test and verification techniques?
  site: danluu.com
  url: https://danluu.com/agentic-testing/
anchor: tdd steers you towards black box testing which for complicated machinery seems to me to be less effective than white box testing
anchor_check: exact
quiz:
  q: Secondo l'ipotesi riportata, perché scrivere i test prima del codice può rendere i test meno efficaci sui casi difficili?
  a: Perché prima di scrivere il codice non si conoscono ancora i punti difficili, e il test diventa una verifica a scatola nera meno efficace di quella a scatola bianca.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.361Z
---

# Il TDD può spingere verso test più deboli

Nell'esperimento, le istruzioni a usare il test-driven development hanno prodotto più test, ma meno efficaci nei casi difficili, come il caso dei quattro flussi Huffman. Una possibile spiegazione, riportata dall'autore come ipotesi di altri, è che scrivere i test prima del codice renda difficile prevedere i casi complessi. Il test diventa così una verifica a scatola nera, meno efficace di quella a scatola bianca su un macchinario complicato. L'autore ammette che la spiegazione resta incerta.
