import { calcEntropy, hmac } from "./crypto";
import { createFingerprint } from "./fingerprint";
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

export function buildFingerprint(key: string) {
  return hmac("sha256", key).then((hmac) => {
    const fingerprint = createFingerprint(hmac);
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
