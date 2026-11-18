---
id: 91c8f7-v3-05-piccoli-prompt-appresi-possono-guidare-un
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 91c8f7fce27f
  lang: en
  title: Controllable Neural Text Generation
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/
anchor: As an alternative to fine-tuning, prompt design or learning the context embedding is much cheaper.
anchor_check: exact
quiz:
  q: Quale vantaggio principale hanno i prompt appresi rispetto al fine-tuning completo?
  a: Costano molto meno in calcolo e permettono di adattare un modello congelato a più compiti, competendo con il fine-tuning sui modelli grandi.
warnings:
  - corpo di 57 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.871Z
---

# Piccoli prompt appresi possono guidare un modello congelato

Invece di riaddestrare tutto il modello, si possono apprendere pochi parametri continui aggiunti all'input, come un prefisso o un prompt morbido, mentre il modello resta fisso. Questo costa molto meno e, con modelli grandi e pochi dati, può competere con il fine-tuning completo. Il vantaggio è la leggerezza: un solo modello base può servire molti compiti diversi.
