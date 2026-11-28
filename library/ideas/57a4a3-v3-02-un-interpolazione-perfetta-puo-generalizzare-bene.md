---
id: 57a4a3-v3-02-un-interpolazione-perfetta-puo-generalizzare-bene
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 57a4a31db8fe
  lang: en
  title: Are Deep Neural Networks Dramatically Overfitted?
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-03-14-overfit/
anchor: Once the number of network parameters is high enough, the risk curve enters another regime.
anchor_check: exact
quiz:
  q: Che cosa suggerisce la curva del rischio a doppia U per le reti neurali molto grandi?
  a: Che oltre una soglia di parametri l'errore di test può tornare a diminuire, anche se il modello ha già errore di training zero.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-28T10:34:15.257Z
---

# Un'interpolazione perfetta può generalizzare bene

La curva del rischio classica a forma di U dice che oltre una certa complessità il modello peggiora sui dati nuovi. Nelle reti profonde, però, si osserva una seconda discesa: superata una soglia di parametri, l'errore sui dati di test torna a calare anche quando il training error è zero. Secondo l'autore, una ragione è che un modello più grande può trovare funzioni interpolanti con norma minore, quindi in un certo senso più semplici, e che il numero di parametri non misura bene il bias induttivo.
