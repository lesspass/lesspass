import { PasswordProfileFromApi } from "../types";
import { Link } from "react-router";
import { useGetPasswordProfilesQuery } from "./passwordProfilesApi";
import { PlusIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { LoadingPage } from "../LoadingPage";
import { Button } from "../components/button";
import { useTranslation } from "react-i18next";
import { Input } from "../components/input";

const filterPasswordProfiles = (
  passwords: PasswordProfileFromApi[],
  searchText: string,
) => {
  return passwords.filter(
    ({ site, login }) =>
      site.toLowerCase().includes(searchText.toLowerCase()) ||
      login.toLowerCase().includes(searchText.toLowerCase()),
  );
};

export default function PasswordProfilesPage() {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const { data, isLoading } = useGetPasswordProfilesQuery();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!data) {
    return (
      <div>
        <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
          <WrenchScrewdriverIcon className="mx-auto size-12 text-gray-400" />
          <span className="mt-2 block text-sm font-semibold">
            {t("PasswordProfilesPage.NoSavedPasswordProfiles")}
          </span>
          <Link to="/" className="text-sm">
            {t("PasswordProfilesPage.SaveAPassword")}
          </Link>
        </div>
      </div>
    );
  }

  const filteredPasswordProfiles = filterPasswordProfiles(data, searchText);
  return (
    <div className="divide-y divide-gray-100 dark:divide-white/5">
      <div className="flex justify-between gap-2 py-4">
        <Input
          type="text"
          placeholder={t("PasswordProfilesPage.SearchPasswords")}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoFocus
        />
        <Button to="/newPasswordProfile">
          <PlusIcon className="size-5" />
          {t("PasswordProfilesPage.NewPassword")}
        </Button>
      </div>
      <ul role="list" className="divide-y divide-gray-100 dark:divide-white/5 overflow-y-auto" style={{maxHeight: 390}}>
        {filteredPasswordProfiles.map((passwordProfile) => (
          <li
            key={passwordProfile.id}
            className="relative flex justify-between gap-x-6 py-5"
          >
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                <Link to={`/passwordProfiles/${passwordProfile.id}`}>
                  {passwordProfile.site}
                </Link>
              </p>
              <p className="mt-1 flex text-xs/5 text-gray-900 dark:text-white">
                {passwordProfile.login}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="flex flex-col items-end gap-1">
                <div className="flex gap-1">
                  {passwordProfile.lowercase && (
                    <span className="rounded-sm border border-gray-400 bg-gray-100 px-2 text-xs text-gray-900">
                      a-z
                    </span>
                  )}
                  {passwordProfile.uppercase && (
                    <span className="rounded-sm border border-gray-400 bg-gray-100 px-2 text-xs text-gray-900">
                      A-Z
                    </span>
                  )}
                  {passwordProfile.digits && (
                    <span className="rounded-sm border border-gray-400 bg-gray-100 px-2 text-xs text-gray-900">
                      0-9
                    </span>
                  )}
                  {passwordProfile.symbols && (
                    <span className="rounded-sm border border-gray-400 bg-gray-100 px-2 text-xs text-gray-900">
                      %!@
                    </span>
                  )}
                </div>
                <div className="flex gap-1">
                  <span className="rounded-sm border border-gray-400 bg-gray-100 px-2 text-xs text-gray-900">
                    {t("PasswordProfile.Length")}: {passwordProfile.length}
                  </span>
                  <span className="rounded-sm border border-gray-400 bg-gray-100 px-2 text-xs text-gray-900">
                    {t("PasswordProfile.C")}: {passwordProfile.counter}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
