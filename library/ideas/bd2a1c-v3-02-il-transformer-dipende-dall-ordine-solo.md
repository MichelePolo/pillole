---
id: bd2a1c-v3-02-il-transformer-dipende-dall-ordine-solo
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: bd2a1c61491f
  lang: en
  title: The Transformer Family Version 2.0
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/
anchor: self-attention operation is permutation invariant, it is important to use proper positional encoding to provide order information to the model
anchor_check: exact
quiz:
  q: Perché l'auto-attenzione ha bisogno di codifiche posizionali?
  a: Perché l'auto-attenzione è invariante rispetto alle permutazioni e quindi, senza di esse, non distinguerebbe l'ordine degli elementi della sequenza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.450Z
---

# Il Transformer dipende dall'ordine solo tramite codifiche posizionali

L'auto-attenzione è invariante rispetto alle permutazioni: tratta l'input come un insieme e quindi non conosce l'ordine degli elementi. Per questo il modello somma agli embedding dei vettori posizionali che portano l'informazione sulla posizione. Le codifiche sinusoidali sono una soluzione, ma ne esistono molte altre, come quelle apprese o quelle relative, e la scelta influisce sulla capacità del modello di generalizzare a sequenze più lunghe.
