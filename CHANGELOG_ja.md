> **Languages:** [English](./CHANGELOG.md) · [日本語](./CHANGELOG_ja.md)

# 変更履歴

バージョンは **git-template** リポジトリ全体（`main` 上のスターター一覧）に対するものです。各テンプレブランチから作ったアプリの SemVer とは別です。

開発フロー: `dev-vX.Y.Z` で作業 → `main` 向け PR → `main` からタグ。

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
