---
id: 22110c-v3-01-i-benchmark-tradizionali-misurano-spesso-cose
lang: it
kind: metodo
topics:
  - tecnologia
  - matematica
subtopics:
  - architettura-software
  - altro
source:
  id: 22110cbdc39c
  lang: en
  title: Senior SWE-Bench, napkin math, and winter tires
  site: danluu.com
  url: https://danluu.com/exercise-7/
anchor: there's no data dependency between the loop iterations, so the memory reads here happen in parallel
anchor_check: exact
quiz:
  q: Perché un ciclo di letture di memoria senza dipendenze tra un'iterazione e l'altra non misura la latenza?
  a: Perché la CPU può eseguire più accessi in parallelo, quindi il tempo medio misurato non riflette la latenza di un singolo accesso.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.761Z
---

# I benchmark tradizionali misurano spesso cose diverse da quelle che dicono

Un benchmark può sembrare valido nel titolo e nei numeri, ma il codice che misura davvero può fare un'altra cosa. Un esempio tipico è un ciclo di letture casuali senza dipendenze tra un'iterazione e l'altra: la CPU esegue più accessi in parallelo, quindi il tempo misurato non è la latenza. Per misurare una latenza occorre introdurre una dipendenza che impedisca la sovrapposizione. Controllare il codice, non solo la tabella dei risultati, è il passo che separa una misura utile da una cifra sbagliata.
