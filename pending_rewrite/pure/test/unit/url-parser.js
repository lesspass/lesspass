import test from "ava";
import * as urlParser from "../../src/services/url-parser";

test("cleanUrl", t => {
  t.is("lesspass.com", urlParser.cleanUrl("https://lesspass.com/#!/"));
  t.is("lesspass.com", urlParser.cleanUrl("https://lesspass.com/api/"));
  t.is("api.lesspass.com", urlParser.cleanUrl("https://api.lesspass.com/"));
  t.is("lesspass.com", urlParser.cleanUrl("http://lesspass.com"));
  t.is(
    "stackoverflow.com",
    urlParser.cleanUrl(
      "http://stackoverflow.com/questions/3689423/google-chrome-plugin-how-to-get-domain-from-url-tab-url"
    )
  );
  t.is(
    "v4-alpha.getbootstrap.com",
    urlParser.cleanUrl("http://v4-alpha.getbootstrap.com/components/buttons/")
  );
  t.is(
    "accounts.google.com",
    urlParser.cleanUrl(
      "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier"
    )
  );
  t.is("www.netflix.com", urlParser.cleanUrl("https://www.netflix.com/browse"));
  t.is("www.bbc.co.uk", urlParser.cleanUrl("https://www.bbc.co.uk"));
  t.is(
    "192.168.1.1:10443",
    urlParser.cleanUrl("https://192.168.1.1:10443/webapp/")
  );
  t.is("", urlParser.cleanUrl(undefined));
  t.is("", urlParser.cleanUrl(undefined));
  t.is("", urlParser.cleanUrl("chrome://extensions/"));
});

test("getSuggestions", t => {
  t.deepEqual(
    ["bbc", "bbc.com", "www.bbc.com"],
    urlParser.getSuggestions("https://www.bbc.com")
  );
  t.deepEqual(
    ["example", "example.org", "www.example.org"],
    urlParser.getSuggestions("https://www.example.org/api/?offset=100&limit=10")
  );
  t.deepEqual(
    ["example", "example.org"],
    urlParser.getSuggestions("https://example.org")
  );
  t.deepEqual(
    ["example", "example.org"],
    urlParser.getSuggestions("example.org")
  );
  t.deepEqual(
    [],
    urlParser.getSuggestions("https://192.168.1.1:10443/webapp/")
  );
  t.deepEqual([], urlParser.getSuggestions("example"));
  t.deepEqual([], urlParser.getSuggestions("example."));
  t.deepEqual([], urlParser.getSuggestions("example.o"));
  t.deepEqual(
    urlParser.getSuggestions("http://example.org"),
    urlParser.getSuggestions("https://example.org")
  );
  t.deepEqual(
    ["example", "example.org"],
    urlParser.getSuggestions("EXAMPLE.org")
  );
});

test("getSite", t => {
  global.chrome = {
    tabs: {
      query(a, callback) {
        callback([{ url: "https://example.org" }]);
      }
    }
  };
  return urlParser.getSite().then(site => {
    t.is(site, "example.org");
  });
});

test("getPasswordFromUrlQuery", t => {
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
  t.deepEqual(urlParser.getPasswordFromUrlQuery(query), expectedPassword);
});

test("getPasswordFromUrlQuery with base 64 encoded password profile", t => {
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
  t.deepEqual(urlParser.getPasswordFromUrlQuery(query), expectedPassword);
});

test("getPasswordFromUrlQuery booleanish", t => {
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
  t.deepEqual(urlParser.getPasswordFromUrlQuery(query), expectedPassword);
});
