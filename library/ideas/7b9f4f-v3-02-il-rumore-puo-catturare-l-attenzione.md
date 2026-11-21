---
id: 7b9f4f-v3-02-il-rumore-puo-catturare-l-attenzione
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - agenti
source:
  id: 7b9f4f54765d
  lang: en
  title: Exploration Strategies in Deep Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-06-07-exploration-drl/
anchor: a TV with uncontrollable & unpredictable random noise outputs would be able to attract the agent's attention forever
anchor_check: exact
quiz:
  q: Perché un agente premiato per la novità può restare bloccato davanti a un rumore casuale?
  a: Perché ogni output imprevedibile gli fornisce una nuova ricompensa, senza che l'agente faccia reali progressi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.928Z
---

# Il rumore può catturare l'attenzione di un agente curioso

Un agente premiato per la novità può essere attratto da una fonte di rumore imprevedibile, come un televisore che trasmette solo interferenze. Ogni nuovo output produce una ricompensa, quindi l'agente resta fermo a guardarlo senza fare reali progressi. Il problema, noto come Noisy-TV, mostra che misurare la curiosità con la sola sorpresa non basta: serve distinguere ciò che l'agente può davvero imparare da ciò che è semplicemente imprevedibile.
