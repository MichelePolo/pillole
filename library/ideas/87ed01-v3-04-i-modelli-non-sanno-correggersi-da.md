---
id: 87ed01-v3-04-i-modelli-non-sanno-correggersi-da
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 87ed01723e4f
  lang: en
  title: Why We Think
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2025-05-01-thinking/
anchor: naively applying self-correction leads to worse performance and external feedback is needed
anchor_check: exact
quiz:
  q: Di quale tipo di segnale ha bisogno un modello per migliorare davvero le proprie risposte?
  a: Di un feedback esterno, come la verifica rispetto a una risposta corretta, unit test o un giudizio umano o di un modello più forte.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.417Z
---

# I modelli non sanno correggersi da soli senza feedback

Secondo l'autore, l'autocorrezione dei modelli linguistici non funziona in modo intrinseco: il modello tende a modificare risposte giuste, a fare correzioni minime o a non generalizzare. Gli esperimenti citati mostrano che l'autocorrezione ingenua peggiora i risultati e che serve un riscontro esterno, come la verifica con la verità di riferimento, unit test o un modello più forte. ==Senza un segnale esterno, la correzione automatica rischia di peggiorare le risposte.==
