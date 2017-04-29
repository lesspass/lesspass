var assert = require("assert");
var v1 = require("../../src/v1");

describe("getPasswordTemplate", function() {
  it("should get default template", function() {
    assert.equal(
      "vcVCns",
      v1._getPasswordTemplate({
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
      })
    );
  });
  it("should get lowercase template", function() {
    assert.equal(
      "vc",
      v1._getPasswordTemplate({
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false
      })
    );
  });
  it("should get uppercase template", function() {
    assert.equal(
      "VC",
      v1._getPasswordTemplate({
        lowercase: false,
        uppercase: true,
        numbers: false,
        symbols: false
      })
    );
  });
  it("should get numbers template", function() {
    assert.equal(
      "n",
      v1._getPasswordTemplate({
        lowercase: false,
        uppercase: false,
        numbers: true,
        symbols: false
      })
    );
  });
  it("should get symbols template", function() {
    assert.equal(
      "s",
      v1._getPasswordTemplate({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: true
      })
    );
  });
  it("should concatenate template if two password settings", function() {
    assert.equal(
      "vcVC",
      v1._getPasswordTemplate({
        lowercase: true,
        uppercase: true,
        numbers: false,
        symbols: false
      })
    );
    assert.equal(
      "vcns",
      v1._getPasswordTemplate({
        lowercase: true,
        uppercase: false,
        numbers: true,
        symbols: true
      })
    );
  });
});
