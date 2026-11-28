---
id: 7ee1bc-v3-02-la-media-dei-percentili-di-coda
lang: it
kind: concetto
topics:
  - tecnologia
  - matematica
subtopics:
  - infrastrutture
  - probabilita-statistica
source:
  id: 7ee1bc77600b
  lang: en
  title: Some latency measurement pitfalls
  site: danluu.com
  url: https://danluu.com/latency-pitfalls/
anchor: taking the average of per-shard tail latency defeats the purpose of monitoring tail latency
anchor_check: exact
quiz:
  q: Perché la media delle latenze di coda dei singoli shard non è un buon indicatore della latenza di coda del cluster?
  a: Perché la media attenua l'effetto di pochi shard lenti, che invece determinano la coda complessiva del cluster.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.261Z
---

# La media dei percentili di coda non rappresenta la coda del cluster

Molte dashboard calcolano la latenza di un cluster come media, o come percentile, dei valori di coda dei singoli shard. Secondo l'autore questo approccio non funziona: poche risposte lente su pochi nodi possono far salire di molto la latenza di coda complessiva, mentre la media la attenua. Per esempio, un nodo su cento con latenza di coda dieci volte maggiore alzerebbe la media solo di circa il nove per cento. La correlazione tra le aggregazioni per shard e la latenza reale del cluster risultava debole. ==Non esiste un'aggregazione per shard che ricostruisca in modo affidabile la coda del cluster.==
