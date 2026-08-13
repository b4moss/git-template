# App targets + namespaced ruleset helpers.

SHELL := /bin/bash
.DEFAULT_GOAL := help

.PHONY: help install bindings frontend dev build test tidy

help:
	@printf '%s\n' \
		'App:' \
		'  make install    npm install in frontend' \
		'  make bindings   wails generate module' \
		'  make frontend   nuxt generate (assets for embed)' \
		'  make dev        wails dev' \
		'  make build      wails build' \
		'  make test       go test ./...' \
		'  make tidy       go mod tidy' \
		'' \
		'Rulesets: make ruleset-help'

install:
	cd dev/frontend && npm install

# Needs a non-empty frontend/.output/public for go:embed when generating.
bindings:
	@mkdir -p dev/frontend/.output/public
	@test -f dev/frontend/.output/public/index.html || printf '%s\n' '<!doctype html><title>stub</title>' > dev/frontend/.output/public/index.html
	cd dev && wails generate module

frontend:
	cd dev/frontend && npm run generate

dev:
	cd dev && wails dev

build:
	cd dev && wails build

test:
	cd dev && go test ./...

tidy:
	cd dev && go mod tidy

# GitHub repository ruleset helpers.
# Target/variable names are prefixed with ruleset- / RULESET_.

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
		echo "example: make ruleset-create RULESET_REPO=my-org/new-app" >&2; \
		exit 1; \
	fi
	@$(RULESET_SCRIPTS)/create-repo-with-rulesets.sh "$(RULESET_REPO)" "--$(RULESET_VISIBILITY)" $(RULESET_CREATE_FLAGS)

ruleset-apply:
	@if [[ -z "$(RULESET_REPO)" ]]; then \
		echo "error: RULESET_REPO=OWNER/NAME is required" >&2; \
		echo "example: make ruleset-apply RULESET_REPO=my-org/existing-app" >&2; \
		exit 1; \
	fi
	@$(RULESET_SCRIPTS)/apply-rulesets.sh --repo "$(RULESET_REPO)"

ruleset-check:
	@if [[ -z "$(RULESET_REPO)" ]]; then \
		echo "error: RULESET_REPO=OWNER/NAME is required" >&2; \
		echo "example: make ruleset-check RULESET_REPO=my-org/existing-app RULESET_BRANCH=main" >&2; \
		exit 1; \
	fi
	@echo "== ruleset list =="
	@gh ruleset list -R "$(RULESET_REPO)"
	@echo
	@echo "== ruleset check $(RULESET_BRANCH) =="
	@gh ruleset check "$(RULESET_BRANCH)" -R "$(RULESET_REPO)"
