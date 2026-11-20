---
id: 475f6d-v3-05-il-gradiente-puo-sostituire-la-ricerca
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - agenti
  - probabilita-statistica
source:
  id: 475f6d363978
  lang: en
  title: Neural Architecture Search
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-08-06-nas/
anchor: Some believe that one main cause for inefficiency in NAS is to treat the architecture search as a black-box optimization
anchor_check: exact
quiz:
  q: Qual è il vantaggio principale di rendere continua la scelta delle operazioni nella ricerca di architetture?
  a: Permette di ottimizzare architettura e pesi insieme con la discesa del gradiente, invece di usare una ricerca a scatola nera.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.095Z
---

# Il gradiente può sostituire la ricerca a scatola nera

Molti metodi trattano la ricerca di architetture come un problema a scatola nera, con apprendimento per rinforzo o evoluzione. Secondo l'autrice, una delle cause dell'inefficienza è proprio questo approccio. Rendere continua la scelta tra operazioni permette di ottimizzare architettura e pesi insieme con la discesa del gradiente. Questa strada è più efficiente, ma richiede molta memoria, quindi nasce il problema del consumo di risorse. ==Rendere differenziabile la scelta dell'architettura permette di usare il gradiente.==
