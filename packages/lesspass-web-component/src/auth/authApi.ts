import { api } from "../api";

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

export const authApi = api
  .enhanceEndpoints({ addTagTypes: ["Auth"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      signIn: builder.mutation<TokensFromAPI, Credentials>({
        query: (body) => ({
          url: "/auth/jwt/create/",
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

export const {
  useSignInMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useResetPasswordMutation,
  useSetPasswordMutation,
  useConfirmResetPasswordMutation,
} = authApi;
