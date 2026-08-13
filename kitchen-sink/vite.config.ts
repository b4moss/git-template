import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vituum from "vituum";
import twig from "@vituum/vite-plugin-twig";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vituum(),
    twig({
      root: "./src",
    }),
  ],
  resolve: {
    alias: {
      "@b4moss/example": resolve(rootDir, "../src/index.ts"),
    },
  },
  server: {
    allowedHosts: ["localhost"],
  },
});
