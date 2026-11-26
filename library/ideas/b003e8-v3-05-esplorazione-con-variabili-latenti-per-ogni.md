---
id: b003e8-v3-05-esplorazione-con-variabili-latenti-per-ogni
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
source:
  id: b003e8b2488e
  lang: en
  title: Meta Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-06-23-meta-rl/
anchor: Simply adding random noise on actions cannot capture task-dependent or time-correlated exploration strategies.
anchor_check: exact
quiz:
  q: Che vantaggio ha una variabile latente per compito rispetto al semplice rumore sulle azioni?
  a: Permette di esplorare in modo dipendente dal compito e correlato nel tempo, cosa che il rumore casuale sulle azioni non può ottenere.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.226Z
---

# Esplorazione con variabili latenti per ogni compito

Invece di aggiungere rumore casuale alle azioni, MAESN condiziona la politica a una variabile latente campionata una volta per episodio. Questa variabile determina un tipo di comportamento da esplorare all'inizio dell'episodio, e l'agente adatta le sue azioni di conseguenza. Il metodo permette un'esplorazione dipendente dal compito e correlata nel tempo, che il rumore semplice non riesce a catturare. L'idea è più ricca del semplice caso a caso.
