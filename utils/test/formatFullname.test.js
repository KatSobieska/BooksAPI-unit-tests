const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;

describe("FormatFullname", () => {
  it("Should return error when arg is missing", () => {
    expect(formatFullname()).to.equal("Error");
  });
});
