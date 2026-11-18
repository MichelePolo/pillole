---
id: 91c8f7-v3-06-il-riscalamento-dei-token-ammorbidisce-le
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 91c8f7fce27f
  lang: en
  title: Controllable Neural Text Generation
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-01-02-controllable-text-generation/
anchor: The standard way of maximizing the log-likelihood loss in language model training leads to incorrect token distribution
anchor_check: exact
quiz:
  q: Perché l'addestramento standard può portare a ripetizioni e a un eccesso di sicurezza nelle previsioni?
  a: Perché la massima verosimiglianza distribuisce male le frequenze dei token, rendendo il modello troppo sicuro e incline a ripetere parole frequenti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-18T10:18:36.872Z
---

# Il riscalamento dei token ammorbidisce le ripetizioni nei modelli

Gli autori mostrano che il training standard a massima verosimiglianza porta i modelli a usare troppo spesso le parole frequenti e troppo raramente quelle rare, rendendoli eccessivamente sicuri. Aggiungendo una funzione di perdita che penalizza i token indesiderati, come gli n-grammi ripetuti, il modello produce testi meno ripetitivi e più vari. Questo intervento agisce sull'addestramento e non solo sulla decodifica.
