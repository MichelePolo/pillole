---
id: 7a63f9-v3-06-le-permutazioni-dei-neuroni-non-cambiano
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - modelli-linguistici
  - teoria-dei-giochi
source:
  id: 7a63f933bcd6
  lang: en
  title: "Shape, Symmetries, and Structure: The Changing Role of Mathematics in Machine Learning Research"
  author: Henry Kvinge
  site: The Gradient
  url: https://thegradient.pub/shape-symmetry-structure/
anchor: we can permute activations before entering the non-linearity
anchor_check: exact
quiz:
  q: Perché permutare le attivazioni di uno strato non cambia il comportamento della rete?
  a: Perché la permutazione viene annullata dalla permutazione inversa dopo la non linearità, quindi la funzione del modello resta identica.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.388Z
---

# Le permutazioni dei neuroni non cambiano il modello

In una rete neurale si possono permutare le attivazioni di uno strato prima della non linearità e poi ripermutarle dopo, senza alterare la funzione del modello. Questo significa che esistono un numero enorme di reti con pesi diversi che si comportano allo stesso modo sui dati. Secondo l'autore, questa simmetria aiuta a capire il paesaggio della funzione di perdita, che potrebbe essere molto meno non convesso di quanto appaia, perché due reti possono essere collegate da un percorso a bassa perdita se si considera una loro permutazione.
