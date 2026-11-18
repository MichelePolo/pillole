---
id: 5bdaf0-v3-05-il-sistema-di-sicurezza-va-progettato
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - sicurezza-allineamento
  - architettura-software
source:
  id: 5bdaf053b66c
  lang: en
  title: Reducing Toxicity in Language Models
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-03-21-lm-toxicity/
anchor: The conversation experience would be drastically disrupted with too many false positives.
anchor_check: exact
quiz:
  q: Quale rischio principale corre un classificatore di sicurezza usato su input e output?
  a: Troppi falsi positivi possono interrompere gravemente l'esperienza di conversazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-17T10:51:32.377Z
---

# Il sistema di sicurezza va progettato per livelli

Un chatbot sicuro non si affida al solo modello linguistico. Secondo Xu e colleghi, serve un insieme di strategie: un classificatore che controlla sia l'input sia l'output, risposte predefinite quando viene rilevato contenuto non sicuro, addestramento su dati raccolti da persone che cercano di far sbagliare il sistema, e gestione dei temi sensibili. Il limite principale di questo approccio è che un classificatore con troppi falsi positivi rovina l'esperienza di conversazione.
