import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "B4mossExample",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "example.js" : "example.cjs"),
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    environment: "node",
  },
});
