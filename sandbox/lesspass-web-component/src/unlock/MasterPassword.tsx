import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../icons";

type MasterPasswordProps = {
  value: string;
  createFingerprint: (masterPassword: MasterPassword) => Promise<Fingerprint>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MasterPassword = ({
  value,
  createFingerprint,
  onChange,
}: MasterPasswordProps) => {
  const [fingerprint, setFingerprint] = useState<Fingerprint | null>(null);
  const masterPasswordInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    masterPasswordInputRef.current?.focus();
  }, []);
  useEffect(() => {
    let isSubscribed = true;
    const fakeValue = Math.random().toString(36).substring(7);
    createFingerprint(fakeValue).then((fakedFingerprint: Fingerprint) => {
      if (isSubscribed) {
        setFingerprint(fakedFingerprint);
      }
    });
    const setFingerprintTimer = setTimeout(() => {
      if (value) {
        createFingerprint(value).then(setFingerprint);
      } else {
        setFingerprint(null);
      }
    }, 500);
    return () => {
      isSubscribed = false;
      clearTimeout(setFingerprintTimer);
    };
  }, [createFingerprint, value]);
  return (
    <div>
      <input
        id="master-password-input"
        data-testid="master-password-input"
        name="masterPassword"
        type="password"
        ref={masterPasswordInputRef}
        value={value}
        onChange={onChange}
      />
      {fingerprint && (
        <div id="fingerprint" data-testid="fingerprint">
          <FontAwesomeIcon
            title={`icon-${fingerprint[0].icon}`}
            icon={getIcon(fingerprint[0].icon)}
          />
          <FontAwesomeIcon
            title={`icon-${fingerprint[1].icon}`}
            icon={getIcon(fingerprint[1].icon)}
          />
          <FontAwesomeIcon
            title={`icon-${fingerprint[2].icon}`}
            icon={getIcon(fingerprint[2].icon)}
          />
        </div>
      )}
    </div>
  );
};

export default MasterPassword;
