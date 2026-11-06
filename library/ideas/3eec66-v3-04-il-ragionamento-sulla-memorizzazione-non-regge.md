---
id: 3eec66-v3-04-il-ragionamento-sulla-memorizzazione-non-regge
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 3eec660b664a
  lang: en
  title: Implementing a clear room Z80 / ZX Spectrum emulator with Claude Code
  site: antirez.com
  url: http://antirez.com/news/160
anchor: LLMs can memorize certain over-represented documents and code
anchor_check: exact
quiz:
  q: Perché, secondo l'autore, il lavoro normale di un LLM non equivale a copiare il codice visto in addestramento?
  a: Perché il modello combina conoscenze diverse per produrre codice nuovo che usa tecniche note, invece di riprodurre copie di codice già visto, salvo rari testi molto ripetuti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.948Z
---

# Il ragionamento sulla memorizzazione non regge per il codice nuovo

L'autore sostiene che un compito meccanico come scrivere un assemblatore, con una documentazione adeguata, dovrebbe riuscire anche a un agente AI. Secondo lui, questo contraddice l'idea che i modelli memorizzino tutto il materiale di addestramento e lo ricostruiscano. I modelli possono ricordare testi molto frequenti e riprodurli se richiesto, ma nel lavoro normale tendono a combinare conoscenze diverse in codice nuovo, che usa tecniche note senza copiare un originale.
