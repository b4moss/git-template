package main

import (
	"os"

	"github.com/example/app/internal/app"
)

func main() {
	if err := app.Execute(); err != nil {
		os.Exit(1)
	}
}
