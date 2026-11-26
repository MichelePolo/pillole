---
id: be7b76-v3-02-retry-e-riconnessioni-aggressive-possono-abbattere
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
  - infrastrutture
source:
  id: be7b76e71de8
  lang: en
  title: A decade of major cache incidents at Twitter
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/cache-incidents/
anchor: Clients should "do the math" when setting retry policies
anchor_check: exact
quiz:
  q: Perché una politica di retry troppo aggressiva può peggiorare un sistema già sovraccarico?
  a: Perché ogni tentativo aggiunge carico su un server già in difficoltà, moltiplicando il traffico fino a farlo collassare.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.282Z
---

# Retry e riconnessioni aggressive possono abbattere il sistema

Quando un server è sovraccarico e risponde lentamente, i client che ritentano le richieste o aprono nuove connessioni aumentano il carico proprio sul componente già in difficoltà. Secondo gli autori, il problema nasce quando ogni client applica da solo una politica di retry senza considerare il numero complessivo di client e di connessioni. La lezione è che chi configura i tentativi deve fare i conti in anticipo: se tutte le risposte falliscono, la politica di retry non deve poter sommergere il server.
