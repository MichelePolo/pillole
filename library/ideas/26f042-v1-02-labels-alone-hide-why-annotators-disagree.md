---
id: 26f042-v1-02-labels-alone-hide-why-annotators-disagree
lang: en
kind: metodo
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: 26f04217df04
  title: Disentangling Sources of Annotator Disagreement in Toxicity Detection – CCC meeting
  site: ccc.di.unito.it
  url: https://ccc.di.unito.it/2026/10/12/not-all-disagreements-are-equal-disentangling-sources-of-annotator-disagreement-in-toxicity-detection/
anchor: moves beyond conventional categorical and scalar toxicity labels
anchor_check: exact
quiz:
  q: What does the proposed annotation scheme record beyond a simple toxicity label?
  a: Multiple plausible judgments, their supporting textual evidence, interpretive mechanisms, and propositional content.
prompt_version: v1
model: claude-haiku-5-5
created: 2026-11-03T07:01:54.515Z
---

# Labels alone hide why annotators disagree

Standard toxicity datasets record a single label, categorical or scalar, which hides the reasons behind each judgment. The authors propose a richer scheme in which annotators list several plausible judgments, the textual evidence supporting each, the interpretive mechanism they used, and the propositional content at stake. With these traces, disagreements that look identical under simple labels can be told apart. A label alone is a weak record of a judgment; recording the reasoning makes it possible to test which disagreements are reducible and which are real.
