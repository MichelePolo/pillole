---
id: 189b69-v3-03-nel-limite-di-larghezza-infinita-il
lang: it
kind: dato
topics:
  - ai
  - matematica
subtopics:
  - modelli-linguistici
  - probabilita-statistica
source:
  id: 189b698067bc
  lang: en
  title: Some Math behind Neural Tangent Kernel
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-09-08-ntk/
anchor: the NTK converges to be deterministic at initialization
anchor_check: missing
quiz:
  q: Che cosa cambia nel kernel tangente quando la larghezza della rete tende all'infinito?
  a: Diventa deterministico, cioè non dipende dall'inizializzazione casuale, e resta costante durante l'addestramento.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.363Z
---

# Nel limite di larghezza infinita il kernel diventa deterministico

Quando il numero di neuroni nei livelli nascosti tende all'infinito, il kernel tangente converge a un valore che non dipende dall'inizializzazione casuale dei pesi, ma solo dall'architettura della rete. Inoltre, il kernel resta costante durante l'addestramento. Questo significa che la dinamica di apprendimento diventa molto più semplice da analizzare. La dimostrazione procede per induzione sul numero di livelli, e l'autore la presenta come la proposizione più importante del lavoro originale. Il risultato resta un'idealizzazione, valida nel limite teorico.
