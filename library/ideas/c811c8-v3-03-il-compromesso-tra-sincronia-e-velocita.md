---
id: c811c8-v3-03-il-compromesso-tra-sincronia-e-velocita
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: c811c8fa03ef
  lang: en
  title: How to Train Really Large Models on Many GPUs?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-09-25-train-large/
anchor: "Bulk synchronous parallels (BSP): Workers sync data at the end of every minibatch."
anchor_check: exact
quiz:
  q: Qual è il rischio di non sincronizzare mai i workers durante l'addestramento?
  a: L'uso di pesi obsoleti, che riduce l'efficienza statistica dell'apprendimento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-13T09:39:20.096Z
---

# Il compromesso tra sincronia e velocità nei gradienti

Quando più workers addestrano insieme il modello, devono scambiarsi i gradienti. Se aspettano tutti a ogni passo, l'apprendimento è stabile ma le macchine più lente frenano le altre. Se non aspettano mai, lavorano più in fretta ma usano pesi obsoleti, perdendo efficienza di apprendimento. Le soluzioni intermedie, come accumulare gradienti per più iterazioni, cercano un equilibrio tra questi due estremi.
