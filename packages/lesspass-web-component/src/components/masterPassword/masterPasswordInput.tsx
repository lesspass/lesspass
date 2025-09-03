import { forwardRef, useEffect, useState } from "react";
import { buildFingerprint } from "lesspass";
import type { Fingerprint } from "lesspass/fingerprint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "./icons";
import { inputStyle } from "../input";

interface MasterPasswordInputProps extends React.ComponentProps<"input"> {
  id: string;
}

function Fingerprint({ fingerprint }: { fingerprint: Fingerprint }) {
  const icon0 = fingerprint[0].icon;
  const icon1 = fingerprint[1].icon;
  const icon2 = fingerprint[2].icon;
  const color0 = fingerprint[0].color;
  const color1 = fingerprint[1].color;
  const color2 = fingerprint[2].color;
  return (
    <div
      id="fingerprint"
      className="flex items-center gap-1 dark:bg-gray-700 p-1.5 rounded-sm"
      data-testid="fingerprint"
    >
      <FontAwesomeIcon
        data-testid={`icon-${icon0}`}
        title={`icon-${icon0}`}
        icon={getIcon(icon0)}
        style={{ color: color0 }}

      />
      <FontAwesomeIcon
        data-testid={`icon-${icon1}`}
        title={`icon-${icon1}`}
        icon={getIcon(icon1)}
        style={{ color: color1 }}
      />
      <FontAwesomeIcon
        data-testid={`icon-${icon2}`}
        title={`icon-${icon2}`}
        icon={getIcon(icon2)}
        style={{ color: color2 }}
      />
    </div>
  );
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
      buildFingerprint(fakeValue).then(setFingerprint);
      const handler = setTimeout(() => {
        if (value) {
          buildFingerprint(value as string).then(setFingerprint);
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
        className={`col-start-1 row-start-1 ${inputStyle} pr-19`}
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
          className="col-start-1 row-start-1 p-1 flex h-6 cursor-pointer items-center gap-1 self-center justify-self-end text-gray-400 rounded-md"
          onClick={() => {
            setType((oldType) =>
              oldType === "password" ? "text" : "password",
            );
          }}
          tabIndex={-1}
        >
          <Fingerprint fingerprint={fingerprint} />
        </button>
      )}
    </div>
  );
});
