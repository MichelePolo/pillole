---
id: 1b6c5f-v3-05-filtrare-durante-la-ricerca-grafica-evita
lang: it
kind: metodo
topics:
  - ai
  - tecnologia
subtopics:
  - agenti
  - architettura-software
source:
  id: 1b6c5fd23745
  lang: en
  title: Scaling HNSWs
  site: antirez.com
  url: http://antirez.com/news/156
anchor: I don’t really need to explore the whole graph if the condition on the JSON attributes is not satisfied by many nodes
anchor_check: exact
quiz:
  q: Perché il filtro applicato durante la ricerca può essere efficiente anche senza esplorare tutto il grafo?
  a: Perché interessano solo i risultati vicini alla query, quindi la ricerca può fermarsi quando trova abbastanza candidati vicini che rispettano il filtro.
prompt_version: v3
model: claude-haiku-5-5
created: 2026-11-07T08:54:21.327Z
---

# Filtrare durante la ricerca sul grafo evita di esplorare tutto

Per combinare la ricerca per similarità con condizioni sui metadati, si può applicare il filtro durante la discesa greedy nel grafo, invece di filtrare dopo. L'idea è che interessano solo i risultati vicini al vettore di query, quindi non serve esplorare tutto il grafo quando poche condizioni sono soddisfatte. Lo sforzo di ricerca può essere limitato dall'utente. Secondo l'autore, spesso è anche più efficiente creare chiavi separate per le categorie più usate.
