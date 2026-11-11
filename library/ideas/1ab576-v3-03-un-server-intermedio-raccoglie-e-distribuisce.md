---
id: 1ab576-v3-03-un-server-intermedio-raccoglie-e-distribuisce
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - infrastrutture
  - architettura-software
source:
  id: 1ab576a158e7
  lang: it
  title: "Shopify cresce, ma i dati delle vendite si perdono: il nodo del tracking"
  author: Matteo Zambon
  site: Agenda Digitale
  url: https://www.agendadigitale.eu/mercati-digitali/shopify-cresce-ma-i-dati-delle-vendite-si-perdono-il-nodo-del-tracking/
anchor: invia i dati a un unico server intermedio
anchor_check: exact
quiz:
  q: Che cosa fa il server intermedio nel tracciamento server-side?
  a: Riceve i dati dal sito, li verifica e li arricchisce, poi li distribuisce alle piattaforme di analisi e pubblicità.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-11T10:12:51.154Z
---

# Un server intermedio raccoglie e distribuisce i dati

Nel tracciamento server-side il browser non invia più i dati a molte piattaforme diverse. Li invia a un unico server intermedio, ospitato su un sottodominio del sito, che li verifica, li arricchisce e li distribuisce agli strumenti di analisi e pubblicità. ==Il vantaggio è spostare la raccolta dal browser, che può essere bloccato, a un punto controllato dal venditore==. Il server però va mantenuto e dimensionato, compito che spesso viene affidato a un fornitore.
