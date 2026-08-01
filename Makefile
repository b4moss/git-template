.PHONY: run test tidy

run:
	cd dev && go run .

test:
	cd dev && go test ./...

tidy:
	cd dev && go mod tidy
