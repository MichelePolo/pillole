---
id: fe0558-v3-02-il-duty-cycle-determina-la-tensione
lang: it
kind: concetto
topics:
  - fisica
subtopics:
  - termodinamica
source:
  id: fe055818bb71
  lang: en
  title: Playing audio files in a Pi Pico without a DAC
  site: antirez.com
  url: http://antirez.com/news/143
anchor: A duty cycle of 65535 means 100% of time pin high. 0% means all the time low.
anchor_check: exact
quiz:
  q: Cosa succede alla tensione media se si aumenta il duty cycle mantenendo fissa la frequenza?
  a: La tensione media aumenta, perché il pin resta alto per una frazione maggiore di ogni periodo.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:48.085Z
---

# Il duty cycle determina la tensione media percepita

Un duty cycle di 65535 significa il pin sempre alto, uno di zero significa sempre basso, e i valori intermedi danno livelli intermedi. Mantenendo fissa la frequenza di commutazione, cambiare solo la durata dello stato alto cambia il valore medio che un carico vede. È un principio elementare di elettronica, ma è ciò che rende possibile la sintesi di suoni con un hardware minimo.
