---
id: ce6829-v3-03-i-trigger-universali-funzionano-su-input
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: ce68292451aa
  lang: en
  title: Adversarial Attacks on LLMs
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/
anchor: they probably exploit biases effectively in the training data that gets baked into the global model behavior
anchor_check: near
quiz:
  q: Perché i trigger universali possono trasferirsi tra modelli diversi?
  a: Probabilmente perché sfruttano distorsioni dei dati di addestramento presenti in modo simile nei modelli.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.878Z
---

# I trigger universali funzionano su input diversi

Gli Universal Adversarial Triggers sono brevi sequenze di token che, concatenate come prefisso o suffisso a qualsiasi input, orientano il modello verso una risposta voluta. Sono indipendenti dall'input e trasferibili tra modelli con embedding e tokenizzazione diversi, il che suggerisce che sfruttino distorsioni presenti nei dati di addestramento, incorporate nel comportamento globale del modello. Secondo l'autore, è questa la ragione più plausibile della loro efficacia.
