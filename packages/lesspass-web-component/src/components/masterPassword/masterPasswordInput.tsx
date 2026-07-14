import { forwardRef, useEffect, useMemo, useState } from "react";
import { ZxcvbnFactory } from "@zxcvbn-ts/core";
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en";
import { useTranslation } from "react-i18next";
import { buildFingerprint } from "lesspass";
import type { Fingerprint } from "lesspass/fingerprint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "./icons";
import { inputStyle } from "../input";

const zxcvbnFactory = new ZxcvbnFactory({
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  translations: zxcvbnEnPackage.translations,
});

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
      className="flex items-center gap-1 rounded-sm p-1.5 dark:bg-gray-700"
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
  const { t } = useTranslation();
  const [value, setValue] = useState<string | null>(null);
  const [type, setType] = useState<"password" | "text">("password");
  const [fingerprint, setFingerprint] = useState<Fingerprint | null>(null);

  const RECOMMENDED_MIN_LENGTH = 10;
  const hasValue = value !== null && value.length > 0;
  const isTooShort = hasValue && value.length < RECOMMENDED_MIN_LENGTH;

  // useMemo: zxcvbn is expensive, so only re-check when the password itself changes, not the fingerprint
  // Skip the check for too-short passwords: their score is never displayed.
  const score = useMemo(
  () => (hasValue && !isTooShort ? zxcvbnFactory.check(value).score : -1),
  [value], 
);

  const strengthLabels = [
    t("PasswordStrength.Score0"),
    t("PasswordStrength.Score1"),
    t("PasswordStrength.Score2"),
    t("PasswordStrength.Score3"),
    t("PasswordStrength.Score4"),
  ];

  // A short password must never display as "safe" (blue/green), even if zxcvbn rates its entropy highly.
  const colorClass = isTooShort
    ? "text-amber-600 dark:text-amber-400"
    : ["text-gray-400", "text-red-500", "text-orange-400", "text-blue-400", "text-green-500"][score];

  const label = isTooShort
    ? t("PasswordStrength.TooShort")
    : strengthLabels[score];

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
          className="col-start-1 row-start-1 flex h-6 cursor-pointer items-center gap-1 self-center justify-self-end rounded-md p-1 text-gray-400"
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
       {hasValue && (
        <output
          htmlFor={id}
          data-testid={`${id}-strength`}
          className={`mt-1 text-sm col-start-1 row-start-2 ${colorClass}`}
        >
          {label}
        </output>
      )}
    </div>
  );
});
