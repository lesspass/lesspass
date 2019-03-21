import * as urlParser from "./url-parser";

test("cleanUrl", () => {
  expect("lesspass.com").toBe(urlParser.cleanUrl("https://lesspass.com/#!/"));
  expect("lesspass.com").toBe(urlParser.cleanUrl("https://lesspass.com/api/"));
  expect("api.lesspass.com").toBe(urlParser.cleanUrl("https://api.lesspass.com/"));
  expect("lesspass.com").toBe(urlParser.cleanUrl("http://lesspass.com"));
  expect("stackoverflow.com").toBe(urlParser.cleanUrl(
    "http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url"
  ));
  expect("v4-alpha.getbootstrap.com").toBe(urlParser.cleanUrl("http://v4-alpha.getbootstrap.com/components/buttons/"));
  expect("accounts.google.com").toBe(urlParser.cleanUrl(
    "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier"
  ));
  expect("www.netflix.com").toBe(urlParser.cleanUrl("https://www.netflix.com/browse"));
  expect("www.bbc.co.uk").toBe(urlParser.cleanUrl("https://www.bbc.co.uk"));
  expect("192.168.1.1:10443").toBe(urlParser.cleanUrl("https://192.168.1.1:10443/webapp/"));
  expect("").toBe(urlParser.cleanUrl(undefined));
  expect("").toBe(urlParser.cleanUrl(undefined));
  expect("").toBe(urlParser.cleanUrl("chrome://extensions/"));
});

test("getSuggestions", () => {
  expect(["bbc", "bbc.com", "www.bbc.com"]).toEqual(urlParser.getSuggestions("https://www.bbc.com"));
  expect(["example", "example.org", "www.example.org"]).toEqual(
    urlParser.getSuggestions("https://www.example.org/api/?offset=100&limit=10")
  );
  expect(["example", "example.org"]).toEqual(urlParser.getSuggestions("https://example.org"));
  expect(["example", "example.org"]).toEqual(urlParser.getSuggestions("example.org"));
  expect([]).toEqual(urlParser.getSuggestions("https://192.168.1.1:10443/webapp/"));
  expect([]).toEqual(urlParser.getSuggestions("example"));
  expect([]).toEqual(urlParser.getSuggestions("example."));
  expect([]).toEqual(urlParser.getSuggestions("example.o"));
  expect(urlParser.getSuggestions("http://example.org")).toEqual(urlParser.getSuggestions("https://example.org"));
  expect(["example", "example.org"]).toEqual(urlParser.getSuggestions("EXAMPLE.org"));
});

test("getSite", () => {
  global.chrome = {
    tabs: {
      query(a, callback) {
        callback([{ url: "https://example.org" }]);
      }
    }
  };
  return urlParser.getSite().then(site => {
    expect(site).toBe("example.org");
  });
});

test("getPasswordFromUrlQuery", () => {
  const query = {
    login: "test@example.org",
    site: "example.org",
    uppercase: "true",
    lowercase: "true",
    numbers: "true",
    symbols: "false",
    length: "16",
    counter: "1",
    version: "2"
  };
  const expectedPassword = {
    login: "test@example.org",
    site: "example.org",
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    length: 16,
    counter: 1,
    version: 2
  };
  expect(urlParser.getPasswordFromUrlQuery(query)).toEqual(expectedPassword);
});

test("getPasswordFromUrlQuery with base 64 encoded password profile", () => {
  const query = {
    passwordProfileEncoded:
      "eyJsb2dpbiI6InRlc3RAZXhhbXBsZS5vcmciLCJzaXRlIjoiZXhhbXBsZS5vcmciLCJ1cHBlcmNhc2UiOnRydWUsImxvd2VyY2FzZSI6dHJ1ZSwibnVtYmVycyI6dHJ1ZSwic3ltYm9scyI6ZmFsc2UsImxlbmd0aCI6MTYsImNvdW50ZXIiOjEsInZlcnNpb24iOjJ9"
  };
  const expectedPassword = {
    login: "test@example.org",
    site: "example.org",
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    length: 16,
    counter: 1,
    version: 2
  };
  expect(urlParser.getPasswordFromUrlQuery(query)).toEqual(expectedPassword);
});

test("getPasswordFromUrlQuery booleanish", () => {
  const query = {
    uppercase: "true",
    lowercase: "TrUe",
    numbers: "1",
    symbols: "0"
  };
  const expectedPassword = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  };
  expect(urlParser.getPasswordFromUrlQuery(query)).toEqual(expectedPassword);
});
