import { loadEnv } from "vite";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "./",
    globals: true,
    isolate: false,
    passWithNoTests: true,
    env: loadEnv("test", process.cwd(), ""),
    include: [`tests/controller/**/*.test.ts`],
  },
  plugins: [swc.vite({ module: { type: "nodenext" } })],
});
