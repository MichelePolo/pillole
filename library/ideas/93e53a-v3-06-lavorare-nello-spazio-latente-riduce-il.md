---
id: 93e53a-v3-06-lavorare-nello-spazio-latente-riduce-il
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - architettura-software
  - modelli-linguistici
source:
  id: 93e53a97f2e3
  lang: en
  title: What are Diffusion Models?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-07-11-diffusion-models/
anchor: Latent diffusion model (LDM; Rombach & Blattmann, et al. 2022) runs the diffusion process in the latent space instead of pixel space
anchor_check: exact
quiz:
  q: Perché i modelli di diffusione latente sono più efficienti di quelli che operano sui pixel?
  a: Perché eseguono la diffusione su una rappresentazione compressa, riducendo costi di addestramento e tempi di inferenza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.331Z
---

# Lavorare nello spazio latente riduce il costo di calcolo

Invece di applicare la diffusione ai singoli pixel, il modello di diffusione latente comprime prima l'immagine con un autoencoder e poi lavora sulla rappresentazione compressa. L'idea è che la maggior parte dei bit di un'immagine serve a dettagli percettivi, mentre la composizione semantica sopravvive a una compressione aggressiva. ==Separare compressione percettiva e generazione semantica rende l'addestramento meno costoso e l'inferenza più veloce==.
