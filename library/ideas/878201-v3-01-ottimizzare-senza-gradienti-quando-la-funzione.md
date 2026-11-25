---
id: 878201-v3-01-ottimizzare-senza-gradienti-quando-la-funzione
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - altro
source:
  id: "878201399682"
  lang: en
  title: Evolution Strategies
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-09-05-evolution-strategies/
anchor: With black-box optimization algorithms, you can evaluate a target function
anchor_check: exact
quiz:
  q: Perché in certi problemi non si può usare la discesa del gradiente?
  a: Perché la funzione obiettivo non è nota in forma analitica, quindi il gradiente non può essere calcolato; si valuta solo la funzione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.907Z
---

# Ottimizzare senza gradienti quando la funzione è opaca

Esistono problemi in cui si può valutare una funzione obiettivo senza conoscerne la forma analitica, e quindi senza poterne calcolare il gradiente. Per questi casi si usano algoritmi di ottimizzazione "black-box", che lavorano solo sui valori ottenuti dalle valutazioni. La discesa stocastica del gradiente resta la scelta predefinita nel deep learning, ma non è l'unica: quando il gradiente non è disponibile, questi metodi diventano l'alternativa naturale e spesso l'unica praticabile.
