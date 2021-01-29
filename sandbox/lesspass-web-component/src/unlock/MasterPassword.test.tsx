import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import MasterPassword from "./MasterPassword";

const createFingerprintPromise = Promise.resolve([
  {
    color: "#FFB5DA",
    icon: "fa-flask",
  },
  {
    color: "#009191",
    icon: "fa-archive",
  },
  {
    color: "#B5DAFE",
    icon: "fa-beer",
  },
] as Fingerprint);

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

test("MasterPassword", async () => {
  render(
    <MasterPassword
      value="password"
      createFingerprint={jest.fn(() => createFingerprintPromise)}
      onChange={jest.fn()}
    />
  );
  jest.advanceTimersByTime(500);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  expect(masterPasswordInput).toBeInTheDocument();
  expect(masterPasswordInput.type).toBe("password");
  expect(masterPasswordInput.value).toBe("password");
  expect(masterPasswordInput).toBe(document.activeElement);
  await waitFor(() => {
    expect(screen.queryByTitle("icon-fa-flask")).toBeInTheDocument();
    expect(screen.queryByTitle("icon-fa-archive")).toBeInTheDocument();
    expect(screen.queryByTitle("icon-fa-beer")).toBeInTheDocument();
  });
});

test("MasterPassword createFingerprint has been called after debounce", async () => {
  const createFingerprint = jest.fn(() => createFingerprintPromise);
  render(
    <MasterPassword
      value="password"
      createFingerprint={createFingerprint}
      onChange={jest.fn()}
    />
  );
  expect(createFingerprint).toHaveBeenCalledTimes(1);
  expect(createFingerprint).not.toHaveBeenCalledWith("password");
  jest.advanceTimersByTime(500);
  expect(createFingerprint).toHaveBeenCalledWith("password");
  await waitFor(() => {
    expect(screen.queryByTestId("fingerprint")).toBeInTheDocument();
    expect(screen.queryByTitle("icon-fa-flask")).toBeInTheDocument();
    expect(screen.queryByTitle("icon-fa-archive")).toBeInTheDocument();
    expect(screen.queryByTitle("icon-fa-beer")).toBeInTheDocument();
  });
});

test("Remove fingerprint if MasterPassword is cleared", async () => {
  render(
    <MasterPassword
      value=""
      createFingerprint={jest.fn(() => createFingerprintPromise)}
      onChange={jest.fn()}
    />
  );
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  fireEvent.change(masterPasswordInput, {
    target: { value: "p" },
  });
  await waitFor(() => {
    expect(screen.queryByTestId("fingerprint")).toBeInTheDocument();
  });
  fireEvent.change(masterPasswordInput, {
    target: { value: "" },
  });
  act(() => {
    jest.runAllTimers();
  });
  await waitFor(() => {
    expect(screen.queryByTestId("fingerprint")).toBeNull();
  });
});
