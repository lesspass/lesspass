import { stringToArrayBuffer, arrayBufferToHex } from "./string";

export function getAlgorithm(algorithm: string) {
  const algorithms: { [k: string]: string } = {
    sha1: "SHA-1",
    "sha-1": "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha512: "SHA-512",
    "sha-512": "SHA-512",
  };
  const lowercaseAlgorithm = algorithm.toLowerCase();
  if (lowercaseAlgorithm in algorithms) {
    return algorithms[lowercaseAlgorithm];
  }
  return "SHA-256";
}

export function pbkdf2(
  password: string,
  salt: string,
  iterations: number,
  keylen: number,
  digest: string,
) {
  return window.crypto.subtle
    .importKey("raw", stringToArrayBuffer(password), "PBKDF2", false, [
      "deriveKey",
    ])
    .then((key) => {
      const algo = {
        name: "PBKDF2",
        salt: stringToArrayBuffer(salt),
        iterations,
        hash: getAlgorithm(digest),
      };
      return window.crypto.subtle.deriveKey(
        algo,
        key,
        {
          name: "AES-CTR",
          length: keylen * 8,
        },
        true,
        ["encrypt", "decrypt"],
      );
    })
    .then((derivedKey) =>
      window.crypto.subtle
        .exportKey("raw", derivedKey)
        .then((keyArray) => arrayBufferToHex(keyArray)),
    );
}
