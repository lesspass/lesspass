import { useEffect, useState } from "react";
import {
  ClipboardDocumentIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../components/button";
import { useTranslation } from "react-i18next";

export default function GeneratedPassword({
  generatedPassword,
}: {
  generatedPassword: string | null;
}) {
  const { t } = useTranslation();
  const [passwordCopiedInClipboard, setPasswordCopiedInClipboard] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (passwordCopiedInClipboard) {
      const clearPasswordCopied = setTimeout(() => {
        setPasswordCopiedInClipboard(false);
      }, 2000);
      return () => clearTimeout(clearPasswordCopied);
    }
  }, [passwordCopiedInClipboard]);

  if (generatedPassword === null) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between w-full text-base text-gray-900 ring-1 ring-inset ring-gray-300 bg-gray-100 text-gray-500 rounded-md shadow-xs">
        <Button
          type="button"
          onClick={() => setShowPassword((sP) => !sP)}
          outline
          className="shadow-none rounded-none rounded-l-md ring-0 xs:min-w-24"
        >
          {showPassword ? (
            <>
              <EyeSlashIcon className="inline w-5 h-5 xs:mr-2" />
              <span className="hidden xs:inline">{t("Common.Hide")}</span>
            </>
          ) : (
            <>
              <EyeIcon className="inline w-5 h-5 xs:mr-2" />
              <span className="hidden xs:inline">{t("Common.Show")}</span>
            </>
          )}
        </Button>
        <span className="text-sm font-mono">
          {showPassword ? generatedPassword : "**********"}
        </span>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(generatedPassword).then(() => {
              setPasswordCopiedInClipboard(true);
            });
          }}
          outline
          className="shadow-none rounded-none rounded-r-md ring-0 xs:min-w-24"
        >
          <ClipboardDocumentIcon className="inline w-5 h-5 xs:mr-2" />

          <span className="hidden xs:inline">
            {passwordCopiedInClipboard ? t("Common.Copied") : t("Common.Copy")}
          </span>
        </Button>
      </div>
    </div>
  );
}
