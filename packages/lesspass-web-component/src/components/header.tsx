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

const Avatar = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
      <span className="text-sm font-medium leading-none text-white">
        {children}
      </span>
    </span>
  );
};

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-lg px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link to="/">
                <img alt="LessPass" src={Logo} className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden xs:ml-6 xs:block">
              <div className="flex space-x-1">
                <NavLink
                  to="/passwordProfiles"
                  className={({ isActive }) =>
                    `rounded-md px-1 py-2 text-sm text-nowrap ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                  }
                >
                  {t("Header.passwords")}
                </NavLink>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `rounded-md px-1 py-2 text-sm text-nowrap ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
                  }
                >
                  {t("Header.settings")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden xs:ml-6 xs:block">
            <div className="flex items-center">
              {currentUser === null ? (
                <Button to="/auth/signIn">{t("Header.signIn")}</Button>
              ) : (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Avatar>
                        {currentUser.email.charAt(0).toUpperCase()}
                      </Avatar>
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to="/myprofile"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        {t("Header.myProfile")}
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
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
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        {t("Header.SignOut")}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
            </div>
          </div>
          <div className="-mr-2 flex xs:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
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
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLink
            to="/passwordProfiles"
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-base font-medium text-nowrap ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
            }
          >
            {t("Header.passwords")}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-base font-medium text-nowrap ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`
            }
          >
            {t("Header.settings")}
          </NavLink>
        </div>

        <div className="border-t border-gray-700 pt-4 pb-3">
          {currentUser === null ? (
            <div className="px-2">
              <DisclosureButton
                as={Link}
                to="/auth/signIn"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                {t("Header.signIn")}
              </DisclosureButton>
            </div>
          ) : (
            <div>
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <Avatar>{currentUser.email.charAt(0).toUpperCase()}</Avatar>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-400">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <DisclosureButton
                  as={Link}
                  to="/myprofile"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  {t("Header.myProfile")}
                </DisclosureButton>
                <DisclosureButton
                  as="button"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
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
