---
id: df68cd-v3-06-le-dipendenze-vanno-seguite-fino-alla
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
  - infrastrutture
source:
  id: df68cd1c8476
  lang: it
  title: "Cyber Resilience Act: come documentare rischi, prove e conformità"
  author: Francesco Capparelli, Lara Maugeri
  site: Agenda Digitale
  url: https://www.agendadigitale.eu/sicurezza/cyber-resilience-act-come-documentare-rischi-prove-e-conformita/
anchor: occorre seguire l’integrazione fino alla funzione esposta sul controllore
anchor_check: exact
quiz:
  q: Perché non basta sapere da dove proviene un componente software?
  a: Perché ciò che conta è se la funzione vulnerabile sia presente e raggiungibile nel prodotto consegnato.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-20T10:08:32.172Z
---

# Le dipendenze vanno seguite fino alla funzione esposta

Il fatto che un componente software sia noto e di provenienza chiara non basta a valutarne la sicurezza. Una funzione vulnerabile può essere assente dal programma compilato, mentre un'interfaccia poco considerata può renderla raggiungibile. Per questo la valutazione deve seguire l'integrazione del componente fino al prodotto consegnato, e una distinta software leggibile automaticamente aiuta a ritrovare gli esemplari interessati quando arriva una segnalazione.
