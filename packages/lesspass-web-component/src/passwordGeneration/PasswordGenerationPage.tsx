import PasswordProfile from "./PasswordProfile";
import { useAppSelector } from "../store";
import { Navigate, useLocation } from "react-router";
import { getPasswordProfileFromLocation } from "./url";
import { useSearchPasswordProfileQuery } from "../passwordProfiles/passwordProfilesApi";
import { LoadingPage } from "../LoadingPage";

function PasswordProfileWithSettings() {
  const settings = useAppSelector((state) => state.settings);
  return (
    <div>
      <PasswordProfile
        passwordProfile={{ ...settings }}
        focus={settings.focus}
      />
    </div>
  );
}

function LoadPasswordProfileWithSite({ site }: { site: string }) {
  const { data, isLoading } = useSearchPasswordProfileQuery(site);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (data) {
    return <Navigate to={`/passwordProfiles/${data.id}`} />;
  }

  return <PasswordProfileWithSettings />;
}

export default function PasswordGenerationPage() {
  const settings = useAppSelector((state) => state.settings);
  const { currentUser } = useAppSelector((state) => state.auth);
  const { site, isWebExtensionContext } = settings;
  const passwordProfileFromUrl = getPasswordProfileFromLocation(useLocation());
  if (isWebExtensionContext && currentUser) {
    return <LoadPasswordProfileWithSite site={site} />;
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
  return <PasswordProfileWithSettings />;
}
