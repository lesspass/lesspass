import { defaultPasswordProfile, type PasswordProfile } from "lesspass";
import { useEffect, useRef, useState } from "react";

export default function PasswordGenerationForm() {
  const [passwordProfile, setPasswordProfile] = useState<PasswordProfile>(
    defaultPasswordProfile,
  );
  const siteInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    siteInputRef.current?.focus();
  }, []);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;
    setPasswordProfile({
      ...passwordProfile,
      [fieldName]: fieldValue,
    });
  };
  const loginInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form>
        <label htmlFor="site-input-field">Site</label>
        <input
          type="text"
          id="site-input-field"
          name="site"
          ref={siteInputRef}
          value={passwordProfile.site}
          onChange={handleChange}
        />
        <label htmlFor="login-input-field">Login</label>
        <input
          type="text"
          id="login-input-field"
          name="login"
          ref={loginInputRef}
          value={passwordProfile.login}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
