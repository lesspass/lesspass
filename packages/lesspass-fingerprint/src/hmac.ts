import { createHmac, BinaryLike } from "crypto";

export function hmac(
  algorithm: string,
  key: BinaryLike,
  data?: BinaryLike
): Promise<string> {
  return new Promise((resolve) => {
    resolve(
      createHmac(algorithm, key)
        .update(data || "")
        .digest("hex")
    );
  });
}
