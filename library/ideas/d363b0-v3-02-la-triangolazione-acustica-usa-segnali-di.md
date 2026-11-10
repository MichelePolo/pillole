---
id: d363b0-v3-02-la-triangolazione-acustica-usa-segnali-di
lang: it
kind: metodo
topics:
  - tecnologia
  - fisica
subtopics:
  - infrastrutture
  - termodinamica
source:
  id: d363b026f0d9
  lang: en
  title: Locating the source of a mysterious beep with Claude
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Nov/9/mysterious-beeps/
anchor: This chirp allows the clips to be aligned with each other, a crucial step in locating the beep.
anchor_check: exact
quiz:
  q: A cosa serve il chirp emesso da uno dei dispositivi?
  a: A allineare tra loro i clip registrati dai diversi ascoltatori, passaggio cruciale per localizzare il suono.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.486Z
---

# La triangolazione acustica usa segnali di riferimento sincronizzati

Per localizzare un suono, il sistema fa emettere a un dispositivo un breve chirp e chiede a ogni ascoltatore di caricare un clip che copre il momento del bip. Il chirp serve ad allineare tra loro le registrazioni, passaggio cruciale per stimare la posizione del suono. Il metodo deriva dal lavoro BeepBeep del 2007, che usa solo hardware comune come altoparlante e microfono per misurare distanze con alta precisione.
