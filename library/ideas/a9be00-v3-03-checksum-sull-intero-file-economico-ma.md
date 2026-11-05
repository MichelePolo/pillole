---
id: a9be00-v3-03-checksum-sull-intero-file-economico-ma
lang: it
kind: concetto
topics:
  - tecnologia
  - ai
subtopics:
  - architettura-software
  - agenti
source:
  id: a9be0014ddbc
  lang: en
  title: Alternatives for the EDIT tool of LLM agents
  site: antirez.com
  url: http://antirez.com/news/166
anchor: we fail the edit even if *unrelated* changes happened, so there is a strong tradeoff at play
anchor_check: exact
quiz:
  q: Qual è lo svantaggio principale di un checksum calcolato sull'intero file rispetto a quelli per riga?
  a: La modifica fallisce anche quando cambiano righe non correlate, quindi l'agente deve rileggere e riprovare più spesso.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.468Z
---

# Checksum sull'intero file: economico ma rigido

Un'alternativa è usare un unico checksum CRC32 per tutto il file, con i numeri di riga come riferimento. Il vantaggio è il risparmio di token, perché non servono etichette per ogni riga, e permette di indicare intervalli come 10:23. Lo svantaggio è sostanziale: la modifica fallisce anche quando sono cambiate righe non correlate a quella che l'agente vuole toccare, quindi l'agente deve rileggere il file più spesso. Il ricalcolo del checksum costa poco per file di dimensione ragionevole. ==Il vero compromesso è tra risparmio di token e tolleranza ai cambiamenti estranei.==
