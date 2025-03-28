import { expect, test } from "vitest";
import { createHmac } from "./hmac";

test("createHmac", () =>
  createHmac("sha256", "password").then((fingerprint) => {
    expect(
      "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
    ).toBe(fingerprint);
  }));

test("createHmac and update", () =>
  createHmac("sha256", "password", "salt").then((fingerprint) => {
    expect(
      "fc328232993ff34ca56631e4a101d60393cad12171997ee0b562bf7852b2fed0",
    ).toBe(fingerprint);
  }));
