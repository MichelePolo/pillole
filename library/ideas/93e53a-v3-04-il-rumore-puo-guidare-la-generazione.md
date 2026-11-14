---
id: 93e53a-v3-04-il-rumore-puo-guidare-la-generazione
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 93e53a97f2e3
  lang: en
  title: What are Diffusion Models?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2021-07-11-diffusion-models/
anchor: classifier-free guidance can achieve a good balance between FID
anchor_check: exact
quiz:
  q: Che cosa permette di fare la guida senza classificatore rispetto alla guida con classificatore esterno?
  a: Ottenere il controllo sulla condizione combinando modelli condizionato e non condizionato, senza un classificatore separato.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-14T09:05:17.330Z
---

# Il rumore può guidare la generazione condizionata senza classificatore

La guida senza classificatore combina le predizioni di un modello condizionato e di uno non condizionato, che può essere addestrato nella stessa rete azzerando casualmente l'informazione di condizione. Il risultato è un bilanciamento regolabile tra fedeltà alla condizione e qualità del campione, senza un classificatore esterno. Secondo l'autore, questa strategia ottiene un buon compromesso tra metriche di qualità e diversità, mentre la guida tramite CLIP tende a sfruttare esempi avversari.
