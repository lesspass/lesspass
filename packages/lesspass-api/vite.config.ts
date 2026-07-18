import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ['./src/setup.ts'],
    execArgv: ["--no-experimental-webstorage"],
  },
});
