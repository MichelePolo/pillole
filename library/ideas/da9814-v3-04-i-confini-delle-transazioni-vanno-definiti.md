---
id: da9814-v3-04-i-confini-delle-transazioni-vanno-definiti
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
  - infrastrutture
source:
  id: da9814d5561c
  lang: en
  title: In defense of simple architectures
  author: Dan Luu
  site: danluu.com
  url: https://danluu.com/simple-architectures/
anchor: A mistake we made in the first few months of operation that has some cost today was not carefully delimiting the boundaries of database transactions
anchor_check: exact
quiz:
  q: Quale rischio comporta una sessione di database condivisa per tutta la richiesta, senza confini chiari?
  a: Si perde il controllo su quando avvengono gli aggiornamenti, aumentando i bug di integrità dei dati e rendendo difficili le migrazioni.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:47.906Z
---

# I confini delle transazioni vanno definiti presto

Un errore comune nei primi mesi è non definire con precisione dove inizia e dove finisce ogni transazione sul database. Nel caso descritto, la sessione del database era una variabile globale per richiesta: apriva transazioni in modo implicito e poteva essere confermata da qualunque funzione. Il risultato è difficile da controllare, con più bug sottili di integrità dei dati, meno possibilità di usare chiavi di idempotenza e transazioni lunghe che rendono difficili le migrazioni dello schema. ==Decidere con cura i confini delle transazioni è una scelta architetturale da fare subito==.
