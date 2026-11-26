---
id: 878201-v3-03-la-matrice-di-covarianza-adatta-l
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - probabilita-statistica
  - altro
source:
  id: "878201399682"
  lang: en
  title: Evolution Strategies
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-09-05-evolution-strategies/
anchor: tracking pairwise dependencies between the samples in the distribution with a covariance matrix
anchor_check: exact
quiz:
  q: Quale vantaggio offre CMA-ES rispetto alle strategie evolutive semplici?
  a: Adatta l'esplorazione tenendo conto delle dipendenze tra variabili tramite una matrice di covarianza, regolando anche la dimensione del passo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.908Z
---

# La matrice di covarianza adatta l'esplorazione alla forma del problema

Nelle strategie evolutive semplici la deviazione standard cambia lentamente e l'algoritmo fatica ad adattare rapidamente l'ampiezza della ricerca. Il metodo CMA-ES risolve il problema tenendo traccia delle dipendenze tra le variabili con una matrice di covarianza, che permette di esplorare con ampiezze diverse nelle diverse direzioni. Anche la dimensione del passo viene regolata osservando se i passi successivi sono correlati tra loro.
