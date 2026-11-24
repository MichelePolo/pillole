---
id: 79eed7-v3-03-il-problema-3-sat-cerca-un
lang: it
kind: concetto
topics:
  - matematica
  - tecnologia
subtopics:
  - logica-fondamenti
  - architettura-software
source:
  id: 79eed7982051
  lang: it
  title: L'Exponential Time Hypothesis è falsa - Maddmaths!
  author: AILAxMaddMaths!
  site: maddmaths.simai.eu
  url: https://maddmaths.simai.eu/ailaxmaddmaths/lexponential-time-hypothesis-e-falsa/
anchor: Il problema 3-SAT consiste nel decidere se, data una 3-CNF, questa ha un assegnamento che la renda vera
anchor_check: near
quiz:
  q: Che cosa rende un problema come 3-SAT difficile da risolvere ma facile da verificare?
  a: Trovare un assegnamento soddisfacente richiede in apparenza una ricerca estesa, mentre controllare un assegnamento proposto basta verificare i vincoli uno per uno.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.262Z
---

# Il problema 3-SAT cerca un assegnamento di verità

Data una formula logica in forma normale congiuntiva con al più tre letterali per clausola, il problema chiede se esista un assegnamento di vero e falso alle variabili che la renda vera. È un problema di tipo puzzle: è difficile trovare la soluzione, ma è facile verificare che una proposta soddisfi i vincoli. Questa combinazione di difficoltà nel cercare e facilità nel controllare è ciò che definisce la classe NP, e rende 3-SAT un rappresentante centrale di molti problemi.
