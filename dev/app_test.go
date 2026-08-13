package main

import "testing"

func TestGreet(t *testing.T) {
	app := NewApp()
	got := app.Greet("Wails")
	want := "Hello Wails, It's show time!"
	if got != want {
		t.Fatalf("Greet() = %q, want %q", got, want)
	}
}
