---
id: 9dc881-v3-03-ispezionare-cosa-guarda-il-modello-aiuta
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - sicurezza-allineamento
source:
  id: 9dc881aa2545
  lang: en
  title: Why Doesn’t My Model Work?
  author: Michael Lones
  site: The Gradient
  url: https://thegradient.pub/why-doesnt-my-model-work/
anchor: An easier approach is just to look at your model, and see what information it’s using to make its decisions
anchor_check: exact
quiz:
  q: Perché, secondo l'autore, osservare su cosa si concentra il modello è utile?
  a: Perché permette di individuare se il modello basa le decisioni su dettagli irrilevanti, come lo sfondo, e quindi di prevederne la scarsa generalizzazione.
warnings:
  - corpo di 58 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.408Z
---

# Ispezionare cosa guarda il modello aiuta a scoprire i fallimenti

Invece di affidarsi solo ai numeri, conviene verificare quali informazioni il modello usa davvero per decidere. Le tecniche di spiegabilità, come le mappe di salienza, possono mostrare se la rete si concentra sullo sfondo anziché sull'oggetto di interesse. Secondo l'autore, questo controllo è spesso più economico dell'addestramento avversariale e permette di capire in anticipo se il modello generalizzerà.
