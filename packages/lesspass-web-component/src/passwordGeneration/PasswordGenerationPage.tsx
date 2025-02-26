import { defaultPasswordProfile } from "lesspass";
import PasswordProfile from "./PasswordProfile";
import { useAppSelector } from "../store";

export default function PasswordGenerationPage() {
  const settings = useAppSelector((state) => state.settings);

  return (
    <div>
      <PasswordProfile
        passwordProfile={{ ...defaultPasswordProfile, ...settings }}
        focus={settings.focus}
      />
    </div>
  );
}
