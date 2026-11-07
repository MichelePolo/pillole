import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { JSDOM } from 'jsdom';
import { cleanAuthor, pageTitle, splitSiteSuffix } from './extract.js';

const doc = (head: string, body = '') => new JSDOM(`<!doctype html><html><head>${head}</head><body>${body}</body></html>`).window.document;

describe('metadati delle fonti', () => {
  it('titolo con i due punti e il trattino lungo (Senses of Cinema): resta intero', () => {
    const d = doc('<title>80 is the New 60: More Into than Out of the Past &#8211; Senses of Cinema</title>', '<h1>80 is the New 60: More Into than Out of the Past</h1>');
    assert.equal(pageTitle(d), '80 is the New 60: More Into than Out of the Past');
  });

  it('og:title vince; senza h1 coerente resta il <title>, e il sito in coda lo toglie splitSiteSuffix', () => {
    assert.equal(pageTitle(doc('<meta property="og:title" content="Titolo vero"><title>Altro | Sito</title>')), 'Titolo vero');
    const t = pageTitle(doc('<title>Un titolo abbastanza lungo – Senses of Cinema</title>', '<h1>Menu</h1><h1>Altro</h1>'))!;
    assert.deepEqual(splitSiteSuffix(t, 'www.sensesofcinema.com'), { title: 'Un titolo abbastanza lungo', site: 'Senses of Cinema' });
    assert.equal(pageTitle(doc('')), undefined);
    // Una sezione del sito in coda («Aeon Essays») è il sito; un sottotitolo vero resta.
    assert.deepEqual(splitSiteSuffix('How to use physics to make sense of life | Aeon Essays', 'Aeon'), { title: 'How to use physics to make sense of life', site: 'Aeon' });
    assert.deepEqual(splitSiteSuffix("L'IA ci restituirà il tempo per vivere? – L'INTERVISTA", 'example.com'), { title: "L'IA ci restituirà il tempo per vivere? – L'INTERVISTA", site: 'example.com' });
  });

  it("l'autore perde data e rubrica, in inglese e in italiano", () => {
    assert.equal(cleanAuthor('Tony McKibbin October 2026 Book Reviews'), 'Tony McKibbin');
    assert.equal(cleanAuthor('Colette de Castro October 2026 CTEQ Annotations on Film'), 'Colette de Castro');
    assert.equal(cleanAuthor('Mario Rossi 3 novembre 2026'), 'Mario Rossi');
    assert.equal(cleanAuthor('Mario Rossi novembre 2026 Rubrica'), 'Mario Rossi');
    assert.equal(cleanAuthor('Maya April'), 'Maya April'); // un mese senza anno è un nome
    assert.equal(cleanAuthor('Simonetta Pagliani'), 'Simonetta Pagliani');
    assert.equal(cleanAuthor('By'), '');
    assert.equal(cleanAuthor('By Jordana Cepelewicz'), 'Jordana Cepelewicz');
    assert.equal(cleanAuthor('By Charlie Wood November 6, 2026'), 'Charlie Wood'); // Quanta
    assert.equal(cleanAuthor('Byron Smith'), 'Byron Smith'); // non è «By»
  });
});
