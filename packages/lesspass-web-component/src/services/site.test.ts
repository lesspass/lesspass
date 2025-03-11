import { cleanSite } from "./site";

test("cleanSite default settings", () => {
  expect(
    cleanSite({
      site: "lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "lesspass.com",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "api.lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "api.lesspass.com",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "www.api.lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "www.api.lesspass.com",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "www.lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "www.lesspass.com",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "www.bbc.co.uk",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "www.bbc.co.uk",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "192.168.1.1:10443",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "192.168.1.1:10443",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "",
      removeSubDomain: false,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "",
    removeSubDomain: false,
    removeTopLevelDomain: false,
  });
});

test("cleanSite removeSubDomain", () => {
  expect(
    cleanSite({
      site: "lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "lesspass.com",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "api.lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "lesspass.com",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "www.api.lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "lesspass.com",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "www.lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "lesspass.com",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "www.bbc.co.uk",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "bbc.co.uk",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "192.168.1.1:10443",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "192.168.1.1:10443",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
  expect(
    cleanSite({
      site: "",
      removeSubDomain: true,
      removeTopLevelDomain: false,
    }),
  ).toEqual({
    site: "",
    removeSubDomain: true,
    removeTopLevelDomain: false,
  });
});

test("cleanSite removeTopLevelDomain", () => {
  expect(
    cleanSite({
      site: "lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "lesspass",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "api.lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "api.lesspass",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "www.api.lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "www.api.lesspass",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "www.lesspass.com",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "www.lesspass",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "www.bbc.co.uk",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "www.bbc",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "192.168.1.1:10443",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "192.168.1.1:10443",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "",
      removeSubDomain: false,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "",
    removeSubDomain: false,
    removeTopLevelDomain: true,
  });
});

test("cleanSite removeSubDomain and removeTopLevelDomain", () => {
  expect(
    cleanSite({
      site: "lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "lesspass",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "api.lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "lesspass",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "www.api.lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "lesspass",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "www.lesspass.com",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "lesspass",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "www.bbc.co.uk",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "bbc",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "192.168.1.1:10443",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "192.168.1.1:10443",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
  expect(
    cleanSite({
      site: "",
      removeSubDomain: true,
      removeTopLevelDomain: true,
    }),
  ).toEqual({
    site: "",
    removeSubDomain: true,
    removeTopLevelDomain: true,
  });
});
