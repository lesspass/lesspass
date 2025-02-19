import { calcEntropy } from "./entropy";
import LessPassFingerprint from "./fingerprint";
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
  const site = profile.site;
  const login = profile.login;
  const length = profile.length;
  const counter = profile.counter;
  const lowercase = profile.lowercase;
  const uppercase = profile.uppercase;
  const digits = profile.digits;
  const symbols = profile.symbols;

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
  return LessPassFingerprint.createHmac("sha256", key).then((hmac) => {
    const fingerprint = LessPassFingerprint.createFingerprint(hmac);
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
