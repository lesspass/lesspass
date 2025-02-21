import { forwardRef, useEffect, useState } from "react";
import { createFingerprint, Fingerprint } from "lesspass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "./icons";
import { inputStyle } from "../input";

interface MasterPasswordInputProps extends React.ComponentProps<"input"> {
  id: string;
}

export const MasterPasswordInput = forwardRef<
  HTMLInputElement,
  MasterPasswordInputProps
>(({ id, onChange, onBlur, name }, ref) => {
  const [value, setValue] = useState<string | null>(null);
  const [type, setType] = useState<"password" | "text">("password");

  const [fingerprint, setFingerprint] = useState<Fingerprint | null>(null);

  useEffect(() => {
    if (value) {
      const fakeValue = Math.random().toString(36).substring(7);
      createFingerprint(fakeValue).then((fakedFingerprint: Fingerprint) => {
        setFingerprint(fakedFingerprint);
      });
      const handler = setTimeout(() => {
        if (value) {
          createFingerprint(value as string).then(setFingerprint);
        }
      }, 500);
      return () => clearTimeout(handler);
    } else {
      setFingerprint(null);
    }
  }, [value]);

  return (
    <div className="grid grid-cols-1">
      <input
        id={id}
        data-testid={id}
        type={type}
        autoCorrect="off"
        autoCapitalize="none"
        ref={ref}
        className={`col-start-1 row-start-1 ${inputStyle}`}
        name={name}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        onBlur={onBlur}
      />
      {fingerprint && (
        <button
          type="button"
          className="cursor-pointer col-start-1 row-start-1 mr-3 h-6 w-15 self-center justify-self-end text-gray-400 flex gap-1 items-center"
          onClick={() => {
            setType((oldType) =>
              oldType === "password" ? "text" : "password",
            );
          }}
          tabIndex={-1}
        >
          <div
            id="fingerprint"
            className="flex items-center gap-1"
            data-testid="fingerprint"
          >
            <FontAwesomeIcon
              title={`icon-${fingerprint[0].icon}`}
              icon={getIcon(fingerprint[0].icon)}
              style={{ color: fingerprint[0].color }}
            />
            <FontAwesomeIcon
              title={`icon-${fingerprint[1].icon}`}
              icon={getIcon(fingerprint[1].icon)}
              style={{ color: fingerprint[1].color }}
            />
            <FontAwesomeIcon
              title={`icon-${fingerprint[2].icon}`}
              icon={getIcon(fingerprint[2].icon)}
              style={{ color: fingerprint[2].color }}
            />
          </div>
        </button>
      )}
    </div>
  );
});
