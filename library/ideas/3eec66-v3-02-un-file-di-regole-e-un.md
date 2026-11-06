---
id: 3eec66-v3-02-un-file-di-regole-e-un
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: 3eec660b664a
  lang: en
  title: Implementing a clear room Z80 / ZX Spectrum emulator with Claude Code
  site: antirez.com
  url: http://antirez.com/news/160
anchor: make sure the agent has a markdown file with the rules of how to perform the coding tasks, and a trace of what it is doing
anchor_check: exact
quiz:
  q: Perché conviene tenere un file con regole e un registro di avanzamento per un agente di programmazione?
  a: Perché l'agente dimentica le istruzioni dopo la compattazione del contesto, e il registro gli permette di riprendere il lavoro sul giusto binario.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.947Z
---

# Un file di regole e un diario di lavoro per l'agente

Un metodo pratico consiste nel mettere nel progetto un file markdown con le regole del lavoro (test prima dei commit, commenti chiari, niente richieste di conferma) e un registro di lavoro aggiornato che elenca cosa è stato fatto e cosa manca. Il file va riletto spesso, perché l'agente tende a dimenticare le istruzioni quando il contesto viene compattato. Secondo l'autore, questo accorgimento compensa un limite specifico dei modelli linguistici e rende il lavoro verificabile passo dopo passo.
