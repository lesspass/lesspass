/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactNative from 'vitest-react-native'

export default defineConfig({
  plugins: [reactNative(), react()],
});
