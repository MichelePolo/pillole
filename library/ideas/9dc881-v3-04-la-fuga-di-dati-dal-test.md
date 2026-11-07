---
id: 9dc881-v3-04-la-fuga-di-dati-dal-test
lang: it
kind: concetto
topics:
  - ai
  - matematica
subtopics:
  - probabilita-statistica
  - modelli-linguistici
source:
  id: 9dc881aa2545
  lang: en
  title: Why Doesn’t My Model Work?
  author: Michael Lones
  site: The Gradient
  url: https://thegradient.pub/why-doesnt-my-model-work/
anchor: A common one is data leakage. This happens when the model training pipeline has access to information it shouldn’t have access to
anchor_check: exact
quiz:
  q: Perché normalizzare i dati prima di separare il test set crea una fuga di informazioni?
  a: Perché i parametri di normalizzazione dipendono anche dai dati del test, quindi il modello riceve indirettamente informazioni su di essi durante l'addestramento.
warnings:
  - corpo di 58 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.408Z
---

# La fuga di dati dal test set falsa le prestazioni

Si ha data leakage quando la pipeline di addestramento accede a informazioni che non dovrebbe avere, in particolare dal test set. Anche operazioni apparentemente innocue, come normalizzare tutti i dati prima di dividerli, introducono conoscenza del test nel training. Il risultato è una stima delle prestazioni troppo ottimistica, che non si ripeterà quando il modello incontrerà dati nuovi.
