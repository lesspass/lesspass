import { fakeLocalStore } from "./localStore";

test("can save an retrieve string", () => {
  const localStorage = fakeLocalStore();
  localStorage.setItem("test", "string");
  expect(localStorage.getItem("test")).toBe("string");
});

test("can save an delete string", () => {
  const localStorage = fakeLocalStore();
  localStorage.setItem("test", "string");
  expect(localStorage.getItem("test")).toBe("string");
  localStorage.removeItem("test");
  expect(localStorage.getItem("test")).toBeNull();
});

test("remove non existant string didnt raise an exception", () => {
  const localStorage = fakeLocalStore();
  localStorage.removeItem("test");
});

test("can initialize local storage with string", () => {
  const localStorage = fakeLocalStore({ test: "string" });
  expect(localStorage.getItem("test")).toBe("string");
});

test("can save an retrieve object", () => {
  const localStorage = fakeLocalStore();
  localStorage.setItem("test", { hello: "world" });
  expect(localStorage.getItem("test")).toEqual({ hello: "world" });
});

test("can initialize local storage with object and string", () => {
  const localStorage = fakeLocalStore({
    a: "string",
    b: { hello: "world" },
  });
  expect(localStorage.getItem("a")).toBe("string");
  expect(localStorage.getItem("b")).toEqual({ hello: "world" });
});

test("can save an retrieve boolean", () => {
  const localStorage = fakeLocalStore();
  localStorage.setItem("test", false);
  expect(localStorage.getItem("test")).toBe(false);
});
