import path from "path";
import { defineConfig } from "vitest/config";

// Kept separate from vite.config.ts so the production build (and the deploy
// that depends on it) is not affected by test configuration.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  test: {
    // link-attribution touches window/sessionStorage/document.
    environment: "happy-dom",
    include: ["client/src/**/*.test.ts", "shared/**/*.test.ts"],
  },
});
