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
