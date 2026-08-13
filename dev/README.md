# dev (go-web)

Thin HTTP server scaffold (`net/http` + chi).

```bash
go mod tidy
go run ./cmd/server
```

- `GET /healthz`
- `GET /hello?name=world`
- Graceful shutdown on SIGINT / SIGTERM
- `ADDR` or `PORT` env (default `:8080`)
