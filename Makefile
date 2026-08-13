# App + package targets, then namespaced ruleset helpers.

SHELL := /bin/bash
.DEFAULT_GOAL := help

.PHONY: help install dev build build-sink test

help:
	@printf '%s\n' \
		'Package:' \
		'  make install      npm install (workspaces)' \
		'  make build        Vite library build + d.ts' \
		'  make test         vitest' \
		'  make dev          kitchen-sink (vituum) via workspace' \
		'  make build-sink   build kitchen-sink site' \
		'' \
		'Rulesets: make ruleset-help'

install:
	npm install

dev:
	npm run dev

build:
	npm run build

build-sink:
	npm run build:sink

test:
	npm test

# --- rulesets ---

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
	@gh ruleset list -R "$(RULESET_REPO)"
	@gh ruleset check "$(RULESET_BRANCH)" -R "$(RULESET_REPO)"
