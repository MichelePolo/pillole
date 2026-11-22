---
id: dcd5da-v3-05-il-ricalcolo-reversibile-risparmia-memoria-durante
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: dcd5da018bf2
  lang: en
  title: The Transformer Family
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/
anchor: activations at any given layer can be recovered from the activations at the following layer
anchor_check: exact
quiz:
  q: Come un layer reversibile riduce l'uso di memoria in addestramento?
  a: Ricostruisce le attivazioni dal layer successivo quando servono, quindi non è necessario memorizzarle tutte per la retropropagazione.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.493Z
---

# Il ricalcolo reversibile risparmia memoria durante l'addestramento

Nei layer reversibili l'input può essere ricostruito dall'output del layer successivo usando solo i parametri del modello. Non è necessario quindi conservare tutte le attivazioni per la retropropagazione: basta ricalcolarle quando servono. Il metodo riduce la memoria che cresce con il numero di strati, al costo di qualche calcolo in più. L'idea è centrale nel Reformer, che la combina con l'attenzione basata su hashing locale.
