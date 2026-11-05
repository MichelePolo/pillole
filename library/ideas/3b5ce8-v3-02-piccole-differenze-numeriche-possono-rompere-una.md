---
id: 3b5ce8-v3-02-piccole-differenze-numeriche-possono-rompere-una
lang: it
kind: storia
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 3b5ce86c8c40
  lang: en
  title: Battle Drones—a vibe coded RTS with audio-based multiplayer
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Oct/20/battledrones/
anchor: different browsers (Chrome vs. Safari, for example) returned very slightly different numbers
anchor_check: exact
quiz:
  q: Perché le funzioni seno e coseno del browser possono creare problemi in un gioco con replay?
  a: Perché browser diversi possono restituire valori leggermente diversi, facendo divergere la simulazione dal replay originale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.459Z
---

# Piccole differenze numeriche possono rompere una simulazione

Nello sviluppo di Battle Drones il replay doveva riprodurre le partite in modo identico su browser diversi. Il problema è emerso tra Chrome e Safari: le funzioni matematiche seno e coseno restituivano risultati leggermente diversi, quanto bastava a far divergere il replay dalla partita originale. La soluzione è stata sostituire quelle funzioni con implementazioni proprie, uguali su ogni piattaforma. Questo episodio mostra come piccole differenze numeriche, irrilevanti in una pagina statica, diventino critiche appena una simulazione deve riprodursi esattamente.
