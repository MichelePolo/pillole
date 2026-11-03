---
id: b872d6-v1-02-design-documents-let-ideas-outlive-the
lang: en
kind: metodo
topics:
  - tecnologia
  - ai
subtopics:
  - architettura-software
  - modelli-linguistici
source:
  id: b872d6d47939
  title: Control the ideas, not the code
  site: antirez.com
  url: http://antirez.com/news/169
anchor: to use LLMs to write a DESIGN.md file where each data structure is described in human language
anchor_check: exact
quiz:
  q: Perché l'autore suggerisce di scrivere un documento di design che descriva le strutture dati?
  a: Perché chiunque possa capire le idee e il design di una struttura dati senza leggerne il codice.
prompt_version: v1
model: claude-haiku-5-5
created: 2026-11-03T07:01:20.955Z
---

# Design documents let ideas outlive the code

A design document that describes each data structure in plain language lets someone understand a system without reading its code. According to the author, such a file records the ideas a structure contains, its implementation tricks and its design. A future maintainer can open it, grasp the model, and then ask an agent what to change. The author considers this more useful than reviewing the code itself, since code is increasingly written by LLMs and changes often. ==The design document becomes the lasting artifact== of the work.
