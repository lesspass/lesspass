import { BASE_URL_LOCAL_STORAGE_KEY } from "./constant";

export function getBaseUrl(): string {
  return (
    localStorage.getItem(BASE_URL_LOCAL_STORAGE_KEY) ||
    import.meta.env.VITE_APP_BACKEND_HOST ||
    "https://api.lesspass.com"
  );
}

export function setBaseUrl(baseUrl: string) {
  localStorage.setItem(BASE_URL_LOCAL_STORAGE_KEY, baseUrl);
}
