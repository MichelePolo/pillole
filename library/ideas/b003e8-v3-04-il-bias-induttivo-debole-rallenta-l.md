---
id: b003e8-v3-04-il-bias-induttivo-debole-rallenta-l
lang: it
kind: concetto
topics:
  - ai
  - filosofia
subtopics:
  - agenti
  - epistemologia
source:
  id: b003e8b2488e
  lang: en
  title: Meta Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-06-23-meta-rl/
anchor: one source of slowness in RL training is weak inductive bias
anchor_check: exact
quiz:
  q: Perché un bias induttivo più forte può accelerare l'apprendimento?
  a: Perché restringe il numero di ipotesi plausibili, rendendo l'apprendimento più efficiente in termini di campioni, a costo di una gamma di casi più ristretta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.226Z
---

# Il bias induttivo debole rallenta l'apprendimento per rinforzo

Secondo Botvinick e colleghi, una delle cause della lentezza dell'addestramento per rinforzo è il bias induttivo debole, cioè l'insieme di assunzioni che un sistema usa per prevedere output da input non ancora visti. Un algoritmo con bias debole sa coprire una gamma più ampia di casi, ma di solito è meno efficiente nell'uso dei campioni. Restringere le ipotesi possibili con bias più forti può accelerare l'apprendimento.
