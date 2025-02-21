import "./App.css";
import { Routes, Route } from "react-router";
import AuthPage from "./auth/AuthPage";
import PasswordGenerationPage from "./passwordGeneration/PasswordGenerationPage";
import SignInPage from "./auth/SignInPage";
import ForgotPasswordPage from "./auth/ForgotPasswordPage";
import PasswordResetPage from "./auth/PasswordResetPage";
import AuthenticatedLayout from "./auth/AuthenticatedLayout";
import PasswordProfilesPage from "./passwordProfiles/PasswordProfilesPage";
import MyProfilePage from "./auth/MyProfilePage";
import Page404 from "./Page404";
import SettingsPage from "./settings/SettingsPage";
import Page from "./Page";
import PasswordProfilePage from "./passwordProfiles/PasswordProfilePage";
import NewPasswordProfilePage from "./passwordProfiles/NewPasswordProfilePage";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<PasswordGenerationPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="auth">
            <Route index element={<AuthPage />} />
            <Route path="signIn" element={<SignInPage />} />
            <Route path="forgotPassword" element={<ForgotPasswordPage />} />
            <Route
              path="resetPassword/:uid/:token"
              element={<PasswordResetPage />}
            />
          </Route>
          <Route element={<AuthenticatedLayout />}>
            <Route path="passwordProfiles" element={<PasswordProfilesPage />} />
            <Route
              path="newPasswordProfile"
              element={<NewPasswordProfilePage />}
            />
            <Route
              path="passwordProfiles/:id"
              element={<PasswordProfilePage />}
            />
            <Route path="myprofile" element={<MyProfilePage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}
