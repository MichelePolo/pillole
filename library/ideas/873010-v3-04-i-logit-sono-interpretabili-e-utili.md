---
id: 873010-v3-04-i-logit-sono-interpretabili-e-utili
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 873010a9ddd2
  lang: en
  title: First Token Cutoff LLM sampling
  site: antirez.com
  url: http://antirez.com/news/142
anchor: Despite the fact that LLM logits are one of the few completely understandable parts of the LLM inner working
anchor_check: exact
quiz:
  q: Che cosa può rivelare la distribuzione di probabilità dei token successivi?
  a: Quanto il modello è sicuro o incerto a ogni passo, e quali sono i candidati alternativi, utile anche per sospettare allucinazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.497Z
---

# I logit sono interpretabili e utili da osservare

Secondo l'autore, i logit sono una delle poche parti completamente comprensibili del funzionamento di un LLM, eppure si studiano poco. Visualizzare la distribuzione di probabilità dei token successivi permette di capire quando il modello è sicuro e quando è incerto, e può aiutare a riconoscere possibili allucinazioni. Ad esempio, un modello che conosce un fatto concentra la probabilità su un solo token, mentre uno incerto la distribuisce su molte alternative. ==Osservare la distribuzione è un modo concreto per vedere quali sono i candidati a ogni passo.==
