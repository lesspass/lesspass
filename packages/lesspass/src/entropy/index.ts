import { pbkdf2 } from "./pbkdf2";

interface SiteLoginCounter {
  site: string;
  login: string;
  counter: number;
}

interface Crypto {
  iterations?: number;
  keylen?: number;
  digest?: string;
}

export function calcEntropy(
  siteLoginAndCounter: SiteLoginCounter & { [k: string]: unknown },
  masterPassword: string,
  crypto: Crypto = {},
) {
  const { site, login, counter } = siteLoginAndCounter;
  const salt = site + login + counter.toString(16);
  const { iterations, keylen, digest } = {
    iterations: 100000,
    keylen: 32,
    digest: "sha256",
    ...crypto,
  };
  return pbkdf2(masterPassword, salt, iterations, keylen, digest);
}

export function isSupported(): Promise<boolean> {
  return calcEntropy(
    {
      site: "lesspass.com",
      login: "♥",
      uppercase: true,
      lowercase: true,
      digits: true,
      symbols: true,
      length: 16,
      counter: 1,
    },
    "tHis is a g00d! password",
    {
      iterations: 1,
      keylen: 32,
      digest: "sha256",
    },
  )
    .then((entropy) =>
      Promise.resolve(
        entropy ===
          "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da",
      ),
    )
    .catch(() => Promise.resolve(false));
}

export default {
  isSupported,
  calcEntropy,
};
