---
id: f511c0-v3-01-un-attacco-che-nasconde-chi-scansiona
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - privacy-sicurezza
source:
  id: f511c001562f
  lang: en
  title: The origins of the Idle Scan
  site: antirez.com
  url: http://antirez.com/news/139
anchor: Instead all others it allows you to scan using spoofed packets, so scanned hosts can't see your real address.
anchor_check: exact
quiz:
  q: Come fa l'Idle scan a non far vedere al bersaglio l'indirizzo reale di chi scansiona?
  a: Usa pacchetti con mittente falsificato che sembrano provenire da un terzo computer inattivo, e osserva il contatore di quest'ultimo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.961Z
---

# Un attacco che nasconde chi scansiona

L'Idle scan è una tecnica per capire quali porte di un computer sono aperte senza rivelare la propria identità. Invece di inviare pacchetti a proprio nome, chi attacca usa un terzo computer inattivo come intermediario: il bersaglio vede pacchetti che sembrano provenire dall'intermediario. L'attaccante, osservando come cambia il contatore di identificazione di quell'intermediario, ricava le informazioni che gli servono. ==Il bersaglio non vede mai l'indirizzo reale di chi sta scansionando.== Il metodo nasce dall'osservazione di un campo che sembrava innocuo, e mostra come un dettaglio tecnico possa diventare una vulnerabilità sfruttabile.
