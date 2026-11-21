---
id: e2eb75-v3-01-il-calcolo-puo-diventare-una-dimostrazione
lang: it
kind: metodo
topics:
  - matematica
subtopics:
  - logica-fondamenti
source:
  id: e2eb75dd6415
  lang: it
  title: 'Problemi del millennio - Navier–Stokes: le soluzioni regolari possono "esplodere" anche senza forzante - Maddmaths!'
  author: Roberto Natalini
  site: maddmaths.simai.eu
  url: https://maddmaths.simai.eu/news-2/news-news-2/navier-stokes-20nov2026/
anchor: Un profilo approssimato è stato calcolato numericamente con il metodo di Newton.
anchor_check: exact
quiz:
  q: Perché il calcolo numerico da solo non basta a dimostrare un risultato matematico?
  a: "Un'approssimazione numerica non è una prova: serve dimostrare che gli errori sono controllati e che una soluzione esatta esiste vicino ad essa."
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:48.076Z
---

# Il calcolo può diventare una dimostrazione rigorosa

Una dimostrazione matematica può essere in parte affidata al calcolatore. Il metodo funziona così: si calcola numericamente una soluzione approssimata, poi si verifica con disuguaglianze esplicite che, vicino a quella approssimazione, esista una soluzione esatta. Il controllo di queste disuguaglianze avviene in aritmetica intervallare, che tiene sotto stretto controllo gli errori di arrotondamento dei numeri in virgola mobile. ==Il calcolo numerico diventa così una prova rigorosa==, a patto che il certificato numerico sia reso pubblico e che il calcolo possa essere ripetuto da altri. Il punto delicato resta la fiducia nel software e nei dati usati.
