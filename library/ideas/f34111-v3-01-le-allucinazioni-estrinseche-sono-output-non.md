---
id: f34111-v3-01-le-allucinazioni-estrinseche-sono-output-non
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: f341118d2274
  lang: en
  title: Extrinsic Hallucinations in LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2024-07-07-hallucination/
anchor: "Extrinsic hallucination: The model output should be grounded by the pre-training dataset."
anchor_check: exact
quiz:
  q: Che cosa distingue un'allucinazione estrinseca da una allucinazione rispetto al contesto fornito?
  a: L'allucinazione estrinseca riguarda contenuti non ancorati alla conoscenza del mondo, mentre quella in-context contraddice il testo fornito.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T09:37:00.630Z
---

# Le allucinazioni estrinseche sono output non ancorati alla realtà

Il termine allucinazione indica spesso errori generici, ma qui si intende un caso preciso: il modello produce contenuti inventati che non sono sostenuti né dal contesto fornito né dalla conoscenza del mondo. Un modello fedele dovrebbe quindi essere fattuale e, quando non conosce una risposta, dichiarare di non saperla. Questa distinzione permette di misurare il problema e di progettare rimedi mirati, invece di trattare ogni errore allo stesso modo.
