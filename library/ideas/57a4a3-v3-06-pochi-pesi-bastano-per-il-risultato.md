---
id: 57a4a3-v3-06-pochi-pesi-bastano-per-il-risultato
lang: it
kind: concetto
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
anchor: a randomly initialized, dense, feed-forward network contains a pool of subnetworks
anchor_check: exact
quiz:
  q: Perché una rete grande potrebbe essere necessaria per l'addestramento anche se la soluzione finale usa pochi pesi?
  a: Perché la rete grande offre un ampio insieme di sottoreti con inizializzazioni diverse, tra cui alcune che si addestrano bene da sole.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.258Z
---

# Pochi pesi bastano per il risultato finale

L'ipotesi del biglietto vincente sostiene che una rete densa con inizializzazione casuale contiene sottoreti che, addestrate da sole con i loro pesi iniziali, raggiungono la stessa accuratezza. Il procedimento è: addestrare, potare i pesi piccoli, poi riaddestrare la sottorete con l'inizializzazione originale. Secondo l'autore, ==la rete grande serve per l'addestramento, non per la soluzione finale==, perché offre un ampio insieme di inizializzazioni candidate.
