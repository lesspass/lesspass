import { PasswordProfile } from "lesspass";
import { Location } from "react-router";

interface OldPasswordProfile {
  counter: number;
  length: number;
  login: string;
  lowercase: boolean;
  numbers: boolean;
  site: string;
  symbols: boolean;
  uppercase: boolean;
  version: number;
}

export function getPasswordProfileFromLocation(
  location: Location,
): PasswordProfile | null {
  try {
    const { hash, search } = location;
    if (hash === "" && search === "") return null;

    if (hash !== "") {
      const queryString = hash.split("?")[1] || "";
      const params = new URLSearchParams(queryString);
      const passwordProfileEncoded = params.get("passwordProfileEncoded");
      if (passwordProfileEncoded) {
        const passwordProfile = JSON.parse(
          atob(passwordProfileEncoded),
        ) as OldPasswordProfile;
        return {
          counter: passwordProfile.counter,
          length: passwordProfile.length,
          login: passwordProfile.login,
          lowercase: passwordProfile.lowercase,
          digits: passwordProfile.numbers,
          site: passwordProfile.site,
          symbols: passwordProfile.symbols,
          uppercase: passwordProfile.uppercase,
        };
      }
    }

    if (search !== "") {
      const queryString = search.split("?")[1] || "";
      const params = new URLSearchParams(queryString);
      return {
        counter: parseInt(params.get("counter") || "1"),
        length: parseInt(params.get("length") || "16"),
        login: decodeURIComponent(params.get("login") || ""),
        lowercase: params.get("lowercase") === "true",
        digits: params.get("digits") === "true",
        site: decodeURIComponent(params.get("site") || ""),
        symbols: params.get("symbols") === "true",
        uppercase: params.get("uppercase") === "true",
      };
    }
    return null;
  } catch (error) {
    return null;
  }
}

export function generateURL(passwordProfile: PasswordProfile) {
  const {
    counter,
    length,
    login,
    lowercase,
    digits,
    site,
    symbols,
    uppercase,
  } = passwordProfile;
  return new URLSearchParams({
    site: encodeURIComponent(site),
    login: encodeURIComponent(login),
    lowercase: lowercase.toString(),
    uppercase: uppercase.toString(),
    digits: digits.toString(),
    symbols: symbols.toString(),
    counter: counter.toString(),
    length: length.toString(),
  }).toString();
}
