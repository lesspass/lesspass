import crypto, { BinaryLike } from "crypto";

export default function hmac(
  algorithm: string,
  key: BinaryLike,
  data?: BinaryLike
): Promise<string> {
  return new Promise((resolve) => {
    resolve(
      crypto
        .createHmac(algorithm, key)
        .update(data || "")
        .digest("hex")
    );
  });
}
