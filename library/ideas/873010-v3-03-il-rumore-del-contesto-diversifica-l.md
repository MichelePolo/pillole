---
id: 873010-v3-03-il-rumore-del-contesto-diversifica-l
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 873010a9ddd2
  lang: en
  title: First Token Cutoff LLM sampling
  site: antirez.com
  url: http://antirez.com/news/142
anchor: the input context will change, thus the output of the LLM will be perturbed
anchor_check: exact
quiz:
  q: Perché scegliere token di buona qualità in punti con più candidati può comunque produrre varietà nel testo?
  a: Perché ogni token scelto cambia il contesto successivo e perturba il modello, rendendo più probabili versioni alternative del testo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.496Z
---

# Il rumore del contesto diversifica l'output

Secondo l'autore, non serve forzare scelte deboli per ottenere variazione. Basta sfruttare i momenti in cui ci sono più candidati validi: il token scelto cambia il contesto successivo e questo perturba il modello, che quindi produce più facilmente una versione alternativa del testo. L'effetto valanga, come lo chiama l'autore, fa il lavoro della diversità senza dover pescare token di bassa qualità. Così la variazione utile resta separata da quella casuale e dannosa.
