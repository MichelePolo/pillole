---
id: 65396d-v1-02-weak-models-mimic-bug-finding-without
lang: en
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
  - sicurezza-allineamento
source:
  id: 65396d7e31ee
  title: AI cybersecurity is not proof of work
  site: antirez.com
  url: https://antirez.com/news/163
anchor: It's just pattern matching of bug classes on code that looks may have a problem
anchor_check: exact
quiz:
  q: Why can a weak model's bug report be unreliable even when it occasionally points at a real flaw?
  a: It matches suspicious-looking code to known bug classes without understanding how the issues combine, so its correct hits are largely accidental.
prompt_version: v1
model: claude-haiku-5-5
created: 2026-11-03T07:00:36.185Z
---

# Weak models mimic bug-finding without understanding it

Smaller models often claim to find serious vulnerabilities, but the author argues they are mostly matching patterns: they flag code that looks suspicious, such as a missing validation next to an integer overflow, without grasping why the two together create a real exploit. The result is hallucination, sometimes landing on a real problem by accident. This also explains a counterintuitive pattern: with the OpenBSD SACK bug, stronger models that do not find the true bug are less likely to claim one at all, because they hallucinate less. Real detection requires understanding the issue well enough to write an exploit, not just recognizing bug classes.
