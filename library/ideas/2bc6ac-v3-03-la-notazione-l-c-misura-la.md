---
id: 2bc6ac-v3-03-la-notazione-l-c-misura-la
lang: it
kind: metodo
topics:
  - matematica
subtopics:
  - teoria-dei-numeri
source:
  id: 2bc6ac828588
  lang: en
  title: Las Vegas, Monte Carlo, and Integer Factorization
  author: John
  site: John D. Cook | Applied Mathematics Consulting
  url: https://www.johndcook.com/blog/2026/11/26/las-vegas-monte-carlo/
anchor: The notation LN[α, c], commonly used in computational number theory, stands for
anchor_check: exact
quiz:
  q: Nella notazione L_N[α, c], che cosa controlla il parametro α e che cosa il parametro c?
  a: α determina la classe di complessità, c il fattore costante nell'esponente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-27T10:59:27.069Z
---

# La notazione L[α, c] misura la complessità di fattorizzazione

Nella teoria computazionale dei numeri si usa la notazione L_N[α, c], pari a exp(c (log N)^α (log log N)^(1−α)), per esprimere la crescita del tempo di fattorizzazione di un intero N. Il parametro α determina la classe di complessità, mentre c fissa il fattore costante nell'esponente. Confrontando solo i valori di c a parità di α si capisce quale algoritmo è più veloce nel limite dei grandi numeri.
