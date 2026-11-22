---
id: dcd5da-v3-02-il-transformer-ignora-l-ordine-senza
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: dcd5da018bf2
  lang: en
  title: The Transformer Family
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/
anchor: self-attention operation is permutation invariant, it is important to use proper positional encoding
anchor_check: exact
quiz:
  q: Perché un Transformer ha bisogno di codifiche posizionali?
  a: Perché l'auto-attenzione è invariante rispetto alle permutazioni e quindi non percepisce l'ordine degli elementi senza un'informazione posizionale aggiunta.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.491Z
---

# Il Transformer ignora l'ordine senza codifiche posizionali

L'operazione di auto-attenzione è invariante rispetto alle permutazioni: tratta i dati come insiemi, quindi non sa nulla dell'ordine. Per questo è necessario aggiungere all'input una codifica posizionale che fornisca al modello l'informazione sull'ordine. La codifica ha la stessa dimensione dell'embedding e viene sommata direttamente ad esso. Si può usare una codifica sinusoidale fissa oppure una codifica appresa per ogni posizione assoluta.
