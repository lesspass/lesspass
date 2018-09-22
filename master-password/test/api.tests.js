var assert = require("assert");
var masterPassword = require("../src/index");

describe("api", function() {
  it("should return array of 3 elements", function() {
    assert.equal(
      3,
      masterPassword.getLessPassFingerprint(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e"
      ).length
    );
  });
  it("should always return the same array based on the string passed as parameter", function() {
    var expected_fingerprint = [
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
    var fingerprint = masterPassword.getLessPassFingerprint(
      "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e"
    );
    assert.deepEqual(expected_fingerprint, fingerprint);
  });
});
