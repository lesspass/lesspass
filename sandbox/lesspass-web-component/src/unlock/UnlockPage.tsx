import React, { useEffect, useRef, useState } from "react";
import MasterPassword from "./MasterPassword";
import { createFingerprint } from "lesspass";

export const UnlockPage = ({
  settings,
  unlock,
}: {
  settings: Settings;
  unlock: (masterPassword: MasterPassword, saveMasterPassword:boolean) => void;
}) => {
  const [masterPassword, setMasterPassword] = useState<MasterPassword>("");
  const [saveMasterPassword, setSaveMasterPassword] = useState(settings.saveMasterPassword);
  const masterPasswordInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    masterPasswordInputRef.current?.focus();
  }, []);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        unlock(masterPassword, saveMasterPassword);
      }}
    >
      <MasterPassword
        value={masterPassword}
        createFingerprint={createFingerprint}
        onChange={(event) => {
          event.persist();
          setMasterPassword(event.target.value);
        }}
      />
      <input
        id="save-master-password-checkbox"
        data-testid="save-master-password-checkbox"
        name="saveMasterPassword"
        type="checkbox"
        checked={saveMasterPassword}
        onChange={(event) => {
          setSaveMasterPassword(event.target.checked);
        }}
      />
      keep master password locally <a href="#">understand the risk</a>
      <button id="unlock" data-testid="unlock">
        unlock
      </button>
    </form>
  );
};

export default UnlockPage;
