---
id: 028a83-v3-01-l-active-learning-sceglie-quali-dati
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 028a8389cdec
  lang: en
  title: "Learning with not Enough Data Part 2: Active Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-02-20-active-learning/
anchor: select a subset of $B$ examples from $\mathcal{U}$ to be labeled
anchor_check: exact
quiz:
  q: Perché l'active learning è utile quando l'etichettatura dei dati è costosa?
  a: Perché permette di ottenere il massimo miglioramento del modello scegliendo con cura quali pochi esempi far etichettare, entro un budget fissato.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.408Z
---

# L'active learning sceglie quali dati etichettare

Con un budget limitato di etichettatura, l'active learning cerca il sottoinsieme di esempi non etichettati che, una volta etichettati, produrrà il maggiore miglioramento del modello. L'idea è semplice: non tutti i dati valgono lo stesso sforzo umano, e scegliere bene quali etichettare rende il processo molto più efficiente. È particolarmente utile quando l'etichettatura è difficile e costosa, come nelle immagini mediche.
