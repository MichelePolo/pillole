---
id: df68cd-v3-05-un-problema-di-sicurezza-si-separa
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - privacy-sicurezza
  - architettura-software
source:
  id: df68cd1c8476
  lang: it
  title: "Cyber Resilience Act: come documentare rischi, prove e conformità"
  author: Francesco Capparelli, Lara Maugeri
  site: Agenda Digitale
  url: https://www.agendadigitale.eu/sicurezza/cyber-resilience-act-come-documentare-rischi-prove-e-conformita/
anchor: anche una connessione cifrata può trasportare il comando di un soggetto privo del permesso necessario
anchor_check: exact
quiz:
  q: Perché una connessione cifrata non basta a garantire che un comando sia autorizzato?
  a: "Perché la protezione del trasporto è diversa dall'autorizzazione: il comando può arrivare cifrato anche da un soggetto non abilitato."
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.171Z
---

# Cifrare il canale non basta ad autorizzare un comando

Un'interpretazione diffusa è che basti un solo controllo a rendere sicuro un comando, ma gli autori ne distinguono diversi. Proteggere il trasporto con una connessione cifrata non verifica che chi invia il comando abbia il permesso necessario. Allo stesso modo, una password robusta ostacola l'accesso iniziale ma non limita il potere di chi ha già ottenuto l'identità. Secondo gli autori, ogni controllo va descritto con il componente che lo esegue e la reazione al suo mancato rispetto.
