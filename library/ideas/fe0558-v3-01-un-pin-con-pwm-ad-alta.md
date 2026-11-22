---
id: fe0558-v3-01-un-pin-con-pwm-ad-alta
lang: it
kind: metodo
topics:
  - tecnologia
  - fisica
subtopics:
  - infrastrutture
  - termodinamica
source:
  id: fe055818bb71
  lang: en
  title: Playing audio files in a Pi Pico without a DAC
  site: antirez.com
  url: http://antirez.com/news/143
anchor: use a square wave with a very high frequency, but with a different duty cycle for the different voltages
anchor_check: exact
quiz:
  q: Perché variare il duty cycle di un'onda quadra veloce permette di ottenere tensioni intermedie?
  a: Perché la tensione media del segnale dipende dalla quota di tempo in cui il pin resta alto rispetto al tempo in cui resta basso.
warnings:
  - titolo di 12 parole (avviso oltre 10)
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-21T09:56:48.084Z
---

# Un pin con PWM ad alta frequenza simula più livelli di tensione

Un pin del microcontrollore può produrre solo due livelli, alto o basso. Se si usa un'onda quadra a frequenza molto alta e si varia il duty cycle, cioè la quota di tempo in cui il pin resta alto, la tensione media cambia campione per campione. ==Così un solo pin può approssimare una forma d'onda complessa senza un DAC.== Più tempo passa alto, più alta è la media, e la sequenza di medie ricostruisce il segnale desiderato.
