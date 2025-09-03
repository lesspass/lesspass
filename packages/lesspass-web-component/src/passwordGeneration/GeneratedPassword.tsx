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
      <div className="flex w-full items-center justify-between rounded-md bg-gray-100 text-base text-gray-500 text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset dark:bg-gray-300 dark:text-gray-950">
        <Button
          type="button"
          onClick={() => setShowPassword((sP) => !sP)}
          outline
          className="xs:min-w-24 rounded-none rounded-l-md shadow-none ring-0 dark:bg-white dark:text-gray-950"
        >
          {showPassword ? (
            <>
              <EyeSlashIcon className="xs:mr-2 inline h-5 w-5" />
              <span className="xs:inline hidden">{t("Common.Hide")}</span>
            </>
          ) : (
            <>
              <EyeIcon className="xs:mr-2 inline h-5 w-5" />
              <span className="xs:inline hidden">{t("Common.Show")}</span>
            </>
          )}
        </Button>
        <span className="font-mono text-sm">
          {showPassword ? generatedPassword : "**********"}
        </span>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(generatedPassword).then(() => {
              setPasswordCopiedInClipboard(true);
            });
          }}
          outline
          className="xs:min-w-24 rounded-none rounded-r-md shadow-none ring-0 dark:bg-white dark:text-gray-950"
        >
          <ClipboardDocumentIcon className="xs:mr-2 inline h-5 w-5" />

          <span className="xs:inline hidden">
            {passwordCopiedInClipboard ? t("Common.Copied") : t("Common.Copy")}
          </span>
        </Button>
      </div>
    </div>
  );
}
