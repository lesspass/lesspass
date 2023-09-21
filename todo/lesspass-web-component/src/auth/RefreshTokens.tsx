import { useEffect, useState } from "react";
import * as React from "react";
import { useAppDispatch } from "../hooks";
import {
  REFRESH_TOKEN_LOCAL_STORAGE_KEY,
  BASE_URL_LOCAL_STORAGE_KEY,
} from "../constant";
import { defaultBaseUrl } from "lesspass-api";
import { refreshTokens } from "./authSlice";
import NotAuthenticatedLoadingPage from "../NotAuthenticatedLoadingPage";

type RefreshTokensProps = {
  children: React.ReactNode;
};

export function RefreshTokens({ children }: RefreshTokensProps) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
    const baseURL =
      localStorage.getItem(BASE_URL_LOCAL_STORAGE_KEY) || defaultBaseUrl;
    if (refreshToken) {
      dispatch(refreshTokens(baseURL, refreshToken)).finally(() =>
        setIsLoading(false),
      );
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  if (isLoading) {
    return <NotAuthenticatedLoadingPage />;
  }

  return <div>{children}</div>;
}
