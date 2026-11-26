---
id: d9a569-v3-05-il-dimensionamento-dei-servizi-nasconde-sprechi
lang: it
kind: dato
topics:
  - tecnologia
  - economia
subtopics:
  - infrastrutture
  - storia-economica
source:
  id: d9a569d5fe21
  lang: en
  title: The container throttling problem
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/cgroup-throttling/
anchor: most CPU bound services start falling over at around 50% reserved container CPU utilization
anchor_check: exact
quiz:
  q: Perché un servizio con utilizzo medio basso può richiedere molte più risorse del necessario?
  a: Perché i picchi di parallelismo causano throttling, e per evitarlo i team sovradimensionano la CPU invece di usare la capacità disponibile.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.257Z
---

# Il dimensionamento dei servizi nasconde sprechi nascosti

Secondo l'autore, quando i servizi falliscono già al 50% della CPU riservata, i team devono chiedere più core o più shard per rispettare gli obiettivi di servizio. Il risultato è che l'utilizzo medio resta basso anche durante i picchi, perché la capacità disponibile è occupata da margini che servono solo a evitare il throttling. Questo rende i costi molto più alti di quanto il carico reale richiederebbe.
