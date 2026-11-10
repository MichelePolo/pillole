---
id: 1dd896-v3-01-la-cpu-non-cresce-come-la
lang: it
kind: concetto
topics:
  - tecnologia
subtopics:
  - architettura-software
  - infrastrutture
source:
  id: 1dd89693deba
  lang: en
  title: How web bloat impacts users with slow devices
  site: danluu.com
  url: https://danluu.com/slow-device/
anchor: CPU performance for web apps hasn't scaled nearly as quickly as bandwidth
anchor_check: exact
quiz:
  q: Perché una pagina web molto veloce con la fibra può risultare inutilizzabile su un telefono economico?
  a: Perché il collo di bottiglia è la potenza di calcolo del processore, che è cresciuta molto meno della banda, e le pagine pesanti in CPU bloccano scroll e interazioni.
warnings:
  - titolo di 13 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-10T10:33:53.473Z
---

# La CPU non cresce come la banda, e il web se ne accorge

La larghezza di banda è cresciuta esponenzialmente, mentre la potenza di calcolo utile al web è cresciuta molto più lentamente. Per questo molte pagine moderne, che scorrono bene su una connessione veloce, diventano inutilizzabili su dispositivi economici, perché il collo di bottiglia non è più la rete ma il processore. ==Un sito può essere leggero sulla rete e comunque impraticabile sul telefono== di chi ha un dispositivo modesto. Chi progetta pagine dovrebbe quindi misurare il carico di CPU, non solo la dimensione del trasferimento.
