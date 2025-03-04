import "@testing-library/jest-dom/vitest";
import { vi, beforeAll, afterEach, afterAll } from "vitest";
import { setupServer } from "msw/node";

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

Object.assign(global.navigator, {
  clipboard: {
    writeText: async () => {},
  },
});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
  };

export const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => {
  localStorage.clear();
  server.resetHandlers();
});
afterAll(() => server.close());
