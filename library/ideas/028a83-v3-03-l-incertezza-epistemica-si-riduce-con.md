---
id: 028a83-v3-03-l-incertezza-epistemica-si-riduce-con
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - probabilita-statistica
source:
  id: 028a8389cdec
  lang: en
  title: "Learning with not Enough Data Part 2: Active Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-02-20-active-learning/
anchor: This type of uncertainty is theoretically reducible given more data
anchor_check: exact
quiz:
  q: Perché l'incertezza epistemica interessa più di quella aleatoria quando si scelgono dati da etichettare?
  a: Perché l'incertezza epistemica è in linea di principio riducibile con più dati, mentre quella aleatoria, legata al rumore, è considerata irriducibile.
warnings:
  - corpo di 58 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.409Z
---

# L'incertezza epistemica si riduce con più dati

Secondo la distinzione proposta in letteratura, l'incertezza aleatoria nasce dal rumore nei dati ed è considerata irriducibile, mentre l'incertezza epistemica riguarda i parametri del modello e, in linea di principio, può diminuire fornendo più dati. Questa distinzione è utile perché indica quali esempi valga la pena etichettare: quelli che riducono l'incertezza del modello, non quelli dominati dal rumore.
