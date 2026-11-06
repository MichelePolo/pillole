---
id: 0ee0b8-v3-02-le-trasformazioni-non-creano-informazione-possono
lang: it
kind: concetto
topics:
  - matematica
  - ai
subtopics:
  - probabilita-statistica
  - modelli-linguistici
source:
  id: 0ee0b8f51ebf
  lang: en
  title: Do text embeddings perfectly encode text?
  author: Jack Morris
  site: The Gradient
  url: https://thegradient.pub/text-embedding-inversion/
anchor: functions cannot add information to an input, they can only sustain or decrease the amount of information available
anchor_check: exact
quiz:
  q: Se una rete neurale trasforma un input in più strati, può aumentare l'informazione contenuta nel risultato rispetto all'input?
  a: No, secondo il principio di elaborazione dei dati ogni trasformazione può solo mantenere o ridurre l'informazione presente nell'input.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.812Z
---

# Le trasformazioni non creano informazione, possono solo perderla

Il principio di elaborazione dei dati afferma che una funzione non può aggiungere informazione al proprio input, può solo conservarla o ridurla. Secondo l'autore, questo vale anche per le reti neurali: gli strati più profondi costruiscono rappresentazioni più astratte ma non aggiungono nulla sul mondo che non fosse già nell'input. Le non linearità, come la funzione ReLU che azzera i valori negativi, distruggono inoltre parte dell'informazione.
