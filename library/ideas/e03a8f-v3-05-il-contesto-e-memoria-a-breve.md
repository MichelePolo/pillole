---
id: e03a8f-v3-05-il-contesto-e-memoria-a-breve
lang: it
kind: concetto
topics:
  - ai
  - psicologia
subtopics:
  - modelli-linguistici
  - apprendimento-memoria
source:
  id: e03a8fbe8af2
  lang: en
  title: Mamba Explained
  author: Kola Ayonrinde
  site: The Gradient
  url: https://thegradient.pub/mamba-explained/
anchor: Transformer context is to Mamba states what short-term is to long-term memory
anchor_check: exact
quiz:
  q: Quale differenza c'è tra il contesto di un Transformer e lo stato di un modello a spazio di stati?
  a: Il contesto conserva le informazioni quasi integralmente per il breve periodo, mentre lo stato le comprime e le filtra per una memoria più lunga.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.918Z
---

# Il contesto è memoria a breve, lo stato è memoria a lungo

Nei Transformer il contesto funziona come memoria di lavoro, richiamabile quasi senza errori, mentre le informazioni apprese durante l'addestramento sono come un'eredità vaga. Nei modelli a stato, il contesto viene compresso e filtrato nello stato, che assomiglia a una memoria a lungo termine. ==La differenza sta in quanto e quanto fedelmente le informazioni vengono conservate.== L'autore usa questa analogia per descrivere come cambia il flusso dell'informazione.
