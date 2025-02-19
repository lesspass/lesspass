import { pbkdf2 as cryptoPbkdf2 } from "crypto";

export function pbkdf2(
  password: string,
  salt: string,
  iterations: number,
  keylen: number,
  digest: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    cryptoPbkdf2(password, salt, iterations, keylen, digest, (error, key) => {
      if (error) {
        reject(error);
      } else {
        resolve(key.toString("hex"));
      }
    });
  });
}
