const assert = require("assert");
const fingerprint = require("../src");

describe("api", () => {
  it("fingerprint is length of 3", () => {
    assert.equal(
      fingerprint(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e"
      ).length,
      3
    );
  });
  it("fingerprint is length of 3", () => {
    const expectedFingerprint = [
      {
        color: "#FFB5DA",
        icon: "fa-flask"
      },
      {
        color: "#009191",
        icon: "fa-archive"
      },
      {
        color: "#B5DAFE",
        icon: "fa-beer"
      }
    ];
    assert.deepEqual(
      fingerprint(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e"
      ),
      expectedFingerprint
    );
  });
});
