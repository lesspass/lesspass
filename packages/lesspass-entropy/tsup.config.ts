import { defineConfig } from "tsup";

export default defineConfig([
  {
    name: "browser",
    entry: { "index.browser": "./src/index.ts" },
    format: ["esm"],
    platform: "browser",
    clean: true,
    dts: true,
    splitting: false
  },
  {
    name: "node",
    entry: ["./src/index.ts"],
    format: ["esm"],
    clean: true,
    dts: true,
    splitting: false
  },
]);
