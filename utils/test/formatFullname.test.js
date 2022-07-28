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

  it("Should return correctly formatted formatFullname if proper arg", () => {
    expect(formatFullname("amanda doe")).to.equal("Amanda Doe");
    expect(formatFullname("JOHN doE")).to.equal("John Doe");
    expect(formatFullname("JOHN DOE")).to.equal("John Doe");
  });

  it("Should return error when fullname length is different than 2", () => {
    expect(formatFullname("John Doe Test")).to.equal("Error");
    expect(formatFullname("John")).to.equal("Error");
  });
});
