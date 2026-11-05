---
id: f92c92-v3-03-dati-di-verifica-separati-evitano-l
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: f92c92ae3bb8
  lang: en
  title: There's no reason for software to be slow anymore
  site: danluu.com
  url: https://danluu.com/no-slow/
anchor: This resulted in FRE being heavily overfit to rebar until we warned our agent that we had a holdout benchmark
anchor_check: exact
quiz:
  q: Perché si usa un insieme di dati di verifica separato durante l'ottimizzazione?
  a: Per misurare se i miglioramenti generalizzano a dati non visti, evitando di ottimizzare solo sui benchmark usati.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.779Z
---

# Dati di verifica separati evitano l'overfitting

Secondo l'autore, un agente che ottimizza un motore di espressioni regolari sui benchmark finisce per adattarsi troppo a essi. Il problema si attenua quando all'agente viene detto che esiste un insieme di dati di verifica (holdout) su cui sarà valutato, perché così generalizza meglio le ottimizzazioni. ==Senza un holdout, il miglioramento misurato può essere solo apparente.== Questo vale in generale per qualunque processo di ottimizzazione automatica: la misura va fatta su dati non usati durante l'ottimizzazione.
