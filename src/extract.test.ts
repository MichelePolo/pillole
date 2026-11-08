import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { JSDOM } from 'jsdom';
import { cleanAuthor, decodeEntities, pageTitle, plainTitle, splitSiteSuffix } from './extract.js';

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
    assert.equal(cleanAuthor('Text by Thom Sliwowski'), 'Thom Sliwowski'); // Public Domain Review
    assert.equal(cleanAuthor('Sarah Finley |'), 'Sarah Finley');
    assert.equal(cleanAuthor('Testo di Laura Porta'), 'Laura Porta');
    assert.equal(cleanAuthor('Dino Text'), 'Dino Text');
  });

  it('le entità HTML rimaste nei titoli si decodificano', () => {
    assert.equal(decodeEntities('Veronese&amp;#39;s Dogs'), "Veronese's Dogs");
    assert.equal(decodeEntities('Tom &amp; Jerry &#8211; storia'), 'Tom & Jerry – storia');
    assert.equal(decodeEntities('Niente da fare'), 'Niente da fare');
    assert.equal(plainTitle('The Alchemical Transformations of the *Mutus Liber* (1677)'), 'The Alchemical Transformations of the Mutus Liber (1677)');
    assert.equal(plainTitle('2 * 3 = 6'), '2 * 3 = 6');
    // Un'entità non reintroduce a capo né caratteri di controllo (log della nightly: «::comando::»).
    assert.equal(decodeEntities('Titolo&#10;::warning::x'), 'Titolo ::warning::x');
    assert.equal(decodeEntities('a&#x2028;b&#0;c&#x9F;d'), 'a b c d');
    assert.equal(decodeEntities('&#1114112;'), ' ');
  });
});
