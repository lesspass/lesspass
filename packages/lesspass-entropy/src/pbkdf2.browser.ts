import {
  stringToArrayBuffer,
  arrayBufferToHex,
  getAlgorithm,
} from "lesspass-crypto";

export default function pbkdf2(
  password: string,
  salt: string,
  iterations: number,
  keylen: number,
  digest: string
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
        ["encrypt", "decrypt"]
      );
    })
    .then((derivedKey) =>
      window.crypto.subtle
        .exportKey("raw", derivedKey)
        .then((keyArray) => arrayBufferToHex(keyArray))
    );
}
