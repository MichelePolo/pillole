---
id: 659fc1-v3-03-nel-calcolo-distribuito-conta-la-quantita
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 659fc1318f48
  lang: en
  title: Distributing LLM inference in DwarfStar
  site: antirez.com
  url: http://antirez.com/news/167
anchor: The magic about the above two models is that you have to send very little data.
anchor_check: exact
quiz:
  q: Perché il parallelismo tensoriale è difficile da usare tra due computer collegati in rete?
  a: Richiede di scambiare molti dati tra le macchine a ogni passo, e la comunicazione tra computer è troppo lenta rispetto ai collegamenti interni alle GPU.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T00:05:05.569Z
---

# Nel calcolo distribuito conta la quantità di dati scambiati

Quando un calcolo viene diviso tra più macchine, il costo decisivo è spesso la comunicazione tra di esse. Secondo l'autore, il parallelismo tensoriale non è praticabile tra due computer collegati in rete, perché richiede di scambiare grandi quantità di dati e i collegamenti tra macchine sono molto più lenti di quelli interni a una GPU, come NVLink. ==Le strategie che funzionano sono quelle che inviano pochissimi dati==, come lo scambio di attivazioni tra layer o di piccoli risultati intermedi. Questo principio vale anche oltre l'intelligenza artificiale, ogni volta che si distribuisce un calcolo.
