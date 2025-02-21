import { calcEntropy } from "./entropy";
import {
  createHmac,
  createFingerprint as _createFingerprint,
} from "./fingerprint";
import { PasswordOptions, renderPassword } from "./render-password";

export interface PasswordProfile extends PasswordOptions {
  site: string;
  login: string;
  counter: number;
}

export function generatePassword(
  profile: PasswordProfile,
  masterPassword: string,
) {
  const {
    site,
    login,
    length,
    counter,
    lowercase,
    uppercase,
    digits,
    symbols,
  } = profile;

  return calcEntropy(
    {
      site,
      login,
      counter,
    },
    masterPassword,
  ).then((entropy) => {
    const options = {
      length,
      lowercase,
      uppercase,
      digits,
      symbols,
    };
    const generatedPassword = renderPassword(entropy, options);
    return Promise.resolve(generatedPassword);
  });
}

export function createFingerprint(key: string) {
  return createHmac("sha256", key).then((hmac) => {
    const fingerprint = _createFingerprint(hmac);
    return Promise.resolve(fingerprint);
  });
}

export const defaultPasswordOptions: PasswordOptions = {
  uppercase: true,
  lowercase: true,
  digits: true,
  symbols: true,
  length: 16,
};

export const defaultPasswordProfile: PasswordProfile = {
  ...defaultPasswordOptions,
  site: "",
  login: "",
  counter: 1,
};

export { renderPassword } from "./render-password";

export type {
  Fingerprint,
  Finger,
  FingerprintIcon,
  FingerprintColor,
} from "./fingerprint";
