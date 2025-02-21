import { getTokens, saveTokens, removeTokens } from "./services/tokens";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { getBaseUrl } from "./services/baseUrl";
import { TokensFromAPI } from "./auth/authApi";

const mutex = new Mutex();

const rawBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const tokens = getTokens();
      if (tokens && !headers.has("authorization")) {
        const { accessToken } = tokens;
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  });

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  const baseQuery = rawBaseQuery(getBaseUrl());
  let result = await baseQuery(args, api, extraOptions);
  const tokens = getTokens();
  if (result.error && result.error.status === 401 && tokens) {
    if (mutex.isLocked()) {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    } else {
      const release = await mutex.acquire();
      const refreshResult = await baseQuery(
        {
          url: "/auth/jwt/refresh/",
          method: "POST",
          body: { refresh: tokens.refreshToken },
        },
        api,
        extraOptions,
      );
      const newTokens = refreshResult.data as TokensFromAPI;
      if (newTokens) {
        saveTokens({
          accessToken: newTokens.access,
          refreshToken: newTokens.refresh,
        });
      }
      try {
        result = await baseQuery(args, api, extraOptions);
      } catch (error) {
        removeTokens();
      } finally {
        release();
      }
    }
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
