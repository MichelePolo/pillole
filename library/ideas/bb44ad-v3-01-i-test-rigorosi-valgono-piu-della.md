---
id: bb44ad-v3-01-i-test-rigorosi-valgono-piu-della
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: bb44adf34f21
  lang: en
  title: Agentic test processes, LLM benchmarks, and other notes on agentic coding from Galapagos Island
  site: danluu.com
  url: https://danluu.com/ai-coding/
anchor: we trusted our test practices enough that review didn't, in general, add much reliability
anchor_check: exact
quiz:
  q: Perché, secondo l'autore, la revisione del codice aggiunge poca affidabilità in un processo con test solidi?
  a: Perché i test solidi già catturano la maggior parte dei bug, quindi la revisione aggiunge poco.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.806Z
---

# I test rigorosi valgono più della revisione umana

L'autore sostiene che un processo fondato su test estesi, casuali e mantenuti nel tempo può garantire una qualità superiore a quella di un flusso dipendente dalla revisione del codice. Nella sua esperienza in un'azienda di progettazione di chip, il codice non veniva revisionato di default, eppure si rilasciava meno di un bug significativo all'anno. Secondo l'autore, la revisione umana aggiunge poca affidabilità quando i test sono solidi, e questo diventa cruciale quando un agente produce più codice di quanto una persona possa rileggere.
