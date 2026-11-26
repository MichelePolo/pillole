---
id: be7b76-v3-01-la-cache-causa-guasti-perche-amplifica
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - infrastrutture
  - architettura-software
source:
  id: be7b76e71de8
  lang: en
  title: A decade of major cache incidents at Twitter
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/cache-incidents/
anchor: most aren't really due to errors in the logic of cache, but rather, some kind of anomaly that causes an insufficiently mitigated positive feedback loop
anchor_check: exact
quiz:
  q: Perché, secondo gli autori, molti guasti della cache non dipendono da errori nella sua logica?
  a: Perché un'anomalia sottostante innesca un ciclo di retroazione positiva che non viene contenuto e diventa incontrollabile.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-24T12:37:02.281Z
---

# La cache causa guasti perché amplifica i cicli di retroazione

Secondo gli autori, la cache è spesso coinvolta nei grandi guasti non per errori nella sua logica, ma perché un'anomalia sotto di essa, come una latenza improvvisa, innesca un ciclo di retroazione positiva che diventa incontrollabile. Carichi molto alti e latenze bassissime rendono questo effetto particolarmente pericoloso: più latenza significa più richieste in attesa, più pressione sulla memoria e ancora più latenza. Il meccanismo è un classico guasto dei sistemi distribuiti, e la cache ne offre esempi particolarmente puliti proprio perché è un componente semplice.
