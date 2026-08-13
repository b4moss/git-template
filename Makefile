# Laravel local (no Sail) + namespaced ruleset helpers.

SHELL := /bin/bash
.DEFAULT_GOAL := help

# Empty LARAVEL => latest. BREEZE=1 installs Breeze; STACK defaults to blade.
LARAVEL ?=
BREEZE ?= 0
STACK ?= blade
FORCE ?= 0

.PHONY: help setup serve test tidy

help:
	@printf '%s\n' \
		'App:' \
		'  make setup                 generate Laravel into dev/' \
		'  make setup BREEZE=1        + Laravel Breeze (STACK=blade)' \
		'  make setup LARAVEL=12.0    pin Laravel constraint' \
		'  make setup FORCE=1         wipe existing dev/ and recreate' \
		'  make serve                 php artisan serve (after setup)' \
		'  make test                  php artisan test / phpunit' \
		'  make tidy                  composer install in dev/' \
		'' \
		'Rulesets: make ruleset-help'

setup:
	LARAVEL="$(LARAVEL)" BREEZE="$(BREEZE)" STACK="$(STACK)" FORCE="$(FORCE)" SAIL=0 \
		"$(CURDIR)/scripts/setup-laravel.sh"

serve:
	@test -f dev/artisan || { echo "error: run make setup first" >&2; exit 1; }
	cd dev && php artisan serve

test:
	@test -f dev/artisan || { echo "error: run make setup first" >&2; exit 1; }
	cd dev && (test -f vendor/bin/phpunit && ./vendor/bin/phpunit || php artisan test)

tidy:
	@test -f dev/composer.json || { echo "error: run make setup first" >&2; exit 1; }
	cd dev && composer install --no-interaction

# GitHub repository ruleset helpers.
RULESET_ROOT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
RULESET_SCRIPTS := $(RULESET_ROOT_DIR)/scripts

RULESET_REPO ?=
RULESET_BRANCH ?= main
RULESET_VISIBILITY ?= public
RULESET_CREATE_FLAGS ?=

.PHONY: ruleset-help ruleset-create ruleset-apply ruleset-check

ruleset-help:
	@printf '%s\n' \
		'Targets:' \
		'' \
		'  make ruleset-create RULESET_REPO=OWNER/NAME [RULESET_VISIBILITY=public] [RULESET_CREATE_FLAGS="--clone"]' \
		'      Create a GitHub repo and apply rulesets.' \
		'' \
		'  make ruleset-apply RULESET_REPO=OWNER/NAME' \
		'      Apply/update rulesets on an existing repo.' \
		'' \
		'  make ruleset-check RULESET_REPO=OWNER/NAME [RULESET_BRANCH=main]' \
		'      List rulesets and check which rules apply to RULESET_BRANCH.' \
		'' \
		'Notes:' \
		'  - GitHub Free (org): rulesets work on public repos only.' \
		'  - Requires gh (repo admin) and jq.' \
		'  - Namespaced as ruleset-* / RULESET_* for subtree-safe includes.'

ruleset-create:
	@if [[ -z "$(RULESET_REPO)" ]]; then \
		echo "error: RULESET_REPO=OWNER/NAME is required" >&2; \
		exit 1; \
	fi
	@$(RULESET_SCRIPTS)/create-repo-with-rulesets.sh "$(RULESET_REPO)" "--$(RULESET_VISIBILITY)" $(RULESET_CREATE_FLAGS)

ruleset-apply:
	@if [[ -z "$(RULESET_REPO)" ]]; then \
		echo "error: RULESET_REPO=OWNER/NAME is required" >&2; \
		exit 1; \
	fi
	@$(RULESET_SCRIPTS)/apply-rulesets.sh --repo "$(RULESET_REPO)"

ruleset-check:
	@if [[ -z "$(RULESET_REPO)" ]]; then \
		echo "error: RULESET_REPO=OWNER/NAME is required" >&2; \
		exit 1; \
	fi
	@echo "== ruleset list =="
	@gh ruleset list -R "$(RULESET_REPO)"
	@echo
	@echo "== ruleset check $(RULESET_BRANCH) =="
	@gh ruleset check "$(RULESET_BRANCH)" -R "$(RULESET_REPO)"
