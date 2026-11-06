---
id: 22110c-v3-03-le-soglie-rigide-distruggono-l-informazione
lang: it
kind: concetto
topics:
  - matematica
  - ai
subtopics:
  - probabilita-statistica
  - altro
source:
  id: 22110cbdc39c
  lang: en
  title: Senior SWE-Bench, napkin math, and winter tires
  site: danluu.com
  url: https://danluu.com/exercise-7/
anchor: The benchmark has these continuous scores and then it introduces threshold effects by requiring a strict cutoff
anchor_check: exact
quiz:
  q: Perché una soglia netta può rendere meno affidabile un punteggio già rumoroso?
  a: Perché piccole differenze vicino alla soglia producono esiti opposti, amplificando il rumore che la misura contiene già.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.763Z
---

# Le soglie rigide distruggono l'informazione nei punteggi rumorosi

Quando un punteggio continuo viene convertito in un esito binario con una soglia netta, due risultati quasi identici possono finire uno promosso e l'altro bocciato. Se la misura è già rumorosa, la soglia rende il risultato ancora meno affidabile. Una funzione continua, anche se arbitraria, evita questo effetto e rende più visibile quanto siano arbitrari i pesi. L'autore sostiene che le funzioni con discontinuità vengano spesso scelte proprio perché nascondono questa arbitrarietà.
