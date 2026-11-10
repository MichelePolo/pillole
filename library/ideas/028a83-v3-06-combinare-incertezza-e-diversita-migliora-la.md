---
id: 028a83-v3-06-combinare-incertezza-e-diversita-migliora-la
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 028a8389cdec
  lang: en
  title: "Learning with not Enough Data Part 2: Active Learning"
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2022-02-20-active-learning/
anchor: Often we want to select uncertain but also highly representative samples.
anchor_check: exact
quiz:
  q: Perché conviene combinare incertezza e rappresentatività nella scelta dei campioni?
  a: Perché scegliere solo i campioni più incerti può dare esempi molto simili tra loro, mentre la rappresentatività assicura diversità nel lotto.
warnings:
  - corpo di 55 parole (60-120)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.412Z
---

# Combinare incertezza e diversità migliora la selezione

Molti criteri di selezione non si escludono a vicenda: scegliere solo gli esempi più incerti può produrre campioni molto simili tra loro. Per questo molti metodi combinano l'incertezza con la rappresentatività, selezionando esempi sia informativi sia diversi. Secondo gli autori di questi approcci ibridi, un lotto di etichettatura funziona meglio quando bilancia queste due proprietà.
