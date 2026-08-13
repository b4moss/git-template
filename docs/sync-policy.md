> **Languages:** [English](./sync-policy.md) · [日本語](./sync-policy_ja.md)

# Cross-branch sync policy

How shared changes move across orphan template branches in [b4moss/git-template](https://github.com/b4moss/git-template).

Aligned with charter versioning (`-{slug}.n`, e.g. `-doc.1`) and the purpose-branch PR model.

## Roles

| Surface | Canonical home | Role |
| --- | --- | --- |
| Inventory, CHANGELOG, this sync policy, LICENSE | **`main`** | Meta-repo docs only (no app under `dev/`) |
| Shared shell (charter body, ruleset JSON, ruleset scripts, editorconfig patterns) | **Purpose / stack branches** | Identical files may be cherry-picked between branches |
| Product / stack code under `dev/` (or package roots) | **Each purpose branch** | Re-implement per language; do not blind-merge implementations |
| Specs & test specs (`docs/specs/`, policy notes) | Written on one stack branch, then synced | Cherry-pick text; re-implement code to match |

`main` is **not** a monorepo of all stacks. Clone a purpose branch (`bun`, `go-web`, `laravel`, …) for app work.

## Sync rules

### 1. Identical shell files → cherry-pick

Safe when the file is meant to be the same across branches:

- `docs/charter/**` (charter body)
- `.github/rulesets/**`
- `scripts/apply-rulesets.sh`, `scripts/create-repo-with-rulesets.sh`
- Shared Make ruleset helper block (`ruleset-*` / `RULESET_*`) when unchanged in intent

Prefer: land the change on **one** purpose branch via `dev-vX.Y.Z-*` → PR → purpose branch, then cherry-pick the commit(s) onto sibling purpose branches. Resolve conflicts only when a branch intentionally diverged (document why).

### 2. Cross-language behavior → spec first, then re-implement

Do **not** cherry-pick TypeScript into Go (or PHP into Bun).

1. Add or update a **spec / test spec** (and short policy note if needed) on a reference branch
2. Cherry-pick those **docs** onto other purpose branches that should share the behavior
3. **Re-implement** and add stack-native tests on each branch
4. Open a PR **into each purpose branch** (not into `main`)

Reference branches for starting a cross-cutting change:

- TypeScript / frontend-leaning shells: often `bun` or `crx-vue`
- Go family: often `go` / `go-web`
- PHP family: often `slim` (committed app) or `laravel` (Make shell)

Pick the branch where the behavior is easiest to specify; say so in the PR.

### 3. Branch-local app code stays local

Examples that usually **do not** sync as patches:

- `dev/` application sources
- Generated Laravel trees (never committed)
- Stack-specific README / Makefile app targets
- Frontend lockfiles and framework config

Promote ideas via specs; copy only when the file is truly identical.

## Release practice (meta-repo)

1. Work on `dev-vX.Y.Z` or `dev-vX.Y.Z-<purpose>` (or `cursor/…` for meta docs)
2. Merge feature work into the **purpose branch** (`bun`, `go-web`, …)
3. Follow up on **`main`**: branch table, CHANGELOG (EN/JA), links
4. **Tag from `main`** (`v0.6.0`, `v0.7.0-doc.1`, …)
5. Doc-only bumps use the charter suffix: `vX.Y.Z-doc.n`

Versions describe the **git-template inventory on `main`**, not SemVer of apps cloned from a branch.

## Checklist: add a cross-cutting spec

- [ ] Write the behavior in `docs/specs/` (or a named policy doc) with acceptance notes / test expectations
- [ ] Land docs on a reference purpose branch via PR
- [ ] Cherry-pick the **spec commits** onto other affected purpose branches
- [ ] Re-implement + stack tests on each branch; PR into each purpose branch
- [ ] If the change affects how starters are described: PR to `main` (README / CHANGELOG)
- [ ] Tag from `main` when the milestone calls for a release (`-doc.n` if docs-only)
- [ ] Optional later: automation to open sync PRs — **out of scope** for the first doc milestone

## Non-goals

- A full multi-branch sync bot in the initial `-doc` release
- Treating `main` as the merge target for stack app code
- Force-identical `dev/` trees across languages
