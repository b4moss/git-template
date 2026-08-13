package app

import (
	"bytes"
	"testing"
)

func TestHelloCommand(t *testing.T) {
	buf := new(bytes.Buffer)
	rootCmd.SetOut(buf)
	rootCmd.SetArgs([]string{"hello", "cli"})
	if err := rootCmd.Execute(); err != nil {
		t.Fatal(err)
	}
	got := buf.String()
	if got != "hello, cli\n" {
		t.Fatalf("got %q", got)
	}
}
