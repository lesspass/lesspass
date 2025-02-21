import {test, expect} from "vitest"
import { cleanUrl } from "./url";

test("cleanUrl", () => {
  expect(cleanUrl("https://lesspass.com/#!/")).toBe("lesspass.com");
  expect(cleanUrl("https://lesspass.com/api/")).toBe("lesspass.com");
  expect(cleanUrl("https://www.lesspass.com/#!/")).toBe("www.lesspass.com");
  expect(cleanUrl("https://www.lesspass.com/api/")).toBe("www.lesspass.com");
  expect(cleanUrl("https://api.lesspass.com/")).toBe("api.lesspass.com");
  expect(cleanUrl("http://lesspass.com")).toBe("lesspass.com");
  expect(
    cleanUrl(
      "http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url",
    ),
  ).toBe("stackoverflow.com");
  expect(cleanUrl("http://v4-alpha.getbootstrap.com/components/buttons/")).toBe(
    "v4-alpha.getbootstrap.com",
  );
  expect(
    cleanUrl(
      "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier",
    ),
  ).toBe("accounts.google.com");
  expect(cleanUrl("https://www.netflix.com/browse")).toBe("www.netflix.com");
  expect(cleanUrl("https://www.bbc.co.uk")).toBe("www.bbc.co.uk");
  expect(cleanUrl("https://192.168.1.1:10443/webapp/")).toBe(
    "192.168.1.1:10443",
  );
  expect(cleanUrl(undefined)).toBe("");
  expect(cleanUrl("chrome://extensions/")).toBe("");
});
