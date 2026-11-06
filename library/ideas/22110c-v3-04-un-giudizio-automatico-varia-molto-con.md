---
id: 22110c-v3-04-un-giudizio-automatico-varia-molto-con
lang: it
kind: dato
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 22110cbdc39c
  lang: en
  title: Senior SWE-Bench, napkin math, and winter tires
  site: danluu.com
  url: https://danluu.com/exercise-7/
anchor: The expected LLM-graded tastefulness result flips from the official result 23% of the time
anchor_check: exact
quiz:
  q: Perché un giudizio automatico della qualità del codice non è affidabile come misura?
  a: Perché la stessa valutazione può cambiare tra ripetizioni e tra modelli di valutazione, producendo esiti sbagliati in una quota rilevante dei casi.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.763Z
---

# Un giudizio automatico varia molto con il modello che lo esegue

Quando un modello linguistico valuta la qualità di un codice, il risultato può cambiare da una ripetizione all'altra e anche cambiando modello di valutazione. Secondo l'autore, in una valutazione l'esito cambiava in circa un caso su cinque anche con lo stesso modello e la stessa configurazione. Questo significa che un giudizio di qualità automatizzato può essere sbagliato in una quota non trascurabile dei casi. Quando non esiste un buon criterio numerico, meglio non inventare un numero finto che assegnarne uno privo di senso.
