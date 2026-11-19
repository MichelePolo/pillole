---
id: dd6e31-v3-04-la-compatibilita-all-indietro-delle-api
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: dd6e31229501
  lang: en
  title: We are destroying software
  site: antirez.com
  url: http://antirez.com/news/145
anchor: by no longer caring about backward APIs compatibility
anchor_check: exact
quiz:
  q: Perché la compatibilità all'indietro delle API è importante?
  a: Perché le interfacce sono un contratto con chi le usa, e romperle senza necessità obbliga gli altri a riscrivere il proprio codice.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-19T10:28:35.956Z
---

# La compatibilità all'indietro delle API va preservata

Un software che cambia le sue interfacce senza riguardo per la compatibilità con le versioni precedenti costringe chi lo usa a continue riscritture. Le API sono un contratto con chi le impiega, e romperlo senza necessità erode la fiducia e moltiplica il lavoro altrui. ==Trattare le interfacce pubbliche come impegni stabili è una forma di rispetto verso gli utenti del software==. Secondo l'autore, questa cura è oggi trascurata.
