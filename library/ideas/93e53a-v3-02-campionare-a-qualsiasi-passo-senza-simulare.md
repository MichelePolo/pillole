---
id: 93e53a-v3-02-campionare-a-qualsiasi-passo-senza-simulare
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 93e53a97f2e3
  lang: en
  title: What are Diffusion Models?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-07-11-diffusion-models/
anchor: we can sample $\mathbf{x}_t$ at any arbitrary time step $t$ in a closed form
anchor_check: exact
quiz:
  q: Perché l'addestramento dei modelli di diffusione può essere efficiente?
  a: Perché si può calcolare direttamente il campione a un passo casuale t in forma chiusa, senza simulare tutti i passi intermedi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.329Z
---

# Campionare a qualsiasi passo senza simulare la catena

Una proprietà utile del processo in avanti è che il campione a un passo arbitrario t si può ottenere direttamente, in forma chiusa, a partire dal dato originale, senza percorrere tutti i passi intermedi. Questo rende l'addestramento molto più efficiente: ==si può scegliere un passo casuale e calcolare subito il rumore da predire==, invece di simulare l'intera catena di Markov a ogni iterazione.
