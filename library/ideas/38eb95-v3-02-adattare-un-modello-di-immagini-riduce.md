---
id: 38eb95-v3-02-adattare-un-modello-di-immagini-riduce
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
anchor: inflate a pre-trained image-to-text diffusion model by inserting temporal layers
anchor_check: near
quiz:
  q: Qual è il vantaggio di partire da un modello di immagini pre-addestrato?
  a: Eredita la conoscenza delle coppie testo-immagine, riducendo il bisogno di coppie testo-video.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.472Z
---

# Adattare un modello di immagini riduce il bisogno di dati video

Un modo diffuso per generare video con la diffusione consiste nel partire da un modello di immagini pre-addestrato e inserirgli livelli temporali nuovi. Si possono poi addestrare solo questi livelli sui video, oppure non addestrare affatto. In questo modo il modello eredita la conoscenza delle coppie testo-immagine, e la necessità di coppie testo-video diminuisce. Questo approccio è uno dei due grandi filoni della generazione video con la diffusione, accanto all'addestramento da zero.
