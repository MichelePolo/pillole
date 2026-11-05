---
id: 246289-v3-05-il-dato-ripetuto-vale-sempre-meno
lang: it
kind: concetto
topics:
  - ai
  - economia
subtopics:
  - modelli-linguistici
  - macroeconomia
source:
  id: 2462892d260e
  lang: en
  title: Scaling Laws, Carefully
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2026-06-24-scaling-laws/
anchor: a token’s value decays exponentially as it is repeated
anchor_check: exact
quiz:
  q: Che cosa succede al valore di un token quando viene ripetuto più volte durante l'addestramento?
  a: Il suo valore decade in modo esponenziale, quindi ogni ripetizione aggiunge meno di quella precedente.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.473Z
---

# Il dato ripetuto vale sempre meno

Quando un dataset di qualità limitata viene ripetuto più volte durante l'addestramento, ogni ripetizione aggiunge meno valore della precedente. Secondo l'autore, questo è un modo di modellare il dato con un valore che decade in modo esponenziale verso un limite. La ripetizione può anche produrre comportamenti irregolari, come un loss che peggiora a metà dell'addestramento prima di migliorare di nuovo. Nel regime in cui i dati unici scarseggiano, questo diventa un vincolo reale.
