---
id: 3b5ce8-v3-03-due-dispositivi-vicini-si-parlano-con
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 3b5ce86c8c40
  lang: en
  title: Battle Drones—a vibe coded RTS with audio-based multiplayer
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Oct/20/battledrones/
anchor: Audio-based multiplayer between static HTML games works!
anchor_check: exact
quiz:
  q: Qual è il vantaggio principale di usare il suono per collegare due dispositivi in un gioco web?
  a: Non richiede un server da mantenere, quindi la pagina statica può funzionare senza costi di esercizio.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.459Z
---

# Due dispositivi vicini si parlano con il suono

Due dispositivi vicini possono scambiarsi dati senza un server usando microfono e altoparlante. L'informazione viene codificata in suoni, trasmessa da un dispositivo e ricevuta dall'altro, come un modem acustico. Il vantaggio è che una pagina statica, senza backend da mantenere, può gestire un multiplayer locale a costo zero. Il limite è pratico: il collegamento funziona solo entro la portata del microfono e i toni acuti possono risultare fastidiosi, come mostrano i mal di testa segnalati dai giocatori. Per questo l'autore ha poi aggiunto un server relay leggero per il gioco online.
