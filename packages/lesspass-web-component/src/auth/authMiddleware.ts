import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { removeTokens, saveTokens } from "../services/tokens";
import { logout } from "./authSlice";

const authMiddleware = createListenerMiddleware();

authMiddleware.startListening({
  matcher: authApi.endpoints.signIn.matchFulfilled,
  effect: (action) => {
    const { payload } = action;
    const { access, refresh } = payload;
    saveTokens({
      accessToken: access,
      refreshToken: refresh,
    });
  },
});

authMiddleware.startListening({
  actionCreator: logout,
  effect: () => {
    removeTokens();
  },
});

export default authMiddleware;
