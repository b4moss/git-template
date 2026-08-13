> **Languages:** [English](./CHANGELOG.md) · [日本語](./CHANGELOG_ja.md)

# 変更履歴

バージョンは **git-template** リポジトリ全体（`main` 上のスターター一覧）に対するものです。各テンプレブランチから作ったアプリの SemVer とは別です。

開発フロー: `dev-vX.Y.Z` で作業 → 用途ブランチ向け PR（その後 `main` を更新）→ `main` からタグ。

## [0.7.0-doc.1] — ブランチ間同期ポリシー

### 追加

- `docs/sync-policy.md` / `docs/sync-policy_ja.md`: 共通殻の cherry-pick と仕様 → 再実装、正本の所在、リリース / `-doc.n`、チェックリスト
- README（英日）に同期の要約とリンク

### 補足

- ドキュメントのみのメタリリース（`-doc.1`）。新規用途ブランチなし
- #9 をクローズ

## [0.6.0] — Laravel + Slim

### 追加

- orphan ブランチ `laravel` / `laravel-sail`: Make で `dev/` に `composer create-project`（任意で Breeze / バージョンピン。Sail ブランチは mysql+redis）
- orphan ブランチ `slim`: 最小 Slim 4 + PHP-DI（`/healthz`、`/hello`）
- orphan ブランチ `slim-auth`: セッション認証、SQLite、`MailAdapter` + Symfony Mailer

### 補足

- 用途ブランチ向け PR: #19（`laravel`）、#20（`laravel-sail`）、#21（`slim`）、#22（`slim-auth`）

## [0.5.0] — Go 系分割 + Wails

### 追加

- orphan ブランチ `go-web`: 薄い chi HTTP サーバー（`/healthz`、`/hello`、graceful shutdown）
- orphan ブランチ `go-cli`: cobra CLI（`version`、`hello`）
- orphan ブランチ `go-wails-nuxt`: Wails v2 + Nuxt 3 SPA デスクトップ雛形（`wailsjs/` コミット済み）
- 最小の `go` hello テンプレはそのまま維持

### 補足

- 用途ブランチ向け PR: #15（`go-web`）、#16（`go-cli`）、#17（`go-wails-nuxt`）

## [0.4.0] — npm-package

### 追加

- orphan ブランチ `npm-package`: Vite library mode + `kitchen-sink/`（vituum-twig ベース）
- プレースホルダ API `@b4moss/example`（`greet`）、vitest、`exports` / 型定義
- kitchen-sink はローカルパッケージを alias（publish 対象外）

## [0.3.0] — crx-vue

### 追加

- orphan ブランチ `crx-vue`: Chrome MV3 + Vue 3 + Vue Router + Pinia + `@crxjs/vite-plugin`
- 既存 CRX テンプレを sanitize（汎用名、権限縮小、スタブ UI）
- 英日 README と Make ターゲット（`install` / `dev` / `build`）

## [0.2.0] — bun 整備

### 変更

- `bun` orphan ブランチを参照用 TypeScript / Bun スターターとして整備:
  - 英日 README
  - `make install` / `make run` / `make test`
  - パッケージ名プレースホルダ `@b4moss/app`
  - `dev/` にスモークテスト

## [0.1.0] — ベースライン

### 含むブランチ

| ブランチ | 役割 |
| --- | --- |
| `main` | 使い方（英日）、LICENSE |
| `bun` | Bun / TypeScript スターター |
| `go` | Go 最小スターター |
| `vituum-twig` | Vite + Vituum + Twig MPA |
| `doc-site` | Nuxt Content ドキュメント雛形 |

### 補足

- スタックブランチは `git clone -b <branch> --single-branch`。clone 先がプロジェクト root。
- 共通殻（charter / rulesets）は各スタックブランチ側。`main` は案内専用。
