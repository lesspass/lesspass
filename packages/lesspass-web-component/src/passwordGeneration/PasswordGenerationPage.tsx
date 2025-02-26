import { defaultPasswordProfile } from "lesspass";
import PasswordProfile from "./PasswordProfile";
import { useAppSelector } from "../store";
import { useLocation } from "react-router";
import { getPasswordProfileFromLocation } from "./url";

export default function PasswordGenerationPage() {
  const passwordProfileFromUrl = getPasswordProfileFromLocation(useLocation());
  const settings = useAppSelector((state) => state.settings);
  const passwordProfile =
    passwordProfileFromUrl === null
      ? { ...defaultPasswordProfile, ...settings }
      : { ...passwordProfileFromUrl };
  return (
    <div>
      <PasswordProfile
        passwordProfile={passwordProfile}
        focus={settings.focus}
      />
    </div>
  );
}
