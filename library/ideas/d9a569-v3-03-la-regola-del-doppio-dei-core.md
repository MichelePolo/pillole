---
id: d9a569-v3-03-la-regola-del-doppio-dei-core
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: d9a569d5fe21
  lang: en
  title: The container throttling problem
  site: danluu.com
  url: https://danluu.com/cgroup-throttling/
anchor: thread pool size should be 2x the number of logical cores on the machine
anchor_check: exact
quiz:
  q: Perché la regola del doppio dei core non è adatta a molti servizi con richieste sensibili alla latenza?
  a: Perché è pensata per carichi orientati al throughput, mentre nei servizi con più pool e scadenze strette i thread extra aumentano la latenza.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-26T11:00:57.256Z
---

# La regola del doppio dei core non vale sempre

Il consiglio diffuso di usare thread pool due volte più grandi del numero di core nasce da carichi di lavoro orientati al throughput, come una compilazione, dove conviene non lasciare core inattivi. L'autore sostiene però che questa regola non si applica a servizi con più pool concorrenti e con richieste sensibili alla scadenza, perché i thread extra aumentano la latenza. Secondo l'autore, la dimensione dei pool va scelta in base al tipo di lavoro e non come valore fisso.
