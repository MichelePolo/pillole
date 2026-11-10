---
id: 1dd896-v3-02-la-cpu-pesa-sull-usabilita-piu
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: 1dd89693deba
  lang: en
  title: How web bloat impacts users with slow devices
  site: danluu.com
  url: https://danluu.com/slow-device/
anchor: it's hard to cheat on CPU time and make optimizations that significantly move the number without impacting user experience
anchor_check: exact
quiz:
  q: Perché, secondo l'autore, il tempo di CPU è una metrica più affidabile dell'LCP per valutare l'usabilità?
  a: Perché è difficile manipolarlo senza migliorare davvero l'esperienza, mentre l'LCP può essere ottimizzato con trucchi che non aiutano l'utente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.475Z
---

# La CPU pesa sull'usabilità più di molte metriche ufficiali

Secondo l'autore, il tempo di CPU sul thread principale è una misura semplice e molto correlata alla percezione di usabilità su dispositivi lenti. Se una pagina usa il 100% della CPU per trenta secondi, è inutilizzabile per trenta secondi; è difficile barare su questa metrica senza migliorare davvero l'esperienza. Le metriche come LCP, invece, possono essere ottimizzate in modo cosmetico. ==Misurare il lavoro del processore dice più della velocità apparente di caricamento==.
