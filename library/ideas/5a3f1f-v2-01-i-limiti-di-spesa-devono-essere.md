---
id: 5a3f1f-v2-01-i-limiti-di-spesa-devono-essere
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
source:
  id: 5a3f1f4a82c5
  lang: en
  title: We’re going to need default hard budget caps on pretty much everything
  author: Simon Willison
  site: Simon Willison’s Weblog
  url: https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/
anchor: Soft caps, "after $X/month, send me a warning email", will not cut it.
anchor_check: exact
quiz:
  q: Perché un avviso via email non è sufficiente a controllare la spesa di un servizio a consumo?
  a: Perché arriva quando il costo è già stato sostenuto e non ferma il servizio che continua a generare spese.
warnings:
  - titolo di 9 parole (max 8)
prompt_version: v2
model: claude-haiku-5-5
created: 2026-11-03T08:21:17.516Z
---

# I limiti di spesa devono essere rigidi, non avvisi

Un avviso via email che segnala di aver superato il budget non basta a proteggere chi usa servizi a consumo. Secondo l'autore, serve ==un limite rigido che interrompa il servizio e restituisca errori== una volta raggiunta la soglia. Un avviso arriva spesso quando il danno è già fatto, mentre il blocco impedisce che un servizio dimenticato o difettoso generi costi enormi durante la notte. Il limite morbido lascia la responsabilità a chi dorme, mentre quello rigido la sposta sul sistema stesso.
