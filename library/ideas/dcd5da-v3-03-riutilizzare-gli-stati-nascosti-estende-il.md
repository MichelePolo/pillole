---
id: dcd5da-v3-03-riutilizzare-gli-stati-nascosti-estende-il
lang: it
kind: concetto
topics:
  - ai
subtopics:
  - modelli-linguistici
source:
  id: dcd5da018bf2
  lang: en
  title: The Transformer Family
  author: Lilian Weng
  site: Lil'Log
  url: https://lilianweng.github.io/posts/2020-04-07-the-transformer-family/
anchor: reusing hidden states between segments
anchor_check: exact
quiz:
  q: Che cosa permette a Transformer-XL di dipendere da contesti più lunghi del proprio segmento?
  a: Il riutilizzo degli stati nascosti dei segmenti precedenti, usati come contesto aggiuntivo senza propagare i gradienti.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-22T09:53:05.491Z
---

# Riutilizzare gli stati nascosti estende il contesto oltre il segmento

Il Transformer classico elabora il testo in segmenti di lunghezza fissa, senza far passare informazioni tra un segmento e l'altro. Transformer-XL risolve il problema mantenendo gli stati nascosti del segmento precedente e usandoli come contesto per il successivo, senza propagare i gradienti. In questo modo la finestra di attenzione si allunga su più segmenti, e si evita di rielaborare da zero i token sovrapposti. ==Il contesto si estende oltre il segmento corrente grazie alla memoria degli stati precedenti.==
