---
id: be7b76-v3-05-le-correzioni-incomplete-tornano-a-far
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: be7b76e71de8
  lang: en
  title: A decade of major cache incidents at Twitter
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/cache-incidents/
anchor: how frequently a major incident occured due to an incompletely applied fix for an earlier incident
anchor_check: exact
quiz:
  q: Che cosa mostra, secondo gli autori, l'esempio della correzione del kernel mai diffusa?
  a: Che un ticket chiuso come risolto non elimina il rischio se la correzione non viene applicata a tutti i sistemi interessati.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.284Z
---

# Le correzioni incomplete tornano a far danni

Secondo gli autori, molti grandi incidenti derivano da una correzione applicata solo in parte a un problema precedente, o da un problema già segnalato come serio ma mai dato priorità. Nel caso della cache, una correzione del kernel per i pacchetti persi era stata chiusa come risolta, ma non fu mai diffusa su tutti i cluster, e il problema riapparve mesi dopo. Il punto è che chiudere un ticket non equivale a eliminare un rischio, e va verificato che la soluzione sia davvero arrivata ovunque.
