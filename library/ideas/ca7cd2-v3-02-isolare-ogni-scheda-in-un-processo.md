---
id: ca7cd2-v3-02-isolare-ogni-scheda-in-un-processo
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - privacy-sicurezza
  - architettura-software
source:
  id: ca7cd22c6e9c
  lang: en
  title: Ladybird’s first alpha release
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Nov/23/ladybird/
anchor: Ladybird runs different tabs in different processes, an isolation mechanism used by most browsers
anchor_check: exact
quiz:
  q: Qual è il vantaggio principale di eseguire ogni scheda in un processo separato?
  a: Il danno da una pagina malevola o instabile resta confinato al suo processo, senza compromettere l'intero browser.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.346Z
---

# Isolare ogni scheda in un processo separato aumenta la sicurezza

Ladybird esegue ogni scheda in un processo diverso, un meccanismo di isolamento usato dalla maggior parte dei browser. Se una pagina è malevola o si blocca, il danno resta confinato al suo processo e non compromette l'intero programma. Il costo è un consumo di memoria più alto, perché ogni processo porta con sé il proprio carico aggiuntivo. È un compromesso tra sicurezza, stabilità e risorse che caratterizza l'architettura moderna dei browser.
