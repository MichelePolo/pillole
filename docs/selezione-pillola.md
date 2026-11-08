# Come si sceglie la pillola

La pillola sono 6 idee nuove al giorno, seguite dai ripassi. La compone `composePill` in `app/src/pill.ts`; l'app Android usa la stessa funzione (`packages/core/src/pill.ts` in nous-mobile). Questo file spiega le regole e i loro numeri. I pesi sono costanti in cima a `pill.ts` e `profile.ts`: se ne cambi uno, aggiorna anche questo file.

## 1. Da dove si pesca

Si pesca tra le idee della biblioteca che non hai ancora deciso, cioè mai salvate né scartate. Le idee arrivano da `ideas.json` e i temi scelti dalla scheda *Temi*:

- nella PWA, fino a 6;
- nell'app gratuita, 3;
- con Premium, tutti.

Senza temi scelti valgono tutti i temi.

## 2. Il profilo

Il profilo si ricostruisce dagli eventi (`app/src/profile.ts`) a ogni apertura:

- **Gusto.** C'è una distribuzione Beta per ogni argomento (`t:filosofia`) e per ogni sotto-argomento (`s:etica`).
  - Si parte da 2/1 per gli argomenti, leggermente ottimista, e da 1/1 per i sotto-argomenti.
  - Un salvataggio vale +1 ai successi.
  - Uno scarto rapido (sotto i 4 secondi) vale +1 agli insuccessi; uno scarto dopo aver letto, +0,5.
  - Togliere un'idea dalle salvate vale +0,5 agli insuccessi.
  - Tutti i contatori si dimezzano in 30 giorni.
- **Somiglianza.** Due medie degli embedding delle idee salvate: una lenta (emivita 90 giorni, gli interessi stabili) e una veloce (3 giorni, gli ultimi giorni).
- **Letture recenti.** Le idee decise negli ultimi 7 giorni, con un peso che si dimezza ogni 2 giorni. Servono a non riproporre lo stesso concetto o la stessa fonte.

## 3. Una card alla volta

La pillola si riempie un posto alla volta. Per ogni posto si fanno due passaggi.

### 3a. Tra quali idee si sceglie

Le regole sono in ordine di precedenza:

1. **Quota evergreen.** Se la filosofia è tra i temi, o non hai scelto temi, servono almeno 2 card di filosofia su 6. Quando i posti rimasti bastano appena per la quota, si sceglie solo tra la filosofia.
2. **Equilibrio tra i temi.** Si conta quante card ha già ogni tema scelto e si sceglie tra le idee del tema (o dei temi) rimasti più indietro.
   - Un'idea con due temi scelti (Filosofia · Matematica) conta per entrambi.
   - Un tema che non ha più idee disponibili non blocca gli altri.
3. Se nessuna idea copre i temi scelti, si sceglie tra tutte le idee: è il caso delle idee *fuori dai tuoi temi*.

### 3b. Il punteggio

Tra le idee ammesse vince quella con il punteggio più alto:

```
punteggio = tema + gusto + 0,5 × somiglianza − 0,7 × ridondanza − 0,5 × stessa fonte − 0,5 × fonte stanca + 0,1 × ponte
```

| Termine | Valore | Cosa misura |
|---|---|---|
| tema | +3 / +2 / 0 | +3 se **tutti** i temi dell'idea sono tra quelli scelti; +2 se solo alcuni (un «AI · Filosofia» a chi ha scelto Filosofia); 0 se è fuori tema. Senza temi scelti, +3 a tutte. |
| gusto | 0–1 | Thompson sampling: si estrae un valore a caso dalla Beta di ogni argomento e sotto-argomento dell'idea, si prende il più alto di ciascun tipo e se ne fa la media (se l'idea non ha sotto-argomenti conta solo l'argomento). I gusti poco provati hanno Beta larghe e ogni tanto vincono: è l'esplorazione, senza un parametro apposito. |
| somiglianza | −1…1 | 0,7 × coseno con la media lenta + 0,3 × coseno con la media veloce. |
| ridondanza | 0–1 | Il coseno più alto con le card già nella pillola e con le letture recenti, queste ultime pesate dal decadimento. |
| stessa fonte | 0 / 1 | 1 se la pillola ha già una card della stessa fonte. |
| fonte stanca | 0–1 | Quanto hai letto di recente da quella fonte; si satura a 2 letture. |
| ponte | 0 / 1 | 1 se l'idea ha due temi; con temi scelti, solo se li hai scelti entrambi. |

Il +3 del tema supera l'intera escursione degli altri termini, che va più o meno da −2 a +1,5. Quindi un'idea fuori tema entra solo quando quelle nei temi sono finite. Il gradino di +1 tra idee pure e idee miste fa sì che le miste vengano dopo le pure ma prima di quelle fuori tema.

### 3c. Il motivo sotto la card

Il motivo si sceglie in questo ordine:

1. *simile a «…»*, se l'idea somiglia a una che hai salvato (coseno almeno 0,3);
2. *evergreen*, se è entrata per la quota di filosofia;
3. *esplorazione · tema*, se di quel gusto si sa ancora poco (meno di 2 osservazioni);
4. *ti interessa · tema*, negli altri casi.

Le idee fuori tema mostrano *fuori dai tuoi temi*.

## 4. Dopo le 6 card

Dopo le 6 idee nuove, in coda alla pillola vengono i ripassi delle idee salvate, scelti tra quelli scaduti preferendo fonti e temi diversi:

- nella PWA, 3 al giorno;
- nell'app gratuita, 1;
- con Premium, 3.

Se cambi i temi a pillola iniziata, le card già decise restano e le altre si ricompongono.

## Un esempio: Filosofia + Matematica

Simulazione sulla biblioteca del 9 novembre 2026: 1008 idee, 200 pillole, profilo vuoto. Filosofia ha circa quattro volte le idee di Matematica. In media una pillola ha:

- 2 card di sola Filosofia;
- circa 1,5 di sola Matematica;
- circa 2,5 di Filosofia · Matematica.

Ogni tema compare quindi in circa 4 card su 6, e non c'è nessun «AI · Filosofia».

Prima dell'equilibrio e del bonus a gradini (novembre 2026), quasi 6 card su 6 avevano anche un tema non scelto. Il motivo è il gusto: prendendo il massimo tra i temi dell'idea, un'idea con due temi estrae due volte e in media vince.

## Dove intervenire

| Vuoi… | Costante in `pill.ts` |
|---|---|
| più o meno card al giorno | `PILL_SIZE` |
| più o meno filosofia garantita | `EVERGREEN_MIN` |
| che le idee miste («AI · Filosofia») compaiano prima | `PARTIAL_THEME_BONUS`, avvicinandolo a `IN_THEME_BONUS` |
| più varietà di fonti | `W_SAME_SOURCE`, `W_SOURCE_FATIGUE` |
| meno idee che si somigliano | `W_REDUNDANCY` |
| che pesino di più le idee simili a quelle salvate | `W_SIM` |
