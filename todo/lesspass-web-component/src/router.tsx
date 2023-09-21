import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import PasswordGenerationPage from "./PasswordGenerationPage";
import PageNotFound from "./PageNotFound";
import RegisterPage from "./auth/RegisterPage";
import SignInPage from "./auth/SignInPage";
import SettingsPage from "./SettingsPage";
import MyAccountPage from "./auth/MyAccountPage";

export const routes = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <PasswordGenerationPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/myaccount", element: <MyAccountPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
];
