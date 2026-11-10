---
id: 5a1ed2-v3-03-piu-fork-possono-coesistere-per-scelta
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 5a1ed213c3c6
  lang: en
  title: What I learned during the license switch
  site: antirez.com
  url: http://antirez.com/news/152
anchor: if you need to do vector similarity searches, you need to use Redis
anchor_check: exact
quiz:
  q: Perché un'azienda potrebbe dover scegliere Valkey invece di Redis?
  a: Perché potrebbe avere una politica aziendale che vieta la AGPL, che Redis usa nelle versioni recenti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.455Z
---

# Più fork possono coesistere per scelta degli utenti

Redis e Valkey si sono già separati in modo significativo e, secondo l'autore, continueranno a divergere. Le distribuzioni dovrebbero offrire entrambi, perché a volte la scelta tra i due è imposta dalle differenze di funzionalità. Chi deve fare ricerche di similarità vettoriale ha bisogno di Redis, mentre un'azienda con una politica contraria alla AGPL dovrà usare Valkey. Il criterio della scelta non è quindi ideologico ma pratico: dipende da ciò che serve davvero. ==Più fork vitali permettono agli utenti di scegliere lo strumento adatto al proprio caso.==
