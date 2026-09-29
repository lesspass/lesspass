import { getAlgorithm } from "./algo";
import { arrayBufferToHex, stringToArrayBuffer } from "./string";

export function pbkdf2(
  password: string,
  salt: string,
  iterations: number,
  keylen: number,
  digest: string,
) {
  return globalThis.crypto.subtle
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
      return globalThis.crypto.subtle.deriveKey(
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
      globalThis.crypto.subtle
        .exportKey("raw", derivedKey)
        .then((keyArray) => arrayBufferToHex(keyArray)),
    );
}
