---
id: 18b05e-v3-03-lo-studente-migliora-se-il-compito
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - apprendimento-memoria
source:
  id: 18b05e29ab9d
  lang: en
  title: Curriculum for Reinforcement Learning
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-01-29-curriculum-rl/
anchor: focus on "interesting" examples that are neither too hard or too easy
anchor_check: exact
quiz:
  q: Qual è la zona di difficoltà che, secondo l'ipotesi di Bengio, rende più efficace l'apprendimento?
  a: Esempi interessanti, né troppo facili né troppo difficili.
warnings:
  - titolo di 13 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-23T10:53:54.470Z
---

# Lo studente migliora se il compito è né troppo facile né troppo difficile

Bengio e colleghi nel 2009 ipotizzarono che l'apprendimento sia più efficace quando si concentra su esempi interessanti, cioè né troppo difficili né troppo facili. Il principio è intuitivo: un compito banale non insegna nulla di nuovo, mentre uno impossibile non offre appigli a cui aggiungere conoscenza. Nelle strategie automatiche più recenti questa idea torna sotto forma di misure del progresso di apprendimento, che privilegiano i compiti su cui il modello sta migliorando in questo momento. È un'ipotesi che guida molti metodi, ma resta un'intuizione da verificare caso per caso.
