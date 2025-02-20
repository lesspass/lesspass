import {
  Api,
  BaseQueryFn,
  coreModuleName,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export interface Credentials {
  email: string;
  password: string;
}

export interface CurrentUser {
  id: string;
  email: string;
}

export interface NewPasswordForm {
  current_password: string;
  new_password: string;
  re_new_password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  company: string;
}

export interface TokensFromAPI {
  access: string;
  refresh: string;
}

export function getAuthEndpoints(
  api: Api<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
    {},
    "api",
    never,
    typeof coreModuleName
  >,
) {
  return api.enhanceEndpoints({ addTagTypes: ["Auth"] }).injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<TokensFromAPI, Credentials>({
        query: (body) => ({
          url: "/auth/jwt/create/",
          method: "POST",
          body,
        }),
      }),
      refreshToken: builder.mutation<TokensFromAPI, string>({
        query: (refreshToken) => ({
          url: "/auth/jwt/refresh/",
          method: "POST",
          body: { refreshToken },
        }),
      }),
      register: builder.mutation<CurrentUser, RegisterForm>({
        query: (body) => ({
          url: "/auth/users/",
          method: "POST",
          body,
        }),
      }),
      setPassword: builder.mutation<void, NewPasswordForm>({
        query: (body) => ({
          url: "/auth/users/set_password/",
          method: "POST",
          body,
        }),
      }),
      resetPassword: builder.mutation<void, string>({
        query: (email) => ({
          url: "/auth/users/reset_password/",
          method: "POST",
          body: { email },
        }),
      }),
      confirmResetPassword: builder.mutation<
        void,
        {
          uid: string;
          token: string;
          password: string;
        }
      >({
        query: ({ uid, token, password }) => ({
          url: "/auth/users/reset_password_confirm/",
          method: "POST",
          body: {
            uid,
            token,
            new_password: password,
            re_new_password: password,
          },
        }),
      }),
      getCurrentUser: builder.query<CurrentUser, void>({
        query: () => "/auth/users/me",
        providesTags: () => [{ type: "Auth", id: "me" }],
      }),
    }),
  });
}
