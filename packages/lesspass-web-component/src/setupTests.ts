import { beforeAll, afterEach, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { render as renderTestingLibrary } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  localStorage.clear();
  return server.resetHandlers();
});
afterAll(() => server.close());

export function render(element: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...renderTestingLibrary(element),
  };
}
