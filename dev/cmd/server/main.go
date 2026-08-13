package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/example/app/internal/config"
	httpserver "github.com/example/app/internal/http"
)

func main() {
	cfg := config.Load()
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	if err := httpserver.ListenAndServe(ctx, cfg); err != nil {
		log.Fatal(err)
	}
}
