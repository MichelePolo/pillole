# Come contribuire

Il repository segue **GitHub Flow**. `main` è protetto: ogni modifica entra con una Pull Request con CI verde, unita con **squash**.

## Il flusso

```bash
git switch main && git pull --ff-only
git switch -c feat/breve-descrizione      # feat/ fix/ docs/ refactor/ chore/ test/ ci/
# lavora e committa
git push -u origin feat/breve-descrizione
gh pr create --base main --fill
```

- Il **titolo della PR** è un Conventional Commit (`feat(prompt): …`, `fix: …`). Con lo squash diventa il commit su `main` che release-please legge.
- Aspetta la CI verde, poi unisci con squash. Il ramo viene cancellato da solo.

### Lavori che dipendono l'uno dall'altro

Una PR per argomento, anche quando il secondo lavoro si appoggia sul primo: **PR in sequenza**, non un ramo unico con tutto dentro.

```bash
git switch -c feat/primo main            # primo argomento
git switch -c feat/secondo feat/primo    # il secondo parte dal primo, in locale
# PR solo per feat/primo; dopo lo squash su main:
git fetch origin && git rebase --onto origin/main feat/primo feat/secondo
git push -u origin feat/secondo && gh pr create --base main --fill
```

- Il secondo ramo si spinge e si apre in PR **solo dopo** il merge del primo: con lo squash i commit del primo cambiano hash, e il `rebase --onto` li toglie dal secondo, che resta con i soli commit suoi.
- Niente PR impilate su un altro ramo come base: cancellare il ramo base dopo il merge chiude le PR che lo usano.
- Così ogni squash su `main` è un solo argomento, con un solo titolo per release-please e un changelog leggibile.

## Release

release-please tiene aperta una PR intitolata `chore(main): release x.y.z`. Unirla crea il tag e la GitHub Release. Non cambiare a mano la versione né creare tag.

- Prima della 1.0: `feat:` e `fix:` → patch, `feat!:` / `BREAKING CHANGE:` → minor.
- `docs:`, `chore:`, `refactor:`, `test:`, `ci:` non producono release.
- Una nuova versione del prompt (`PROMPT_VERSION` in `src/config.ts`) cambia le idee prodotte: usa `feat(prompt):`.

## Prima di aprire una PR

- [ ] `npm run typecheck` passa in locale
- [ ] Se hai toccato prompt o estrazione, hai provato `npm run distill -- --dry-run` e, se serve, una distillazione reale
- [ ] Titolo della PR in Conventional Commits
- [ ] Descrizione: cosa e perché, più come l'hai verificato
