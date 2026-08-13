> **Languages:** [English](./sync-policy.md) · [日本語](./sync-policy_ja.md)

# ブランチ間同期ポリシー

[b4moss/git-template](https://github.com/b4moss/git-template) の orphan テンプレブランチ間で、共有変更をどう運ぶか。

charter のバージョニング（`-{slug}.n`、例: `-doc.1`）と、用途ブランチ向け PR モデルに沿う。

## 役割

| 面 | 正本 | 役割 |
| --- | --- | --- |
| 一覧、CHANGELOG、本ポリシー、LICENSE | **`main`** | メタリポジトリの案内のみ（`dev/` アプリなし） |
| 共通殻（charter 本文、ruleset JSON、ruleset スクリプト、editorconfig 系） | **用途 / スタックブランチ** | 同一内容なら cherry-pick 可 |
| `dev/`（やパッケージ root）の実装 | **各用途ブランチ** | 言語ごとに再実装。実装の盲目マージはしない |
| 仕様・テスト仕様（`docs/specs/`、方針メモ） | まず 1 ブランチに書き、同期 | 文書は cherry-pick、コードは再実装 |

`main` は全スタックのモノレポではない。アプリ作業は用途ブランチ（`bun`、`go-web`、`laravel` など）を clone する。

## 同期ルール

### 1. 同一の共通殻ファイル → cherry-pick

ブランチ間で同じであるべきファイル:

- `docs/charter/**`
- `.github/rulesets/**`
- `scripts/apply-rulesets.sh`、`scripts/create-repo-with-rulesets.sh`
- 意図が変わらない Make の ruleset ヘルパー塊（`ruleset-*` / `RULESET_*`）

手順の目安: まず **1** 用途ブランチで `dev-vX.Y.Z-*` → PR → 用途ブランチに入れ、同じコミットを兄弟用途ブランチへ cherry-pick。意図的な差分があるときだけコンフリクトを解消し、理由を残す。

### 2. 言語をまたぐ振る舞い → 仕様が先、実装は再実装

TypeScript を Go に（や PHP を Bun に）cherry-pick しない。

1. 参照ブランチで **仕様 / テスト仕様**（必要なら短い方針メモ）を追加・更新
2. 同じ振る舞いが必要な用途ブランチへ、その **文書** を cherry-pick
3. 各ブランチで **再実装**し、スタック固有テストを足す
4. PR の向け先は **各用途ブランチ**（`main` ではない）

横断変更の着手先の目安:

- TypeScript / フロント寄り: 多くは `bun` または `crx-vue`
- Go 系: 多くは `go` / `go-web`
- PHP 系: 多くは `slim`（アプリ同梱）または `laravel`（Make 殻）

仕様を書きやすいブランチを選び、PR に明記する。

### 3. ブランチ固有のアプリコードはローカルのまま

パッチ同期しないことが多いもの:

- `dev/` のアプリソース
- 生成した Laravel ツリー（コミットしない）
- スタック固有の README / Makefile アプリターゲット
- フロントの lockfile やフレームワーク設定

アイデアは仕様経由で広げる。本当に同一ファイルのときだけコピーする。

## リリース運用（メタリポジトリ）

1. `dev-vX.Y.Z` または `dev-vX.Y.Z-<purpose>`（メタ docs は `cursor/…` でも可）で作業
2. 機能は **用途ブランチ**（`bun`、`go-web` など）へマージ
3. **`main`** を追随: ブランチ表、CHANGELOG（英日）、リンク
4. **タグは `main` から**（`v0.6.0`、`v0.7.0-doc.1` など）
5. ドキュメントのみの上げ幅は charter どおり `vX.Y.Z-doc.n`

バージョンは **`main` 上の git-template 一覧**向け。用途ブランチから作ったアプリの SemVer ではない。

## チェックリスト: 横断仕様を足すとき

- [ ] `docs/specs/`（または名前付きポリシー文書）に振る舞いと受け入れ / テスト期待を書く
- [ ] 参照用途ブランチへ PR で文書を入れる
- [ ] 影響する用途ブランチへ **仕様コミット**を cherry-pick
- [ ] 各ブランチで再実装 + スタックテスト → 各用途ブランチへ PR
- [ ] スターターの説明に影響するなら `main` へ PR（README / CHANGELOG）
- [ ] マイルストーンにリリースが要るなら `main` からタグ（docs のみなら `-doc.n`）
- [ ] 同期 PR 自動化は任意・後回し（最初の `-doc` マイルストーンでは非目標）

## やらないこと

- 初回 `-doc` リリースでの本格マルチブランチ同期ボット
- スタックアプリコードのマージ先を `main` にすること
- 言語をまたいで `dev/` ツリーを強制同一化すること
