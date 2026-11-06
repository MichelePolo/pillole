---
id: ce6829-v3-02-il-white-box-richiede-pesi-aperti
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - sicurezza-allineamento
source:
  id: ce68292451aa
  lang: en
  title: Adversarial Attacks on LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/
anchor: White-box attacks assume that attackers have full access to the model weights, architecture and training pipeline
anchor_check: exact
quiz:
  q: Perché gli attacchi white-box sono praticabili soprattutto su modelli open source?
  a: Perché richiedono pieno accesso ai pesi e all'architettura, necessario per calcolare i gradienti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.877Z
---

# Il white-box richiede pesi aperti, il black-box no

Gli attacchi white-box presuppongono che l'attaccante abbia accesso completo a pesi, architettura e pipeline di addestramento, così da poter calcolare i gradienti. Gli attacchi black-box, invece, richiedono soltanto un servizio simile a un'API, in cui si inserisce un input e si riceve un output. La distinzione conta perché determina quali tecniche sono disponibili e quali modelli sono esposti a quali rischi.
