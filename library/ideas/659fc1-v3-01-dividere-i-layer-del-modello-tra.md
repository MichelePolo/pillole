---
id: 659fc1-v3-01-dividere-i-layer-del-modello-tra
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - infrastrutture
source:
  id: 659fc1318f48
  lang: en
  title: Distributing LLM inference in DwarfStar
  site: antirez.com
  url: http://antirez.com/news/167
anchor: One is to duplicate memory by loading 50% of the transformer layers in computer A
anchor_check: exact
quiz:
  q: Perché dividere i layer di un modello tra due computer non accelera la generazione di un singolo token?
  a: Perché ogni token attraversa i layer in sequenza, quindi la seconda macchina deve aspettare che la prima finisca la sua parte.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T00:05:05.562Z
---

# Dividere i layer del modello tra due macchine

Un modo per far girare un modello linguistico troppo grande per una sola macchina è distribuirne i layer: la prima metà gira sul computer A, la seconda sul computer B, e l'inferenza procede in sequenza. Ogni macchina deve tenere in memoria solo la sua parte, e tra le due passano soltanto le attivazioni, cioè dati piccoli e facili da trasmettere. Con il micro-batching si può anche accelerare il prefill, cioè l'elaborazione del prompt. ==Il decoding invece non migliora==: per generare un singolo token bisogna attendere che ogni macchina completi la propria parte, una dopo l'altra. Il vantaggio è quindi soprattutto di memoria e di carico termico distribuito, non di velocità nella generazione.
