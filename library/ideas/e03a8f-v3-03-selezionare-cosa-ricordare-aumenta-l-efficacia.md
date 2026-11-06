---
id: e03a8f-v3-03-selezionare-cosa-ricordare-aumenta-l-efficacia
lang: it
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
  - architettura-software
source:
  id: e03a8fbe8af2
  lang: en
  title: Mamba Explained
  author: Kola Ayonrinde
  site: The Gradient
  url: https://thegradient.pub/mamba-explained/
anchor: "selectivity: or the context-aware ability to focus on or filter out inputs into a sequential state"
anchor_check: exact
quiz:
  q: Che cosa rende selettivo un modello a spazio di stati?
  a: Le matrici che regolano cosa memorizzare e dimenticare dipendono dall'input, quindi variano a seconda del contesto.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.917Z
---

# Selezionare cosa ricordare aumenta l'efficacia del modello

Nei modelli selettivi i parametri che decidono cosa entra nello stato dipendono dal contesto, cioè dall'input che il modello sta leggendo. In questo modo il modello può scartare le informazioni irrilevanti già durante la memorizzazione, invece di conservare tutto e filtrare solo al momento del richiamo. ==La selettività è ciò che avvicina il modello a un buon equilibrio tra efficacia ed efficienza.== L'autore presenta questa come la tesi centrale dell'architettura Mamba.
