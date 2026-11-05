---
id: 38eb95-v3-04-generare-video-senza-addestramento-tramite-coerenza
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 38eb95b0e9e6
  lang: en
  title: Diffusion Models for Video Generation
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-04-12-diffusion-video/
anchor: enhancing a pre-trained image diffusion model with two key mechanisms for temporal consistency
anchor_check: exact
quiz:
  q: Perché campionare latenti casuali indipendenti per ogni fotogramma non basta a generare un video coerente?
  a: Perché non c'è alcuna garanzia che oggetti e semantica restino consistenti nel tempo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.475Z
---

# Generare video senza addestramento tramite coerenza tra fotogrammi

Un modello di immagini pre-addestrato può produrre video senza alcun addestramento aggiuntivo, a patto di forzare la coerenza tra i fotogrammi. Text2Video-Zero ottiene questo campionando i latenti con un movimento globale controllato e sostituendo l'attenzione tra fotogrammi con un'attenzione che guarda sempre al primo fotogramma. Così l'aspetto e l'identità dell'oggetto principale si conservano lungo tutto il video. Senza questi accorgimenti, campionare latenti casuali indipendenti non garantisce alcuna coerenza di oggetti e semantica nel tempo.
