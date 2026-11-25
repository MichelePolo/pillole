---
id: 878201-v3-04-il-gradiente-naturale-segue-la-geometria
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - probabilita-statistica
source:
  id: "878201399682"
  lang: en
  title: Evolution Strategies
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2019-09-05-evolution-strategies/
anchor: natural gradient works with a probability distribution space parameterized by
anchor_check: exact
quiz:
  q: Qual è la differenza essenziale tra gradiente ordinario e gradiente naturale?
  a: Il gradiente naturale misura la distanza nello spazio delle distribuzioni tramite la divergenza KL, invece che nello spazio dei parametri.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.909Z
---

# Il gradiente naturale segue la geometria delle distribuzioni

Il gradiente ordinario cerca la direzione di salita più ripida entro una piccola distanza nello spazio dei parametri, il che dipende da come i parametri sono scelti. Il gradiente naturale invece misura la distanza tra distribuzioni con la divergenza KL, quindi muoversi nello spazio delle distribuzioni a velocità costante. Per calcolarlo si usa la matrice di informazione di Fisher, che penalizza le direzioni con alta incertezza.
