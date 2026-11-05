---
id: 246289-v3-02-il-calcolo-va-diviso-tra-modello
lang: it
kind: concetto
topics:
  - ai
  - economia
subtopics:
  - modelli-linguistici
  - macroeconomia
source:
  id: 2462892d260e
  lang: en
  title: Scaling Laws, Carefully
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-06-24-scaling-laws/
anchor: how to allocate precious compute optimally between $N$ and $D$
anchor_check: exact
quiz:
  q: Qual è la domanda centrale quando si ha un budget di calcolo fisso per addestrare un modello linguistico?
  a: Come ripartire il calcolo tra più parametri del modello e più token di dati di addestramento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.472Z
---

# Il calcolo va diviso tra modello e dati

Secondo l'autore, il cuore delle leggi di scala è decidere come distribuire un budget di calcolo fisso tra numero di parametri e numero di token di addestramento. La scelta non è banale, perché aumentare solo una delle due quantità porta a risultati meno efficienti. Il problema si riduce quindi a un'allocazione ottimale di risorse limitate tra due variabili che si bilanciano a vicenda.
