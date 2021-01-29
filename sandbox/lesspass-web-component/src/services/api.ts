import axios from "axios";

export function signIn(payload: SignInRequestPayload): Promise<SignInResponsePayload> {
  return axios
    .post("https://api.lesspass.com/api/auth/jwt/create/", payload)
    .then((response) => response.data);
}

export function getPasswords(): Promise<GetPasswordsResponsePayload> {
  return axios
    .get("https://api.lesspass.com/api/passwords/")
    .then((response) => response.data.results);
}

