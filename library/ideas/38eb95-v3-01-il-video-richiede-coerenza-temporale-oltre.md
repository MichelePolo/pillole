---
id: 38eb95-v3-01-il-video-richiede-coerenza-temporale-oltre
lang: it
kind: concetto
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
anchor: It has extra requirements on temporal consistency across frames in time
anchor_check: exact
quiz:
  q: Perché generare video è più difficile che generare immagini con i modelli di diffusione?
  a: Perché i fotogrammi devono restare coerenti nel tempo, richiedendo più conoscenza del mondo, e i dati video di alta qualità sono più difficili da raccogliere.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.471Z
---

# Il video richiede coerenza temporale oltre alla qualità dell'immagine

Generare video con i modelli di diffusione è più difficile che generare immagini, perché ogni fotogramma deve restare coerente con quelli vicini nel tempo. Questo richiede di codificare nel modello più conoscenza del mondo rispetto alle immagini. Inoltre raccogliere grandi quantità di video di alta qualità, e ancor più coppie testo-video, è molto più complicato che raccogliere testo o immagini. Un'immagine può essere vista come un video di un solo fotogramma, quindi il problema video contiene quello delle immagini come caso particolare.
