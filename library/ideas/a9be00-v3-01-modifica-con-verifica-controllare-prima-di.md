---
id: a9be00-v3-01-modifica-con-verifica-controllare-prima-di
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: a9be0014ddbc
  lang: en
  title: Alternatives for the EDIT tool of LLM agents
  site: antirez.com
  url: http://antirez.com/news/166
anchor: there are often colliding edits (the user is editing as well, or checked out a different branch, and so forth)
anchor_check: exact
quiz:
  q: Perché una modifica di tipo CAS richiede che il vecchio testo corrisponda a quello presente nel file?
  a: Perché così la modifica viene applicata solo se il file non è cambiato nel frattempo e il contenuto citato è reale.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.468Z
---

# Modifica con verifica: controllare prima di scrivere

Un'edit di tipo CAS (check and set) chiede all'agente di indicare il testo vecchio e quello nuovo, e il sistema applica la modifica solo se il vecchio testo corrisponde ancora al contenuto reale del file. Questo serve per due ragioni. Primo, altri possono aver cambiato il file nel frattempo, per esempio un utente che lavora sullo stesso codice o un altro branch. Secondo, un modello linguistico può immaginare il contenuto di una riga e modificare qualcosa che non esiste. Il prezzo è che il modello deve riscrivere ogni volta il testo originale, consumando token e rischiando errori con caratteri speciali e spazi. ==La verifica protegge dalle modifiche concorrenti e dalle allucinazioni.==
