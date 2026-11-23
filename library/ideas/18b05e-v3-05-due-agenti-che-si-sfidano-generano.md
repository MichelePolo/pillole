---
id: 18b05e-v3-05-due-agenti-che-si-sfidano-generano
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
source:
  id: 18b05e29ab9d
  lang: en
  title: Curriculum for Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-01-29-curriculum-rl/
anchor: Alice challenges Bob to achieve the same state and Bob attempts to complete it as fast as he can
anchor_check: exact
quiz:
  q: Perché in questo metodo il compito proposto da Alice è sempre risolvibile?
  a: Perché Alice ha già eseguito il compito prima di proporlo a Bob, quindi sa che è possibile raggiungerlo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-23T10:53:54.472Z
---

# Due agenti che si sfidano generano compiti sempre più impegnativi

Nel self-play asimmetrico descritto da Sukhbaatar e colleghi, un agente, Alice, propone a Bob uno stato da raggiungere, e Bob deve riportare l'ambiente allo stato iniziale il più in fretta possibile. Alice è premiata quando Bob impiega più tempo, ma non quando il compito diventa impossibile, perché prima lo risolve lei stessa. Così l'interazione tra i due costruisce automaticamente una serie di compiti crescenti, sempre risolvibili. Il metodo funziona solo in ambienti reversibili o ripristinabili, condizione importante da ricordare quando si valuta se applicarlo.
