#!/usr/bin/env bash
# Generate a Laravel app into ./dev (non-interactive).
# Env:
#   LARAVEL   version constraint (empty = latest), e.g. 12.0 or ^12.0
#   BREEZE    1 to install laravel/breeze
#   STACK     breeze frontend stack (default: blade)
#   SAIL      1 to install Laravel Sail
#   FORCE     1 to wipe an existing Laravel app in ./dev
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEV="$ROOT/dev"
LARAVEL="${LARAVEL:-}"
BREEZE="${BREEZE:-0}"
STACK="${STACK:-blade}"
SAIL="${SAIL:-0}"
FORCE="${FORCE:-0}"

if [[ -f "$DEV/artisan" ]]; then
  if [[ "$FORCE" != "1" ]]; then
    echo "error: Laravel already present in dev/ (found artisan)." >&2
    echo "re-run with FORCE=1 to wipe and recreate." >&2
    exit 1
  fi
  echo "FORCE=1: removing existing dev/ …"
  rm -rf "$DEV"
fi

mkdir -p "$DEV"
# create-project needs an empty-ish directory; keep only a marker README out of the way
if [[ -n "$(ls -A "$DEV" 2>/dev/null || true)" ]]; then
  tmp="$(mktemp -d "${TMPDIR:-/tmp}/laravel-create.XXXXXX")"
else
  tmp="$DEV"
fi

pkg="laravel/laravel"
if [[ -n "$LARAVEL" ]]; then
  pkg="laravel/laravel:${LARAVEL}"
fi

echo "→ composer create-project ${pkg}"
composer create-project "$pkg" "$tmp" --prefer-dist --no-interaction

if [[ "$tmp" != "$DEV" ]]; then
  mkdir -p "$DEV"
  # shellcheck disable=SC2035
  shopt -s dotglob
  mv "$tmp"/* "$DEV"/
  shopt -u dotglob
  rmdir "$tmp" 2>/dev/null || rm -rf "$tmp"
fi

cd "$DEV"

if [[ "$SAIL" == "1" ]]; then
  echo "→ install Laravel Sail"
  composer require laravel/sail --dev --no-interaction
  php artisan sail:install --no-interaction --with=mysql,redis
fi

if [[ "$BREEZE" == "1" ]]; then
  echo "→ install Laravel Breeze (STACK=${STACK})"
  composer require laravel/breeze --dev --no-interaction
  php artisan breeze:install "$STACK" --no-interaction
  if [[ -f package.json ]]; then
    if command -v npm >/dev/null 2>&1; then
      npm install --no-fund --no-audit
      npm run build
    else
      echo "warn: npm not found; skip frontend build after Breeze." >&2
    fi
  fi
fi

echo "✓ Laravel ready under dev/"
if [[ "$SAIL" == "1" ]]; then
  echo "  next: cd dev && ./vendor/bin/sail up -d"
else
  echo "  next: cd dev && php artisan serve"
fi
