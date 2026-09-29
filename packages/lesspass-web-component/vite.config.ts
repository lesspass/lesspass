import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { esmExternalRequirePlugin } from "rolldown/plugins";

const external = ["react", "react-dom", "react/jsx-runtime"];

const viteConfig = defineViteConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/LessPassWebComponent.tsx"),
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [esmExternalRequirePlugin({ external })],
    },
  },
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setupTests.ts"],
    execArgv: ["--no-experimental-webstorage"],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
