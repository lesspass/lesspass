import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../images/logo-white.png";
import { useAppDispatch, useAppSelector } from "../store";
import { ReactNode } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { logout } from "../auth/authSlice";
import { Button } from "./button";
import DarkLightToggleButton from "./DarkLightToggleButton";
import { setSettings } from "../settings/settingsSlice";

const Avatar = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
      <span className="text-sm leading-none font-medium text-white">
        {children}
      </span>
    </span>
  );
};

const LessPassNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "text-xs border px-2 py-1.5 rounded-md whitespace-nowrap text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white",
    isActive
      ? "text-gray-100 bg-gray-700 border-gray-600"
      : "border-transparent bg-transparent",
  ].join(" ");

const LessPassNavLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <NavLink to={to} className={LessPassNavLinkClass}>
      {children}
    </NavLink>
  );
};

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <Disclosure as="nav" className="bg-gray-900">
      <div className="mx-auto max-w-lg px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-block rounded-md p-1 focus:ring focus:ring-gray-500 focus:outline-hidden"
              onClick={() => {
                dispatch(setSettings({ site: "" }));
                navigate("/");
              }}
            >
              <img alt="LessPass" src={Logo} className="h-[25px] w-[110px]" />
            </button>
            <div className="xs:ml-3 xs:block hidden">
              <div className="flex items-center space-x-1">
                <LessPassNavLink to="/passwordProfiles">
                  {t("Header.passwords")}
                </LessPassNavLink>
                <LessPassNavLink to="/settings">
                  {t("Header.settings")}
                </LessPassNavLink>
              </div>
            </div>
          </div>
          <div className="xs:ml-3 xs:block hidden">
            <div className="flex items-center">
              <DarkLightToggleButton />
              {currentUser === null ? (
                <Button type="button" to="/auth/signIn" className="ml-2">
                  {t("Header.signIn")}
                </Button>
              ) : (
                <Menu as="div" className="relative z-20 ml-2">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-1 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Avatar>
                        {currentUser.email.charAt(0).toUpperCase()}
                      </Avatar>
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-50 py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to="/myprofile"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden"
                      >
                        {t("Header.myProfile")}
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden"
                      >
                        {t("Header.settings")}
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(logout());
                          navigate("/");
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden"
                      >
                        {t("Header.SignOut")}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
            </div>
          </div>
          <div className="xs:hidden -mr-2 flex items-center gap-2">
            <DarkLightToggleButton />
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full p-2 text-gray-100 focus:ring focus:ring-gray-500 focus:outline-hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="xs:hidden">
        <div className="flex flex-col space-y-5 p-5">
          <LessPassNavLink to="/passwordProfiles">
            {t("Header.passwords")}
          </LessPassNavLink>
          <LessPassNavLink to="/settings">
            {t("Header.settings")}
          </LessPassNavLink>
        </div>
        <div className="border-t border-gray-700 p-5">
          {currentUser === null ? (
            <div className="flex">
              <DisclosureButton as={Button} to="/auth/signIn">
                {t("Header.signIn")}
              </DisclosureButton>
            </div>
          ) : (
            <div>
              <div className="flex items-center">
                <div className="shrink-0">
                  <Avatar>{currentUser.email.charAt(0).toUpperCase()}</Avatar>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-300 hover:text-white">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-5">
                <DisclosureButton
                  as={Link}
                  to="/myprofile"
                  className="block text-sm/6 font-medium text-gray-300 hover:text-white"
                >
                  {t("Header.myProfile")}
                </DisclosureButton>
                <DisclosureButton
                  as="button"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                  className="block text-sm/6 font-medium text-gray-300 hover:text-white"
                >
                  {t("Header.SignOut")}
                </DisclosureButton>
              </div>
            </div>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
