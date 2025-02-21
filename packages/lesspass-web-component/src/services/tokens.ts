import {
  ACCESS_TOKEN_LOCAL_STORAGE_KEY,
  REFRESH_TOKEN_LOCAL_STORAGE_KEY,
} from "./constant";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export function saveTokens(tokens: Tokens) {
  localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, tokens.accessToken);
  localStorage.setItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY, tokens.refreshToken);
}

export function removeTokens() {
  localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
  localStorage.removeItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
}

export function getTokens(): Tokens | null {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
  if (accessToken === null || refreshToken === null) return null;
  return {
    accessToken,
    refreshToken,
  };
}
