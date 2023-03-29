import reducer from "./errorsReducer";

describe("error reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it("ADD_ERROR", () => {
    const state = reducer(
      {},
      {
        type: "ADD_ERROR",
        error: {
          id: Date.now().toString(),
          message: "an error message",
        },
      }
    );
    const errorIds = Object.keys(state);
    expect(errorIds.length).toBe(1);
    expect(state[errorIds[0]].message).toBe("an error message");
  });
  it("DELETE_ERROR", () => {
    expect(
      reducer(
        {
          e1: {
            id: "e1",
            message: "an error message",
          },
        },
        {
          type: "DELETE_ERROR",
          error: {
            id: "e1",
          },
        }
      )
    ).toEqual({});
  });
  it("CLEAN_ERRORS delete all errors", () => {
    expect(
      reducer(
        {
          e1: {
            id: "e1",
            message: "an error message for e1",
          },
          e2: {
            id: "e2",
            message: "an error message for e2",
          },
        },
        {
          type: "CLEAN_ERRORS",
        }
      )
    ).toEqual({});
  });
  it("LOG_IN delete all errors", () => {
    expect(
      reducer(
        {
          e1: {
            id: "e1",
            message: "an error message for e1",
          },
          e2: {
            id: "e2",
            message: "an error message for e2",
          },
        },
        {
          type: "LOG_IN",
        }
      )
    ).toEqual({});
  });
});
