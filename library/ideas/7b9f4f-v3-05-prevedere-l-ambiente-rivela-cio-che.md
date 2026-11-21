---
id: 7b9f4f-v3-05-prevedere-l-ambiente-rivela-cio-che
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: 7b9f4f54765d
  lang: en
  title: Exploration Strategies in Deep Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-06-07-exploration-drl/
anchor: The higher the prediction error, the less familiar we are with that state.
anchor_check: exact
quiz:
  q: Cosa indica un alto errore di previsione di un modello dinamico?
  a: Che lo stato è poco familiare all'agente, quindi può generare un bonus di esplorazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.930Z
---

# Prevedere l'ambiente rivela ciò che non si conosce

Se un modello prevede le conseguenze delle proprie azioni, l'errore di previsione indica quanto lo stato sia familiare: più l'errore è alto, meno l'agente conosce quella situazione. Quando l'errore cala rapidamente, l'agente sta imparando e può essere premiato per questo progresso. Secondo gli autori, la previsione va fatta in uno spazio di caratteristiche che escluda ciò che l'agente non può controllare, così da non premiare il rumore.
