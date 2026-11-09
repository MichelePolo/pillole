---
id: b041a8-v3-02-un-accumulatore-xor-verifica-la-reciprocita
lang: it
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
  - privacy-sicurezza
source:
  id: b041a8829559
  lang: en
  title: Human coders are still better than LLMs
  site: antirez.com
  url: http://antirez.com/news/153
anchor: We just xor the output of murmur-128(S:A:B:X) into the 128 bit register
anchor_check: exact
quiz:
  q: Perché un collegamento visto due volte non lascia traccia nel registro XOR finale?
  a: Perché due XOR identici si annullano, quindi il registro torna a zero se ogni collegamento compare esattamente due volte.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-09T09:56:12.610Z
---

# Un accumulatore XOR verifica la reciprocità dei collegamenti

Per controllare che ogni collegamento tra nodi sia reciproco senza scansioni quadratiche, si può fare XOR di ogni collegamento A:B:X in un registro fisso: un collegamento visto due volte si annulla. Se alla fine il registro non è zero, esiste un collegamento non reciproco. Il metodo è veloce e non richiede tabelle hash. Per ridurre il rischio di collisioni, l'autore propone di applicare prima una funzione hash con un seme casuale, così che i valori non si cancellino facilmente per caso.
