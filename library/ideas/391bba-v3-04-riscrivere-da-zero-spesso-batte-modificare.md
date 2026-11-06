---
id: 391bba-v3-04-riscrivere-da-zero-spesso-batte-modificare
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - agenti
  - altro
source:
  id: 391bba215af0
  lang: en
  title: How does programming language affect token efficiency and correctness?
  site: danluu.com
  url: https://danluu.com/pl-tokens/
anchor: you're often better off throwing away a chunk of code and having an LLM re-write it from scratch
anchor_check: exact
quiz:
  q: Perché a volte conviene riscrivere da zero un pezzo di codice generato da un LLM invece di modificarlo?
  a: Perché il contesto accumulato può intrappolare il modello in una soluzione sbagliata, che la semplice modifica non corregge.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.840Z
---

# Riscrivere da zero spesso batte modificare il codice esistente

Con gli LLM, buttare via una parte di codice e farla riscrivere da zero spesso dà risultati migliori che chiedere al modello di modificarla o riscriverla sul posto. Il contesto accumulato può intrappolare l'agente in una soluzione sbagliata, e ripulire il contesto non elimina un artefatto già difettoso. Per questo, quando il risultato è incerto, conviene provare più volte e scegliere il migliore. ==Il contesto accumulato può intrappolare l'agente in una cattiva soluzione.== Il costo sta nei token, ma spesso ne vale la pena.
