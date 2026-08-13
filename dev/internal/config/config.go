package config

import (
	"os"
	"strconv"
)

type Config struct {
	Addr string
}

func Load() Config {
	addr := os.Getenv("ADDR")
	if addr == "" {
		port := os.Getenv("PORT")
		if port == "" {
			port = "8080"
		}
		if _, err := strconv.Atoi(port); err == nil {
			addr = ":" + port
		} else {
			addr = ":8080"
		}
	}
	return Config{Addr: addr}
}
