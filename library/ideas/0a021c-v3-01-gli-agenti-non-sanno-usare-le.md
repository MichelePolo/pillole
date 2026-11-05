---
id: 0a021c-v3-01-gli-agenti-non-sanno-usare-le
lang: it
kind: dato
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: 0a021c995d76
  lang: en
  title: How well do agents use test and verification techniques?
  site: danluu.com
  url: https://danluu.com/agentic-testing/
anchor: agents tend to either just write the tests they would normally write, but inside a framework for a different type of test technique
anchor_check: exact
quiz:
  q: Perché nominare una tecnica di test a un agente non ne garantisce un uso efficace?
  a: Perché gli agenti usano la tecnica in modo superficiale, scrivendo i test abituali dentro il framework indicato, senza sfruttare ciò che rende la tecnica utile.
warnings:
  - titolo di 13 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.347Z
---

# Gli agenti non sanno usare le tecniche di test che gli si nominano

Chiedere a un agente di usare una specifica tecnica di test o una libreria non basta a migliorare il codice. Nella sperimentazione descritta, gli agenti usavano lo strumento indicato in modo superficiale, scrivendo di fatto i test abituali dentro un altro framework. Il nome della tecnica non trasmette il metodo che ne produce il valore. Secondo l'autore, ==la competenza di testing va mostrata o spiegata nel dettaglio, non solo nominata==, perché il modello ricade sul suo comportamento predefinito.
