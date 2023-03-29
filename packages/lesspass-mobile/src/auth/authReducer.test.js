import reducer from "./authReducer";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
    });
  });
  it("LOG_IN", () => {
    expect(
      reducer(
        {
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
        },
        {
          type: "LOG_IN",
          payload: {
            access:
              "eeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
            refresh:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
            token:
              "eeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
          },
        }
      )
    ).toEqual({
      isAuthenticated: true,
      accessToken:
        "eeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
      refreshToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
    });
  });
  it("LOG_OUT", () => {
    expect(
      reducer(
        {
          isAuthenticated: true,
          accessToken:
            "eeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
          refreshToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVlZjY4ZWVlLTI2MDMtNDI4OC1hMzE4LTUzNmU5YjFkYmJkYSIsImlhdCI6MTYyMTU5NzYyOSwiZXhwIjoxNjIxNjAxMjI5fQ.OCxHzcr2xS5iM_-ZcQ7Uv2botM3oX-Wu_QUXhyi3H7Q",
        },
        {
          type: "LOG_OUT",
        }
      )
    ).toEqual({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
    });
  });
});
