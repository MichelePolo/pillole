---
id: 18b05e-v3-02-il-docente-automatico-puo-essere-un
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
anchor: uniformly sampling from all tasks is a surprisingly strong benchmark
anchor_check: exact
quiz:
  q: Perché campionare uniformemente i compiti è un riferimento importante nei metodi con insegnante automatico?
  a: Perché in alcuni studi scegliere i compiti in modo uniforme risulta sorprendentemente difficile da battere, quindi qualunque strategia più sofisticata deve dimostrare di fare meglio di questo semplice riferimento.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-23T10:53:54.468Z
---

# Il docente automatico può essere un altro agente che sceglie i compiti

Un'idea ricorrente è affidare la costruzione del curriculum a un secondo agente, un insegnante che seleziona i sotto-compiti per lo studente. Nel framework teacher-student descritto nella fonte, lo studente cerca di padroneggiare un compito difficile, mentre l'insegnante sceglie i compiti più utili, cioè quelli con il progresso di apprendimento più rapido o quelli a rischio di essere dimenticati. Il problema dell'insegnante viene formulato come un problema di apprendimento per rinforzo su uno spazio di compiti, non sull'architettura del modello. Sorprendentemente, in alcuni lavori campionare uniformemente tra tutti i compiti resta un riferimento molto competitivo.
