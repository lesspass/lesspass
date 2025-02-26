import { expect, test } from "vitest";
import { getPasswordProfileFromLocation, generateURL } from "./url";
import { Location } from "react-router";
import { defaultPasswordProfile } from "lesspass";

test("getPasswordProfileFromLocation old location", () => {
  const oldLocation = {
    pathname: "/",
    search: "",
    hash: "#/?passwordProfileEncoded=eyJsb2dpbiI6ImNvbnRhY3RAZXhhbXBsZS5vcmciLCJzaXRlIjoiZXhhbXBsZS5vcmciLCJ1cHBlcmNhc2UiOmZhbHNlLCJsb3dlcmNhc2UiOnRydWUsIm51bWJlcnMiOmZhbHNlLCJzeW1ib2xzIjpmYWxzZSwibGVuZ3RoIjoxNSwiY291bnRlciI6MiwidmVyc2lvbiI6Mn0%3D",
    state: null,
    key: "default",
  };
  expect(getPasswordProfileFromLocation(oldLocation)).toEqual({
    counter: 2,
    digits: false,
    length: 15,
    login: "contact@example.org",
    lowercase: true,
    site: "example.org",
    symbols: false,
    uppercase: false,
  });
});

test("getPasswordProfileFromLocation empty should return null", () => {
  const emptyLocation = {
    pathname: "/",
    search: "",
    hash: "",
    state: null,
    key: "default",
  };
  expect(getPasswordProfileFromLocation(emptyLocation)).toBeNull();
});

test("getPasswordProfileFromLocation from new search", () => {
  const location = {
    pathname: "/",
    search:
      "?site=example.org&login=contact%2540example.org&lowercase=true&uppercase=true&digits=true&symbols=true&counter=1&length=16",
    hash: "",
    state: null,
    key: "default",
  };
  expect(getPasswordProfileFromLocation(location)).toEqual({
    counter: 1,
    digits: true,
    length: 16,
    login: "contact@example.org",
    lowercase: true,
    site: "example.org",
    symbols: true,
    uppercase: true,
  });
});

test("getPasswordProfileFromLocation with generateUrl", () => {
  const location = {
    pathname: "/",
    search: `?${generateURL(defaultPasswordProfile)}`,
    hash: "",
    state: null,
    key: "default",
  };
  expect(getPasswordProfileFromLocation(location)).toEqual(
    defaultPasswordProfile,
  );
});

test("generateUrl", () => {
  expect(
    generateURL({
      counter: 3,
      digits: false,
      length: 17,
      login: "gv@example.org",
      lowercase: true,
      site: "my site",
      symbols: true,
      uppercase: true,
    }),
  ).toBe(
    "site=my%2520site&login=gv%2540example.org&lowercase=true&uppercase=true&digits=false&symbols=true&counter=3&length=17",
  );
});
