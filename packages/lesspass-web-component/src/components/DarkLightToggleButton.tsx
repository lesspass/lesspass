import { useEffect, useState } from "react";
import { LESSPASS_COLOR_THEME_LOCAL_STORAGE_KEY } from "../services/constant";

type colorTheme = "dark" | "light";

function getColorTheme(): colorTheme {
  if (localStorage.getItem(LESSPASS_COLOR_THEME_LOCAL_STORAGE_KEY)) {
    return localStorage.getItem(
      LESSPASS_COLOR_THEME_LOCAL_STORAGE_KEY,
    ) as colorTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function saveColorThemeInLocalStorage(theme: colorTheme) {
  localStorage.setItem(LESSPASS_COLOR_THEME_LOCAL_STORAGE_KEY, theme);
}

export default function DarkLightToggleButton() {
  const [theme, setTheme] = useState<colorTheme>(getColorTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      type="button"
      className="rounded-full p-1 focus:ring focus:ring-zinc-500 focus:outline-hidden"
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        saveColorThemeInLocalStorage(newTheme);
      }}
    >
      <svg
        className="fill-zinc-500 hover:fill-zinc-400 dark:hidden"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
        <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
      </svg>
      <svg
        className="hidden fill-zinc-500 hover:fill-zinc-400 dark:block"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
        <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
      </svg>
      <span className="sr-only">Switch to light / dark version</span>
    </button>
  );
}
