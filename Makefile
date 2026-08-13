SHELL := /bin/bash
.DEFAULT_GOAL := help

ARGS ?=

.PHONY: help run test tidy

help:
	@printf '%s\n' \
		'App:' \
		'  make run [ARGS=...]   go run ./cmd/app' \
		'  make test             go test ./...' \
		'  make tidy             go mod tidy' \
		'' \
		'Rulesets: make ruleset-help'

run:
	cd dev && go run ./cmd/app $(ARGS)

test:
	cd dev && go test ./...

tidy:
	cd dev && go mod tidy

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
		'  make ruleset-create RULESET_REPO=OWNER/NAME' \
		'  make ruleset-apply RULESET_REPO=OWNER/NAME' \
		'  make ruleset-check RULESET_REPO=OWNER/NAME'

ruleset-create:
	@if [[ -z "$(RULESET_REPO)" ]]; then echo "error: RULESET_REPO required" >&2; exit 1; fi
	@$(RULESET_SCRIPTS)/create-repo-with-rulesets.sh "$(RULESET_REPO)" "--$(RULESET_VISIBILITY)" $(RULESET_CREATE_FLAGS)

ruleset-apply:
	@if [[ -z "$(RULESET_REPO)" ]]; then echo "error: RULESET_REPO required" >&2; exit 1; fi
	@$(RULESET_SCRIPTS)/apply-rulesets.sh --repo "$(RULESET_REPO)"

ruleset-check:
	@if [[ -z "$(RULESET_REPO)" ]]; then echo "error: RULESET_REPO required" >&2; exit 1; fi
	@gh ruleset list -R "$(RULESET_REPO)"
	@gh ruleset check "$(RULESET_BRANCH)" -R "$(RULESET_REPO)"
