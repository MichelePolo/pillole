---
id: f5a8a3-v3-02-le-decisioni-fuori-distribuzione-richiedono-giudizio
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - agenti
  - modelli-linguistici
source:
  id: f5a8a3aaa7bf
  lang: en
  title: There's no point at which turning your brain off will work
  site: danluu.com
  url: https://danluu.com/brain-off/
anchor: A place where it's more obvious you need to make decisions is when the agent runs into something that's out of distribution.
anchor_check: exact
quiz:
  q: Perché un agente LLM può comportarsi male davanti a un problema fuori distribuzione?
  a: Perché le sue risposte si basano su ciò che ha visto in addestramento; davanti a situazioni insolite può dare spiegazioni plausibili ma errate, mentre una persona ragionevole ragiona meglio.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-05T07:14:27.509Z
---

# Le decisioni fuori distribuzione richiedono giudizio umano

Gli agenti falliscono quando incontrano problemi insoliti rispetto ai dati di addestramento, come giochi da tavolo moderni poco diffusi. In questi casi forniscono spiegazioni che suonano plausibili ma sono sbagliate per chi conosce davvero il gioco. Un essere umano ragionevole, anche senza esperienza precedente, può muoversi meglio. Per ottenere buoni risultati oggi bisogna riconoscere questi casi e gestirli a mano.
