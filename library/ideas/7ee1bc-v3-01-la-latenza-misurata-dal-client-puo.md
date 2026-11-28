---
id: 7ee1bc-v3-01-la-latenza-misurata-dal-client-puo
lang: it
kind: dato
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 7ee1bc77600b
  lang: en
  title: Some latency measurement pitfalls
  site: danluu.com
  url: https://danluu.com/latency-pitfalls/
anchor: the difference between client and server latency is large even though the lines don't look all that far apart
anchor_check: exact
quiz:
  q: Perché un allarme basato solo sulla latenza misurata sul server può non accorgersi di un problema reale?
  a: Perché la latenza accodata nello stack di rete e del kernel, fuori dal codice del servizio, non compare nelle metriche lato server.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.261Z
---

# La latenza misurata dal client può differire molto da quella del server

Le metriche di latenza raccolte sul server escludono il tempo passato nello stack di rete e del kernel, cioè in netty e in Linux, sia sul client sia sul server. Quando quella parte opaca si accoda, il client vede tempi molto più alti di quelli riportati dal server. Nel caso descritto, il novantanovesimo percentile era circa 16 ms lato server e circa 240 ms lato client. ==Chi imposta allarmi solo sul server può non vedere problemi reali che l'utente sperimenta.== Il rischio cresce proprio sotto carico, quando servono i numeri più affidabili.
