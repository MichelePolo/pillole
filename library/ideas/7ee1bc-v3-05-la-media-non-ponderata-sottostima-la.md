---
id: 7ee1bc-v3-05-la-media-non-ponderata-sottostima-la
lang: it
kind: concetto
topics:
  - matematica
  - tecnologia
subtopics:
  - probabilita-statistica
  - infrastrutture
source:
  id: 7ee1bc77600b
  lang: en
  title: Some latency measurement pitfalls
  site: danluu.com
  url: https://danluu.com/latency-pitfalls/
anchor: an unweighted average frequently underestimates the actual latency
anchor_check: exact
quiz:
  q: Perché una media semplice delle latenze tra shard o data center può mostrare un valore migliore di quello reale?
  a: Perché gli shard a basso carico hanno latenze più basse e la media non ponderata li sovrappesa rispetto a quelli molto carichi.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.263Z
---

# La media non ponderata sottostima la latenza reale

Quando la latenza complessiva di più data center o più shard viene calcolata come media semplice, il risultato tende a essere troppo basso. Gli shard con meno traffico hanno di solito latenze più basse, quindi pesano troppo nella media. Il problema è più marcato quando il traffico viene spostato da un data center a un altro, perché la dashboard può mostrare una latenza in calo proprio mentre le richieste servite peggiorano. ==Serve una media ponderata per il carico, non una media semplice.==
