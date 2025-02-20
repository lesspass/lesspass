import axios from "axios";
import { PasswordProfile } from "lesspass";

export const defaultBaseUrl = "https://api.lesspass.com";

axios.defaults.baseURL = defaultBaseUrl;

export function setBaseUrl(baseUrl: string) {
  axios.defaults.baseURL = baseUrl;
}

export type AccessToken = string;
export type RefreshToken = string;

export type AuthSuccessResponsePayload = {
  access: AccessToken;
  refresh: RefreshToken;
};

export function signIn(
  email: string,
  password: string,
): Promise<AuthSuccessResponsePayload> {
  return axios
    .post("/auth/jwt/create/", { email, password })
    .then((response) => response.data);
}

export function refreshTokens(
  refreshToken: RefreshToken,
): Promise<AuthSuccessResponsePayload> {
  return axios
    .post("/auth/jwt/refresh/", { refreshToken })
    .then((response) => response.data);
}

interface PasswordProfileApi extends PasswordProfile {
  id: string;
  created: string;
  modified: string;
}

export type GetPasswordResponsePayload = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PasswordProfileApi[];
};

export function getPasswords(): Promise<GetPasswordResponsePayload> {
  return axios.get("/passwords/").then((response) => response.data);
}

export function updatePassword(
  password: PasswordProfileApi,
): Promise<PasswordProfileApi> {
  return axios
    .put(`/passwords/${password.id}/`, password)
    .then((response) => response.data);
}

export function deletePassword(password: PasswordProfileApi): Promise<void> {
  return axios.delete(`/passwords/${password.id}/`).then(() => void 0);
}
