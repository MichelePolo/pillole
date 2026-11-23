---
id: 18b05e-v3-06-riusare-competenze-apprese-evita-di-dimenticare
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 18b05e29ab9d
  lang: en
  title: Curriculum for Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-01-29-curriculum-rl/
anchor: to efficiently transfer learned skills between different tasks and in the meantime avoid catastrophic forgetting
anchor_check: exact
quiz:
  q: Perché le reti progressive bloccano i pesi delle colonne precedenti?
  a: Per conservare le competenze già apprese ed evitare che il nuovo compito le cancelli.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-23T10:53:54.473Z
---

# Riusare competenze apprese evita di dimenticare il passato

Le reti progressive di Rusu e colleghi affrontano un problema noto: quando si impara un compито nuovo si rischia di cancellare ciò che si sapeva già, il cosiddetto catastrophic forgetting. La soluzione proposta è aggiungere una nuova colonna di neuroni per ogni compito, bloccando i pesi di quelle precedenti e collegandole alle nuove. In questo modo le competenze vengono riusate e trasferite senza essere riscritte. La fonte nota però che molte dipendenze dalle colonne precedenti non garantiscono un buon trasferimento, perché possono introdurre bias che intrappolano la politica in soluzioni subottimali.
