import { removeSiteSubdomain } from "./site";

test("removeSiteSubdomain", () => {
  expect(removeSiteSubdomain("lesspass.com")).toBe("lesspass.com");
  expect(removeSiteSubdomain("api.lesspass.com")).toBe("lesspass.com");
  expect(removeSiteSubdomain("www.lesspass.com")).toBe("lesspass.com");
  expect(removeSiteSubdomain("www.bbc.co.uk")).toBe("bbc.co.uk");
  expect(removeSiteSubdomain("192.168.1.1:10443")).toBe("192.168.1.1:10443");
  expect(removeSiteSubdomain("")).toBe("");
});
