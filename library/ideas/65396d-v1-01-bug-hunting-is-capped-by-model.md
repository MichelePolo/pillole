---
id: 65396d-v1-01-bug-hunting-is-capped-by-model
lang: en
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - sicurezza-allineamento
  - privacy-sicurezza
source:
  id: 65396d7e31ee
  title: AI cybersecurity is not proof of work
  site: antirez.com
  url: https://antirez.com/news/163
anchor: eventually the possible branches based on the code possible states are saturated
anchor_check: exact
quiz:
  q: Why does running a model many more times stop helping to find a given bug?
  a: Because the possible paths through the code get exhausted, so the limit becomes the model's intelligence rather than the number of attempts.
prompt_version: v1
model: claude-haiku-5-5
created: 2026-11-03T07:00:36.183Z
---

# Bug hunting is capped by model intelligence

Unlike hash collisions, where enough computation eventually finds a result, bug finding does not simply scale with the number of attempts. The author argues that repeated sampling of a model on the same code eventually explores all the meaningful paths, because the code has a finite set of states and the model's branches saturate. Past that point, extra samples add nothing. The limit becomes the model's own intelligence, meaning its ability to understand why separate facts combine into a vulnerability. The author concludes that cybersecurity will be won by better models and faster access to them, not by who owns more GPUs.
