---
id: 7ee1bc-v3-04-il-benchmark-a-ciclo-chiuso-sottostima
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
anchor: they effectively send a single request, wait for it to come back, and then send another request
anchor_check: exact
quiz:
  q: Perché un benchmark a ciclo chiuso può sottostimare la latenza che un sistema mostrerebbe in produzione?
  a: Perché aspetta ogni risposta prima di inviare la successiva, quindi una richiesta lenta non fa accumulare il carico che arriverebbe davvero.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.263Z
---

# Il benchmark a ciclo chiuso sottostima la latenza reale

Nei benchmark a ciclo chiuso il sistema invia una richiesta, attende la risposta e solo allora ne invia un'altra. Secondo l'autore questo modo di misurare non rappresenta il carico reale, perché una richiesta lenta ritarda anche quelle successive che nella produzione arriverebbero comunque nei tempi previsti. Il benchmark a ciclo aperto, che invia richieste a un ritmo fisso indipendentemente dalle risposte, descrive meglio la realtà. La differenza si vede soprattutto nei percentili alti, dove le code di attesa si accumulano.
