import { PasswordProfile } from "lesspass";

export type PasswordProfileFromApi = PasswordProfile & {
  id: string;
  created: string;
  modified: string;
};

export type PasswordProfileWithMasterPassword = PasswordProfile & {
  masterPassword: string;
};

export type PasswordProfileFromApiWithMasterPassword =
  PasswordProfileFromApi & { masterPassword: string };
