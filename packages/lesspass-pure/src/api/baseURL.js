export const defaultBaseURL = "https://lesspass.com";

export function getBaseURL() {
  return localStorage.getItem("baseURL") || defaultBaseURL;
}
