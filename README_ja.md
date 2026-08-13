> **Languages:** [English](./README.md) · [日本語](./README_ja.md)

# git-template

[b4moss](https://github.com/b4moss) / [合同会社 知的・自転車](https://b4m.co.jp/)（Bicycle for Mind LLC）向けの、スタック別 Git スターターテンプレートです。

使いたいブランチを clone すると、そのディレクトリがそのままプロジェクト root になります。

バージョンとリリースノート: [CHANGELOG_ja.md](./CHANGELOG_ja.md)。  
ブランチ間同期（共通殻の cherry-pick と、仕様 → 再実装）: [docs/sync-policy_ja.md](./docs/sync-policy_ja.md)。  
機能は用途ブランチへ `dev-vX.Y.Z-*` PR。`main` は一覧 / CHANGELOG の追随とタグ用です。

## ブランチ

| ブランチ | 内容 |
| --- | --- |
| `bun` | Bun / TypeScript |
| `crx-vue` | Chrome MV3 + Vue 3 拡張 |
| `npm-package` | Vite ライブラリ + vituum kitchen-sink |
| `go` | Go 最小 hello |
| `go-web` | Go HTTP API（chi） |
| `go-cli` | Go CLI（cobra） |
| `go-wails-nuxt` | デスクトップ（Wails v2 + Nuxt 3） |
| `laravel` | Laravel（ローカル PHP・`make setup`） |
| `laravel-sail` | Laravel + Sail / Docker（`make setup`） |
| `slim` | 最小 SlimPHP 4 |
| `slim-auth` | Slim + セッション認証 + MailAdapter |
| `vituum-twig` | Vite + Vituum + Twig（MPA 静的サイト） |
| `doc-site` | Nuxt Content ドキュメントサイト |

## 各ブランチの内包物

### `bun` / `go`

共通の骨格で、差分はほぼ `dev/` のみです。

```text
.
├── .editorconfig
├── .github/rulesets/     # GitHub リポジトリ ruleset
├── .gitignore
├── LICENSE
├── Makefile
├── README.md
├── dev/                  # アプリ本体（Bun または Go）
├── docs/
│   ├── charter/          # 開発憲章
│   ├── main.md
│   └── specs/
└── scripts/              # ruleset 作成・適用ヘルパー
```

- `bun` → `dev/` に `package.json` / `bun.lock` / `tsconfig.json` / `index.ts`
- `go` → `dev/` に `go.mod` / `main.go`

### `go-web` / `go-cli` / `go-wails-nuxt`

`go` と同じ共通殻（charter / rulesets / Make）。アプリ本体は `dev/` です。

- `go-web` → 薄い `net/http` + chi サーバー（`cmd/server`、`/healthz`、`/hello`）
- `go-cli` → cobra CLI（`cmd/app`、`version` / `hello`）
- `go-wails-nuxt` → Wails v2 デスクトップ + Nuxt 3 SPA（`frontend/`、`wailsjs/` コミット済み）

### `laravel` / `laravel-sail`

b4moss 共通殻 + Make で `dev/` に Laravel を**生成**（本体はコミットしない）。

- `laravel` → ホスト PHP（`make setup` / `make serve`）
- `laravel-sail` → Sail / Docker（`make setup` で常に Sail、`make up` / `make down`）
- オプション: `LARAVEL=`、`BREEZE=1`、`STACK=blade`、`FORCE=1`

### `slim` / `slim-auth`

`dev/` に Slim 4 アプリをコミット（PHP-DI + PSR-7）。

- `slim` → `/healthz`、`/hello`、PHPUnit
- `slim-auth` → セッション認証 + SQLite + `MailAdapter` / Symfony Mailer（`/register`、`/login`、`/logout`、`/me`）

### `npm-package`

Vite library mode の npm パッケージと、`kitchen-sink/` デモ（vituum-twig ベース。publish 対象外）です。

```text
.
├── package.json          # @b4moss/example プレースホルダ + exports
├── src/                  # ライブラリ本体
├── vite.config.ts        # build.lib
├── kitchen-sink/         # Vituum + Twig デモ（ローカルパッケージを alias）
├── docs/charter/
└── scripts/
```

### `crx-vue`

Chrome MV3 拡張雛形です（Vue 3 + Vue Router + Pinia + CRXJS）。

```text
.
├── Makefile
├── README.md / README_ja.md
├── docs/charter/
├── scripts/                  # ruleset ヘルパー
└── dev/                      # 拡張プロジェクト（manifest, Vite, Vue）
    ├── manifest.json
    ├── vite.config.ts
    └── src/
        ├── scripts/          # background / content / popup / side panel
        └── views/
```

### `vituum-twig`

Vite + Vituum + Twig のマルチページ静的サイト雛形です。

```text
.
├── .editorconfig
├── .gitignore
├── package.json
├── public/
├── src/
│   ├── assets/           # scripts / styles
│   ├── components/
│   ├── layouts/
│   └── pages/            # Twig ページ（MPA エントリ）
├── tsconfig.json
└── vite.config.ts
```

### `doc-site`

Nuxt Content ドキュメントサイト雛形です（ヘッダーユーティリティ＋フッター＋サイドバー／ページャー）。製品デモや Playground は除去済み。ナビは `app/config/docsNav.ts` で設定します。

```text
.
├── app/
│   ├── components/       # SiteHeader / SiteFooter / DocsSidebar / DocsPager …
│   ├── config/docsNav.ts # サイドバー／ページャー
│   ├── layouts/
│   └── pages/[...slug].vue
├── content/
│   ├── en/               # 英語 Markdown プレースホルダ
│   └── ja/               # 日本語 Markdown プレースホルダ
├── i18n/locales/
├── nuxt.config.ts        # siteName / githubUrl / footerText …
├── package.json
└── public/
```

## 使い方

```bash
git clone -b bun --single-branch https://github.com/b4moss/git-template.git my-app
cd my-app
```

`bun` の部分を `crx-vue` / `npm-package` / `go` / `go-web` / `go-cli` / `go-wails-nuxt` / `laravel` / `laravel-sail` / `slim` / `slim-auth` / `vituum-twig` / `doc-site` に差し替えてください。

## ブランチ間の変更同期

orphan ブランチはモノレポのように履歴を共有しません。要約:

1. **同一の共通殻**（charter、rulesets、共有スクリプト）→ 用途ブランチ間で cherry-pick
2. **言語をまたぐ振る舞い** → **仕様 / テスト仕様**を cherry-pick し、各ブランチで **再実装**
3. **メタ文書の正本**（一覧、CHANGELOG、同期ポリシー）は **`main`**
4. タグは **`main` から**。docs のみなら `vX.Y.Z-doc.n`

チェックリスト全文: [docs/sync-policy_ja.md](./docs/sync-policy_ja.md)（[English](./docs/sync-policy.md)）。

## ライセンス

[MIT License](./LICENSE)（[日本語参考訳](./LICENSE_ja.md)）
