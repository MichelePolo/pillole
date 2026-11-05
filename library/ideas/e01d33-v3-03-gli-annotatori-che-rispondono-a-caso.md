---
id: e01d33-v3-03-gli-annotatori-che-rispondono-a-caso
lang: it
kind: metodo
topics:
  - ai
  - economia
subtopics:
  - ai-e-lavoro
  - teoria-dei-giochi
source:
  id: e01d339bfba6
  lang: en
  title: Thinking about High-Quality Human Data
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-02-05-human-data-quality/
anchor: some annotators may behave as “spammers” to optimize the volume of tasks completed for higher pay
anchor_check: exact
quiz:
  q: Come si può ridurre l'influenza degli annotatori che rispondono a caso?
  a: Assegnando meno peso alle loro risposte, in base al loro accordo con esperti o con gli altri annotatori.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.784Z
---

# Gli annotatori che rispondono a caso vanno individuati

Quando la paga dipende dal numero di compiti completati, alcuni annotatori producono risposte casuali per guadagnare di più. Per contrastarli si possono pesare i contributi in base all'accordo con un insieme di esempi verificati da esperti, oppure in base all'accordo con il resto dei partecipanti. Il modello MACE stima la probabilità che ciascun annotatore stia facendo lo spam, cioè risponda a caso.
