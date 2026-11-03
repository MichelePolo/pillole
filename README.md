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
4. Rivedi ogni idea dal terminale: `k` la tieni, `d` la scarti indicando il motivo, `s` la salti, `q` esci.
   ```bash
   npm run review
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

### Dove intervenire per ogni motivo di scarto

| Motivo | Cosa significa | Regola del prompt da rafforzare |
| --- | --- | --- |
| vago | Non si capisce cosa sostiene | 1 e 3: un solo concetto, titolo come affermazione |
| banale | Lo sapevi già | 8: meno idee, niente ovvio |
| effimero | È una notizia, non un'idea | 7: filtro di durata |
| infedele | Non dice ciò che dice la fonte | 5, 6 e 13; prova anche `--think` o `--model claude-sonnet-5-5` |
| duplicato | Ripete un'altra idea | 8; la deduplica tra fonti arriva con gli embedding |
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
- **warnings**: titolo oltre le 8 parole, corpo fuori dall'intervallo 60–120 parole, elenchi o HTML nel corpo.

Il corpo può contenere `==evidenziazioni==`, che mdlib-pure renderizza con il plugin `mark`.

## Costi

La chiamata sincrona a Claude Haiku 5.5 costa 0,10 $ per milione di token in ingresso e 0,50 $ in uscita, per prompt fino a 100.000 token. Una voce lunga della Stanford Encyclopedia of Philosophy sono circa 34.000 token, cioè meno di mezzo centesimo; 10 articoli costano pochi centesimi. Il costo reale di ogni chiamata finisce in `runs.jsonl`. Il job notturno userà l'API batch, che costa la metà.

## Note di sicurezza

Il testo delle fonti arriva dal web ed è trattato come dati: il prompt chiede al modello di ignorare eventuali istruzioni contenute nella pagina, e un corpo con HTML viene segnalato in revisione. In più mdlib-pure non interpreta HTML grezzo.

## Prossimi passi

- Passo 2: la PWA lettore con card, salvataggio, scarto, audio e offline.
- Job notturno: API batch, lettura dei feed RSS, embedding multilingue.
