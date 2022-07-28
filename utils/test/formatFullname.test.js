const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;

describe("FormatFullname", () => {
  it("Should return error when arg is missing", () => {
    expect(formatFullname()).to.equal("Error");
  });

  it("Should return error when arg is not a string", () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(12)).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });
});
