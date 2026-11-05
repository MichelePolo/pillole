---
id: 0a021c-v3-02-piu-test-non-significano-test-migliori
lang: it
kind: concetto
topics:
  - tecnologia
  - filosofia
subtopics:
  - architettura-software
  - epistemologia
source:
  id: 0a021c995d76
  lang: en
  title: How well do agents use test and verification techniques?
  site: danluu.com
  url: https://danluu.com/agentic-testing/
anchor: with fixed outputs you are quite likely to just encode the output of the code and convince yourself that it makes sense
anchor_check: exact
quiz:
  q: Perché aumentare il numero di test fissi può peggiorare la verifica della correttezza?
  a: Perché i test a output fisso tendono a codificare il comportamento già prodotto dal codice, invece di verificare ciò che dovrebbe essere corretto.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.359Z
---

# Più test non significano test migliori

Quando agli agenti viene chiesto di testare di più, producono più test, ma questi tendono a verificare casi banali e a ripetere l'output del codice come risultato atteso. L'autore osserva che i test a input e output fissi spingono a codificare semplicemente ciò che il programma già fa. Secondo l'autore, generare input e controllare la correttezza dell'output obbliga invece a chiedersi che cosa significhi essere corretti. La quantità di test, da sola, non migliora la copertura dei comportamenti rischiosi.
