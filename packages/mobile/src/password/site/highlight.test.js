import { highlightSearch } from "./highlight";

test("highlightSearch", () => {
  const hightlight = (item, i) => `id=${i}[${item}]`;
  const noHightlight = (item, i) => `id=${i}*${item}*`;
  const data = [
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[4, 5], [7, 8]],
          value: "www.example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ];
  expect(highlightSearch(data, hightlight, noHightlight)).toEqual([
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      highlights: [
        "id=0*www.*",
        "id=1[ex]",
        "id=2*a*",
        "id=3[mp]",
        "id=4*le.org*"
      ]
    }
  ]);
});

test("highlightSearch first start indice equals 0", () => {
  const hightlight = item => `[${item}]`;
  const noHightlight = item => `*${item}*`;
  const data = [
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[0, 2]],
          value: "www.example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ];
  expect(highlightSearch(data, hightlight, noHightlight)).toEqual([
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      highlights: ["[www]", "*.example.org*"]
    }
  ]);
});

test("highlightSearch last end indice equals value length", () => {
  const hightlight = item => `[${item}]`;
  const noHightlight = item => `*${item}*`;
  const data = [
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[12, 14]],
          value: "www.example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ];
  expect(highlightSearch(data, hightlight, noHightlight)).toEqual([
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      highlights: ["*www.example.*", "[org]"]
    }
  ]);
});

test("highlightSearch no match", () => {
  const hightlight = item => `[${item}]`;
  const noHightlight = item => `*${item}*`;
  const data = [
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: []
    }
  ];
  expect(highlightSearch(data, hightlight, noHightlight)).toEqual([]);
});

test("highlightSearch no data", () => {
  const hightlight = item => `[${item}]`;
  const noHightlight = item => `*${item}*`;
  const data = [];
  expect(highlightSearch(data, hightlight, noHightlight)).toEqual([]);
});
