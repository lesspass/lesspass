import PasswordProfile from "./PasswordProfile";
import { useAppSelector } from "../store";
import { Navigate, useLocation } from "react-router";
import { getPasswordProfileFromLocation } from "./url";
import { useSearchPasswordProfileQuery } from "../passwordProfiles/passwordProfilesApi";
import { LoadingPage } from "../LoadingPage";
import { skipToken } from "@reduxjs/toolkit/query";

function LoadPasswordProfileWithSite() {
  const settings = useAppSelector((state) => state.settings);
  const { site } = settings;
  const { data, isLoading } = useSearchPasswordProfileQuery(
    site === "" ? skipToken : site,
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (data && site) {
    return <Navigate to={`/passwordProfiles/${data.id}`} />;
  }

  return (
    <div>
      <PasswordProfile
        passwordProfile={{ ...settings }}
        focus={settings.focus}
      />
    </div>
  );
}

export default function PasswordGenerationPage() {
  const settings = useAppSelector((state) => state.settings);
  const { currentUser } = useAppSelector((state) => state.auth);
  const { isWebExtensionContext } = settings;
  const passwordProfileFromUrl = getPasswordProfileFromLocation(useLocation());
  if (isWebExtensionContext && currentUser) {
    return <LoadPasswordProfileWithSite />;
  }
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
      <PasswordProfile
        passwordProfile={{ ...settings }}
        focus={settings.focus}
      />
    </div>
  );
}
