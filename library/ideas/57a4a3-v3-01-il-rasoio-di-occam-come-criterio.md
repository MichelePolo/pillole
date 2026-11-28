---
id: 57a4a3-v3-01-il-rasoio-di-occam-come-criterio
lang: it
kind: concetto
topics:
  - filosofia
  - ai
subtopics:
  - epistemologia
  - modelli-linguistici
source:
  id: 57a4a31db8fe
  lang: en
  title: Are Deep Neural Networks Dramatically Overfitted?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-03-14-overfit/
anchor: Comprehension is compression.
anchor_check: exact
quiz:
  q: Perché secondo il principio MDL un modello che memorizza l'intero training set non è considerato una buona soluzione?
  a: Perché la descrizione del modello, sommata a quella dei dati, diventa enorme, e un modello semplice che coglie le regolarità è preferibile.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.256Z
---

# Il rasoio di Occam come criterio di generalizzazione

Il principio del rasoio di Occam, formalizzato nella lunghezza di descrizione minima (MDL), tratta l'apprendimento come compressione dei dati: un buon modello scopre regolarità che si estendono a dati mai visti. Un modello che memorizza tutto il training set ottiene errore zero ma viene penalizzato, perché la descrizione del modello stesso conta. ==Imparare significa comprimere==, e i modelli possono essere sbagliati ma restare utili, come accade con le distribuzioni a priori bayesiane.
