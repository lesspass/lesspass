import PasswordProfile from "./PasswordProfile";
import { useAppDispatch, useAppSelector } from "../store";
import { Navigate, useLocation } from "react-router";
import { getPasswordProfileFromLocation } from "./url";
import { useSearchPasswordProfileQuery } from "../passwordProfiles/passwordProfilesApi";
import { LoadingPage } from "../LoadingPage";
import { skipToken } from "@reduxjs/toolkit/query";
import { setSettings, SettingsState } from "../settings/settingsSlice";

function PasswordGenerationPageWebExtension({
  settings,
}: {
  settings: SettingsState;
}) {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { site } = settings;
  const { data, isLoading } = useSearchPasswordProfileQuery(
    site === "" || currentUser === null ? skipToken : site,
  );
  if (isLoading) {
    return <LoadingPage />;
  }
  if (data) {
    return <Navigate to={`/passwordProfiles/${data.id}`} />;
  }
  return (
    <div>
      <PasswordProfile
        passwordProfile={settings}
        focus={settings.focus}
        onClear={() => {
          dispatch(setSettings({ site: "" }));
        }}
      />
    </div>
  );
}

function PasswordGenerationPageSite({ settings }: { settings: SettingsState }) {
  const passwordProfileFromUrl = getPasswordProfileFromLocation(useLocation());
  if (passwordProfileFromUrl) {
    return (
      <div>
        <PasswordProfile
          passwordProfile={{ ...passwordProfileFromUrl }}
          focus={settings.focus}
        />
      </div>
    );
  }
  return (
    <div>
      <PasswordProfile passwordProfile={settings} focus={settings.focus} />
    </div>
  );
}

export default function PasswordGenerationPage() {
  const settings = useAppSelector((state) => state.settings);
  const { isWebExtensionContext } = settings;
  if (isWebExtensionContext) {
    return <PasswordGenerationPageWebExtension settings={settings} />;
  }
  return <PasswordGenerationPageSite settings={settings} />;
}
