---
id: f34111-v3-05-le-affermazioni-lunghe-vanno-verificate-una
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: f341118d2274
  lang: en
  title: Extrinsic Hallucinations in LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-07-07-hallucination/
anchor: decomposes a long form generation into multiple atomic facts and validates each separately
anchor_check: exact
quiz:
  q: Perché conviene verificare i fatti di un testo lungo uno alla volta?
  a: Perché così ogni affermazione può essere valutata separatamente e gli errori non si nascondono nel testo continuo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.638Z
---

# Le affermazioni lunghe vanno verificate una alla volta

Secondo l'autore, verificare un testo lungo come un blocco unico è meno efficace che scomporlo in fatti atomici e controllarli separatamente. Questo approccio, usato in FActScore e SAFE, permette di misurare la precisione di ogni affermazione. Anche nel metodo Chain-of-Verification le domande di verifica, se risposte separatamente, producono risultati migliori della generazione in forma lunga. La scomposizione rende visibili gli errori che in un testo continuo si confonderebbero con quelli corretti.
