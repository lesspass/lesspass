import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/node";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  localStorage.clear();
  return server.resetHandlers();
});
afterAll(() => server.close());
