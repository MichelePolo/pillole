---
id: d9a569-v3-04-il-throttling-puo-innescare-una-spirale
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: d9a569d5fe21
  lang: en
  title: The container throttling problem
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/cgroup-throttling/
anchor: causing it to use even more CPU and throttle more quickly
anchor_check: exact
quiz:
  q: Perché il throttling può trasformarsi in una spirale che peggiora progressivamente?
  a: Perché le richieste accumulate durante la pausa, al risveglio, aumentano il consumo di CPU e portano a un nuovo throttling più rapido.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.256Z
---

# Il throttling può innescare una spirale di sovraccarico

Quando un servizio sotto carico va in throttling, le richieste continuano ad arrivare, quindi al risveglio deve smaltire più lavoro di prima. Questo lo porta a consumare ancora più CPU e a rallentare di nuovo, in una spirale simile a quella della garbage collection. Secondo l'autore, questa dinamica è uno stato metastabile: basta poco carico in più per farla partire, e il bilanciamento verso altri shard può solo propagarla.
