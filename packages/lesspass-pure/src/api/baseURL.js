import { key } from "../services/localStore";

export const defaultBaseURL = "https://api.lesspass.com";

export function getBaseURL() {
  const lesspass = localStorage.getItem(key);
  if (lesspass) {
    return JSON.parse(lesspass).settings.baseURL;
  }
  return defaultBaseURL;
}
