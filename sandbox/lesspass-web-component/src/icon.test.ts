import { getIconLookup } from "./icons";

test("getIconLookup", async () => {
  expect(getIconLookup("fa-flask")).toEqual({
    prefix: "fas",
    iconName: "flask",
  });
  expect(getIconLookup("fa-birthday-cake")).toEqual({
    prefix: "fas",
    iconName: "birthday-cake",
  });
});

test("getIconLookup retro compatibility with fa4 icons", async () => {
  expect(getIconLookup("fa-jpy")).toEqual({
    prefix: "fas",
    iconName: "yen-sign",
  });
  expect(getIconLookup("fa-eur")).toEqual({
    prefix: "fas",
    iconName: "euro-sign",
  });
  expect(getIconLookup("fa-usd")).toEqual({
    prefix: "fas",
    iconName: "dollar-sign",
  });
  expect(getIconLookup("fa-gbp")).toEqual({
    prefix: "fas",
    iconName: "pound-sign",
  });
  expect(getIconLookup("fa-area-chart")).toEqual({
    prefix: "fas",
    iconName: "chart-area",
  });
  expect(getIconLookup("fa-cutlery")).toEqual({
    prefix: "fas",
    iconName: "utensils",
  });
  expect(getIconLookup("fa-diamond")).toEqual({
    prefix: "fas",
    iconName: "gem",
  });
  expect(getIconLookup("fa-futbol-o")).toEqual({
    prefix: "fas",
    iconName: "futbol",
  });
  expect(getIconLookup("fa-btc")).toEqual({ prefix: "fab", iconName: "btc" });
});
