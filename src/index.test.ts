import { describe, expect, it } from "vitest";
import { greet } from "./index";

describe("greet", () => {
  it("defaults to world", () => {
    expect(greet()).toBe("Hello, world!");
  });

  it("uses a custom name", () => {
    expect(greet({ name: "bun" })).toBe("Hello, bun!");
  });

  it("can shout", () => {
    expect(greet({ name: "go", shout: true })).toBe("HELLO, GO!");
  });
});
