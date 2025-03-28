import { getAlgorithm } from "./algo";
import { stringToArrayBuffer, arrayBufferToHex } from "./string";

export function hmac(algorithm: string, key: string, data?: string) {
  return window.crypto.subtle
    .importKey(
      "raw",
      stringToArrayBuffer(key),
      {
        name: "HMAC",
        hash: { name: getAlgorithm(algorithm) },
      },
      true,
      ["sign", "verify"],
    )
    .then((key) =>
      window.crypto.subtle
        .sign({ name: "HMAC" }, key, stringToArrayBuffer(data || ""))
        .then((signature) => arrayBufferToHex(signature)),
    );
}
