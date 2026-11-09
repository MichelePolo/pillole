---
id: a92667-v3-02-il-dettaglio-nascosto-dietro-un-etichetta
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - altro
source:
  id: a92667754bb1
  lang: en
  title: Hide your slop PR descriptions behind <details><summary>
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Nov/9/details-summary/
anchor: Hide most of it in a details/summary
anchor_check: exact
quiz:
  q: Qual è la differenza di ruolo tra summary e details in questo metodo?
  a: Il summary è la riga cliccabile sempre visibile, mentre details racchiude il contenuto lungo che si espande al clic.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-09T09:56:12.424Z
---

# Il dettaglio nascosto dietro un'etichetta cliccabile

Su GitHub è possibile usare gli elementi HTML details e summary per mostrare solo un titolo cliccabile, mentre il testo lungo resta nascosto e si apre a richiesta. Il summary è la riga sempre visibile, il details contiene tutto il resto. Così chi legge può orientarsi in pochi secondi e decidere se approfondire, senza che il contenuto venga eliminato. L'autore lo usa per i testi generati dall'agente, scegliendo come etichetta il nome del modello, in modo che sia chiaro cosa si sta aprendo. È un accorgimento semplice che riduce il peso visivo di un documento lungo.
