---
id: bf0a61-v3-06-ignorare-i-dettagli-irrilevanti-aiuta-il
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - agenti
  - teoria-dei-giochi
source:
  id: bf0a610ccb4a
  lang: en
  title: Self-Supervised Representation Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-11-10-self-supervised/
anchor: we need to move away from reconstruction-based representation learning if we only want to learn information relevant to control
anchor_check: exact
quiz:
  q: Perché la ricostruzione dell'immagine può essere un cattivo obiettivo per imparare a controllare un agente?
  a: Perché la ricostruzione richiede di apprendere anche dettagli irrilevanti per il controllo, che non aiutano a scegliere le azioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.174Z
---

# Ignorare i dettagli irrilevanti aiuta il controllo

Un modello addestrato a ricostruire l'immagine apprende anche dettagli che non servono a decidere cosa fare. Secondo l'autore, per imparare solo ciò che è rilevante per il controllo conviene allontanarsi dalla ricostruzione e raggruppare gli stati in base alla similarità del comportamento futuro, come fa la bisimulazione. Questo principio guida metodi come DeepMDP e DBC, che apprendono uno spazio latente di ricompense e dinamiche.
