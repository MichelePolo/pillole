---
id: bd2a1c-v3-04-ricordare-i-segmenti-precedenti-estende-il
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: bd2a1c61491f
  lang: en
  title: The Transformer Family Version 2.0
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/
anchor: Transformer-XL (Dai et al., 2019; “XL” means “extra long”) modifies the architecture to reuse hidden states between segments with an additional memory
anchor_check: exact
quiz:
  q: In che modo Transformer-XL estende la dipendenza dal contesto passato?
  a: Riutilizza gli stati nascosti dei segmenti precedenti come memoria, permettendo al modello di considerare informazioni di segmenti più lontani.
warnings:
  - corpo di 57 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.451Z
---

# Ricordare i segmenti precedenti estende il contesto

Transformer-XL riutilizza gli stati nascosti dei segmenti precedenti come memoria aggiuntiva, così l'informazione può fluire da un segmento al successivo. Per non confondere le posizioni tra segmenti, questa architettura usa codifiche posizionali relative invece di quelle assolute. ==Riutilizzare la memoria del passato permette al modello di dipendere da contesti molto più lontani senza ricalcolare tutto da zero==.
