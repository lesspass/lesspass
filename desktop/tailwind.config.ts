import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pf: {
          surface: "#0b1326",
          container: "#171f33",
          highest: "#2d3449",
          primary: "#89ceff",
          primaryContainer: "#0ea5e9",
          secondary: "#4fdbc8",
          secondaryContainer: "#04b4a2",
          tertiary: "#ffb86e",
          error: "#ffb4ab",
          errorContainer: "#93000a"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      borderRadius: {
        DEFAULT: "2px",
        lg: "4px",
        xl: "8px"
      }
    }
  }
} satisfies Config;
