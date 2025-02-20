import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}


export function getBaseQueryWithReauth({
  baseUrl,
  getTokens,
  saveTokens,
  removeTokens,
}: {
  baseUrl: string;
  getTokens: () => Tokens | null;
  saveTokens: (tokens: Tokens) => void;
  removeTokens: () => void;
}) {
  const mutex = new Mutex();

  const baseQuery = fetchBaseQuery({
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
    let result = await baseQuery(args, api, extraOptions);
    const tokens = getTokens();
    if (result.error && result.error.status === 401 && tokens) {
      if (mutex.isLocked()) {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      } else {
        const release = await mutex.acquire();
        saveTokens(tokens);
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

  return baseQueryWithReauth;
}
