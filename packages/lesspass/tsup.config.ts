import { defineConfig } from "tsup";

export default defineConfig({
  name: "node",
  entry: ["./src/index.ts"],
  format: ["esm"],
  clean: true,
  dts: true,
});
