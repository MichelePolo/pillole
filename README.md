# Pillole · passo 1: il distillatore

Trasforma articoli e testi in **idee atomiche** salvate come file Markdown, e ti aiuta a tarare il prompt finché scarti meno di un'idea su cinque. È il primo passo del progetto descritto nel documento *Deepstash — analisi funzionale e progetto*, sezione 13.

## Requisiti

- Node.js 20.12 o successivo
- Una chiave API di Claude ([Console](https://platform.claude.com/)); conviene impostare un limite di spesa mensile

## Installazione

```bash
npm install
cp .env.example .env    # poi inserisci ANTHROPIC_API_KEY
```

## Il ciclo del passo 1

1. Metti in `sources.txt` 10 articoli che hai letto davvero, mescolando AI, filosofia e tecnologia, italiano e inglese.
2. Controlla estrazione e costi senza spendere nulla:
   ```bash
   npm run distill -- --dry-run
   ```
3. Distilla:
   ```bash
   npm run distill
   ```
   Alla fine del giro `distill` controlla i duplicati delle idee nuove: per ognuna gli embedding scelgono le 5 idee più vicine in biblioteca (più le sorelle della stessa fonte) e Haiku giudica se ripete la stessa affermazione. I duplicati finiscono in `library/reviews.jsonl` come scartati in automatico (`"by": "auto"`) e non arrivano alla revisione. Costa circa un decimo di centesimo per fonte. Il controllo è prudente: rifatto sulle 95 idee v3 trova 2 dei 4 duplicati scartati a mano e non scarta nessuna idea tenuta. `--no-dedup` lo salta; `npm run dedup` lo rilancia sulle idee non ancora riviste.
4. Rivedi ogni idea dal terminale: `k` la tieni, `d` la scarti indicando il motivo, `s` la salti, `q` esci.
   ```bash
   npm run review
   npm run review -- --auto   # ricontrolla gli scarti automatici: con k l'idea torna nella biblioteca
   ```
5. Guarda il tasso di scarto per versione del prompt:
   ```bash
   npm run stats
   ```
6. Se scarti il 20% o più, correggi `src/prompt.ts` partendo dal motivo più frequente, incrementa `PROMPT_VERSION` in `src/config.ts` (per esempio `v2`) e ridistilla le stesse fonti dalla cache:
   ```bash
   npm run distill -- --force
   npm run review
   ```
   Le idee di ogni versione restano separate, così puoi confrontare v1 e v2 sulle stesse fonti.

   Se la nuova versione non rende vecchie le idee già fatte (per esempio aggiunge solo argomenti al vocabolario, come `v3`), mettila in `COMPATIBLE_PROMPT_VERSIONS`: l'app continua a pubblicare le idee delle versioni compatibili e `distill` non ridistilla le fonti già fatte con una di queste, se non con `--force`.

### Dove intervenire per ogni motivo di scarto

| Motivo | Cosa significa | Regola del prompt da rafforzare |
| --- | --- | --- |
| vago | Non si capisce cosa sostiene | 1 e 3: un solo concetto, titolo come affermazione |
| banale | Lo sapevi già | 8: meno idee, niente ovvio |
| effimero | È una notizia, non un'idea | 7: filtro di durata |
| infedele | Non dice ciò che dice la fonte | 5, 6 e 13; prova anche `--think` o `--model claude-sonnet-5-5` |
| duplicato | Ripete un'altra idea | 8; quelli evidenti li scarta già il controllo automatico dopo `distill` |
| forma | Lunghezza, lingua o stile sbagliati | 2, 3 e 4 |

## Cosa produce

```
library/
  ideas/        un file .md per idea: è la libreria che leggerà la PWA
  sources/      cache dei testi estratti (esclusa da git)
  reviews.jsonl le tue revisioni
  runs.jsonl    token e costo di ogni chiamata
```

Le idee sono sempre in italiano, anche quando la fonte è in inglese; solo `anchor` resta nella lingua originale, perché deve combaciare con il testo della fonte. Ogni idea ha un frontmatter YAML con lingua dell'idea (`lang`) e della fonte (`source.lang`), tipo, argomenti, fonte, quiz e due controlli automatici:

- **anchor_check**: verifica che la frase citata come appoggio esista davvero nella fonte (`exact`, `near` o `missing`). Un `missing` è il segnale più rapido di un'idea inventata.
- **warnings**: titolo oltre le 10 parole (il prompt ne chiede al massimo 8), corpo fuori dall'intervallo 60–120 parole, elenchi o HTML nel corpo.

Il corpo può contenere `==evidenziazioni==`, che mdlib-pure renderizza con il plugin `mark`.

## Costi

La chiamata sincrona a Claude Haiku 5.5 costa 0,10 $ per milione di token in ingresso e 0,50 $ in uscita, per prompt fino a 100.000 token. Una voce lunga della Stanford Encyclopedia of Philosophy sono circa 34.000 token, cioè meno di mezzo centesimo; 10 articoli costano pochi centesimi. Il costo reale di ogni chiamata finisce in `runs.jsonl`. Il job notturno usa l'API batch, che costa la metà.

## Note di sicurezza

Il testo delle fonti arriva dal web ed è trattato come dati: il prompt chiede al modello di ignorare eventuali istruzioni contenute nella pagina, e un corpo con HTML viene segnalato in revisione. In più mdlib-pure non interpreta HTML grezzo.

## Passo 2: il lettore

La PWA in `app/` mostra le idee una card alla volta: **swipe a destra salva, a sinistra scarta** (anche con le frecce della tastiera o i pulsanti), con 5 secondi per annullare. Le idee salvate stanno nella scheda *Salvate*. ▶ Ascolta legge la card con le voci italiane del sistema, e dopo la prima apertura l'app funziona offline.

```bash
cd app
npm install
npm run dev       # rigenera public/ideas.json dalla libreria e apre l'app
npm run build     # build di produzione in app/dist, con service worker
```

`npm run index` costruisce `public/ideas.json` con le idee delle versioni compatibili del prompt (per ogni fonte, la più recente), escluse quelle scartate in `npm run review`. Salvataggi, scarti e ogni evento (con origine e tempo sulla card) restano nel browser, in IndexedDB: sono i dati da cui partiranno la selezione del passo 3 e le metriche.

## Passo 3: la selezione

L'app non mostra più tutte le idee in fila ma una **pillola** di 6 card al giorno, poi *Per oggi hai finito* (con un'uscita discreta: *Un'altra pillola*). Ogni card mostra il motivo della scelta: *simile a «…»*, *esplorazione*, *ti interessa*, *evergreen*.

```bash
npm run embed     # embedding delle idee nuove: di solito li ha già calcolati distill (il primo avvio scarica ~120 MB di modello)
cd app && npm run dev
```

- **Embedding**: `multilingual-e5-small` con Transformers.js, sul PC e mai sul telefono, in `library/embeddings/`. `build-index` li centra (sottrae la media della libreria) prima di scriverli in `ideas.json`: grezzi, i coseni di e5 stanno tutti tra 0,78 e 0,86.
- **Profilo** (`app/src/profile.ts`): ricostruito a ogni apertura dagli eventi in IndexedDB. Una Beta per argomento (partenza 2/1) e per sotto-argomento (1/1): salvataggio +1 al successo, scarto rapido (sotto 4 s) +1 all'insuccesso, scarto dopo la lettura +0,5. Contatori con emivita di 30 giorni; due medie degli embedding salvati, lenta (90 giorni) e veloce (3 giorni).
- **Pillola** (`app/src/pill.ts`): gusto campionato con Thompson sampling + 0,5 × somiglianza − 0,7 × ridondanza, più le regole della sezione 13: almeno 2 card di filosofia, penalità per la stessa fonte, bonus per le card ponte. Tutti i pesi sono costanti in cima ai due file.
- **Temi** (`app/src/Themes.tsx`): al primo accesso l'app si apre qui, con un benvenuto e *Inizia*; dalla volta dopo atterra sulla pillola. Nella scheda *Temi* si scelgono fino a 6 dei 13 argomenti del vocabolario (`src/vocabulary.ts`), da AI e filosofia a fisica, biologia, letteratura e cinema. Le idee dei temi scelti hanno un bonus di +3, più dell'intera escursione degli altri termini: quelle fuori tema entrano solo per completare la pillola, con il motivo *fuori dai tuoi temi*. La quota di filosofia vale solo se la filosofia è tra i temi. Cambiando temi a pillola iniziata, le card già decise restano e le altre si ricompongono. Etichette e tinte sono in `app/src/themes.ts`; `npm run index` si ferma se un argomento non ha il suo tema.

## Passo 4: il ripasso

Dopo le 6 idee nuove, la pillola mette in coda fino a 3 **ripassi** tra le idee salvate: card quiz con l'etichetta *Ripasso* e *Ti era piaciuto* (il primo ritorno di un'idea) o *Ti ricordi?* (i successivi). Si prova a rispondere, si scopre la risposta con l'idea completa e si vota: *Non ricordavo · A fatica · Ricordavo · Facile*, con il prossimo intervallo scritto sul pulsante. Da tastiera: spazio per la risposta, 1-4 per il voto.

- **Pianificazione** (`app/src/reviews.ts`): [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) senza passi nella stessa giornata (Ricordavo: 3, 14, 57, 196 giorni…). Un'idea salvata entra in ripasso dal giorno dopo.
- **La coda**: 3 ripassi al giorno in tutto (anche con *Un'altra pillola*), scelti a caso tra quelli scaduti, preferendo fonti e temi diversi tra loro; un ripasso scaduto da più di 10 giorni esce senza tornare. Non serve ripassare tutto: con chi salva molto la coda non si smaltisce, ma il ripasso resta leggero.
- **Salvate**: con scroll infinito (15 idee alla volta, le successive caricate prima di arrivare in fondo, più un pulsante *Mostra altre* per tastiera e screen reader); le idee ripassate hanno l'etichetta *Ripassata* e, aperte, il pulsante *Apri il ripasso* con la card quiz in sola lettura (un voto da lì sposterebbe la pianificazione).
- **Stato**: ogni voto è un evento `review` nel registro; le schede FSRS si ricostruiscono dagli eventi a ogni apertura, come il profilo. Togliere un'idea dalle salvate la toglie dal ripasso.
- I ripassi non toccano il profilo dei gusti: non ricordare un'idea non vuol dire che non ti interessi.

## Usarla sul telefono

L'app si pubblica su Cloudflare Workers come static assets (gratis, HTTPS: serve per installarla e usarla offline). Cloudflare Pages è confluito in Workers, quindi non si usano i comandi `wrangler pages`.

L'indirizzo è `https://pillole.michele-polo.workers.dev`: aprilo dal telefono e aggiungilo alla schermata Home.

- **Al rilascio**: unire la PR `chore(main): release x.y.z` pubblica da sola l'app costruita da `main` (workflow `deploy`).
- **A mano**: le idee nuove entrano con un `chore:`, che non produce release. Per pubblicarle subito: *Actions → deploy → Run workflow* su `main`, oppure `gh workflow run deploy.yml`.
- **Dal PC**, se serve: `cd app && npx wrangler login` (una volta sola), poi `npm run deploy`.

Il workflow usa il secret `CLOUDFLARE_API_TOKEN` (token con il modello *Edit Cloudflare Workers*) e la variabile `CLOUDFLARE_ACCOUNT_ID`.

- **I dati restano nel browser del telefono** (IndexedDB) e non si sincronizzano con il PC fino al passo 6. Usa un solo dispositivo, e non cancellare i dati del sito.
- **Esporta dati**, in fondo alla scheda *Salvate*, scarica (o condivide, sul telefono) un JSON con eventi, stato e pillola corrente: è il file da cui tarare i pesi della selezione.
- Chiunque abbia l'indirizzo vede le card, che sono comunque già pubbliche in questo repository. Per un accesso solo tuo: Cloudflare Access, gratuito.

## Il job notturno

Ogni notte GitHub Actions (workflow `nightly`, alle 3:17 italiane) porta idee nuove dai feed di `feeds.txt`:

1. `npm run feeds` sceglie per ogni feed fino a 3 articoli nuovi, i più recenti (meno se la riga del feed ha `max=N`: i feed di AI e tecnologia ne portano uno, per bilanciare i temi). Esclude video, podcast e articoli già in biblioteca. Li segna come visti in `library/feeds.json`.
2. `npm run distill -- --batch` li distilla con l'[API batch](https://platform.claude.com/docs/en/build-with-claude/batch-processing), a metà prezzo: la risposta arriva in qualche minuto, al massimo in 5 ore. Alla fine calcola gli embedding e scarta i duplicati.
3. Il job apre una PR `chore: idee della notte del …` con le idee nuove e il registro del giro.

Per rivedere le idee: `git switch chore/notte-…`, poi `npm run review`, poi commit e push. Il push fa partire la CI, che nelle PR aperte dal bot non parte da sola. Poi unisci la PR e pubblica l'app (*Actions → deploy → Run workflow*). Finché la PR della notte resta aperta, il giro successivo si salta: le revisioni non si accumulano e gli stessi articoli non vengono scelti due volte.

- **A mano**: *Actions → nightly → Run workflow*, anche con meno articoli per feed. In locale si fa lo stesso con `npm run feeds -- --out coda.txt` e poi `npm run distill -- --batch coda.txt`.
- **Costi**: ogni articolo costa circa 0,002 $ con il batch, più circa 0,001 $ di controllo dei duplicati. Con 21 feed e 3 articoli ciascuno, il primo giro costa circa 0,20 $; poi i feed portano solo gli articoli nuovi.
- **Secret**: `ANTHROPIC_API_KEY` nelle impostazioni del repository.
- **Fonti che rifiutano i lettori automatici**: con un 403 o una pagina anti-bot (testo sotto i 1.500 caratteri) l'articolo si salta e resta visto. Prima di aggiungere un feed, prova un suo articolo con `npm run distill -- --dry-run URL`.
- **PDF**: `distill` legge anche i PDF, da URL o da file. Il titolo viene dai metadati oppure dal primo blocco di testo della prima pagina.

## Prossimi passi

- Passo 6: account e dati sul server, così lo storico (letture, ripassi) sopravvive a reinstallazioni e cambi di dispositivo.

## Come contribuire

Vedi [CONTRIBUTING.md](CONTRIBUTING.md): ramo, PR verso `main`, CI verde, squash.

## Licenza

Il codice è distribuito con licenza [MIT](LICENSE). Le idee in `library/ideas/` sono parafrasi delle fonti citate in ogni file; i diritti sui testi originali restano ai rispettivi autori.
