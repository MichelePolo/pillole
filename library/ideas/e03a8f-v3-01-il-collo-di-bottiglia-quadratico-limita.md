---
id: e03a8f-v3-01-il-collo-di-bottiglia-quadratico-limita
lang: it
kind: concetto
topics:
  - ai
  - tecnologia
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
anchor: forward pass is O(n²) time complexity in training (the dreaded quadratic bottleneck)
anchor_check: exact
quiz:
  q: Perché i Transformer rallentano man mano che il contesto cresce?
  a: Perché ogni token deve confrontarsi con tutti i precedenti, e il costo di calcolo cresce con il quadrato della lunghezza della sequenza.
warnings:
  - titolo di 11 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-06T09:31:46.916Z
---

# Il collo di bottiglia quadratico limita i Transformer nei contesti lunghi

Nei Transformer ogni token può guardare tutti i token precedenti, quindi il costo di calcolo cresce con il quadrato della lunghezza della sequenza e la cache chiave-valore cresce linearmente in memoria. ==Con contesti molto lunghi il modello diventa progressivamente più lento e più costoso da eseguire.== Mitigazioni come l'attenzione a finestra scorrevole o FlashAttention riducono il problema, ma per memorie davvero lunghe serve un approccio diverso.
