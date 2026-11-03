---
id: fb1dbf-v1-02-experimental-branches-can-be-part-of
lang: en
kind: metodo
topics:
  - tecnologia
subtopics:
  - architettura-software
source:
  id: fb1dbfd32b33
  title: Not just development, distribution of software may change as well
  site: antirez.com
  url: http://antirez.com/news/170
anchor: publishing a branch with this model implementation is a good middle ground
anchor_check: exact
quiz:
  q: How can publishing an experimental branch help a project decide whether to merge a new feature?
  a: It lets the community test and refine the work together, so the merge decision rests on shared evidence rather than one maintainer's early opinion.
prompt_version: v1
model: claude-haiku-5-5
created: 2026-11-03T07:01:05.592Z
---

# Experimental branches can be part of the project

Keeping only a main branch and an unstable branch is not enough, according to the author. Many experimental branches can be a regular part of a project. Take a new model implementation, for instance: its quality is still uncertain, and nobody can yet say whether it will be good enough. Publishing it as a branch lets people test it and refine it with their own coding agents. The community can then form a shared judgment about whether it deserves to be merged, instead of relying on a single maintainer's opinion early on.
