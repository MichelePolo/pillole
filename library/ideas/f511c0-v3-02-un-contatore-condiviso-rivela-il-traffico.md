---
id: f511c0-v3-02-un-contatore-condiviso-rivela-il-traffico
lang: it
kind: concetto
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
anchor: The counter was universal for all outgoing packets.
anchor_check: exact
quiz:
  q: Perché un contatore unico per tutti i pacchetti in uscita è un problema di sicurezza?
  a: Perché chiunque ne osservi i valori può dedurre quanto traffico il computer sta inviando.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-25T11:25:56.963Z
---

# Un contatore condiviso rivela il traffico altrui

Nel protocollo TCP/IP ogni pacchetto in uscita porta un numero di identificazione, e nei sistemi osservati questo numero deriva da un unico contatore usato da tutto il traffico del computer. ==Chi osserva la sequenza di questi numeri può stimare quanto traffico sta generando la macchina.== Il dato sembra innocuo, ma è una perdita di informazioni: rivela attività che l'host non intendeva mostrare. Secondo l'autore, la maggior parte delle persone lo considerava un rischio trascurabile, mentre a lui sembrava un'anomalia preoccupante.
