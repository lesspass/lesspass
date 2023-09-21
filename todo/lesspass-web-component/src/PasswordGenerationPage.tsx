import { defaultPasswordProfile, type PasswordProfile } from "lesspass";
import { useEffect, useRef, useState } from "react";

export default function PasswordGenerationPage() {
  const [passwordProfile, setPasswordProfile] = useState<PasswordProfile>(
    defaultPasswordProfile,
  );
  const siteInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    siteInputRef.current?.focus();
  }, []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setPasswordProfile({
      ...passwordProfile,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="site-input">Site</label>
        <input
          type="text"
          id="site-input"
          name="site"
          ref={siteInputRef}
          value={passwordProfile.site}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
