const assert = require("assert");
const { createFingerprint, createHmac } = require("../src");

describe("api", () => {
  it("createHmac", () =>
    createHmac("sha256", "password").then(fingerprint => {
      assert.equal(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
        fingerprint
      );
    }));
  it("createHmac and update", () =>
    createHmac("sha256", "password", "salt").then(fingerprint => {
      assert.equal(
        "fc328232993ff34ca56631e4a101d60393cad12171997ee0b562bf7852b2fed0",
        fingerprint
      );
    }));
  it("fingerprint is length of 3", () => {
    assert.equal(
      createFingerprint(
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
      createFingerprint(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e"
      ),
      expectedFingerprint
    );
  });
});
