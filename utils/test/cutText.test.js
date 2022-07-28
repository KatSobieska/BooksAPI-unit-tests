const { expect } = require("chai");
const cutText = require("../cutText.js");

describe("CutText", () => {
  const expect = require("chai").expect;

  it('should return an error if "content" arg is not a string', () => {
    expect(cutText(undefined, 20)).to.equal("Error");
    expect(cutText(12, 20)).to.equal("Error");
    expect(cutText({}, 20)).to.equal("Error");
    expect(cutText([], 20)).to.equal("Error");
    expect(cutText(function () {}, 20)).to.equal("Error");
  });

  it('should return an error if "content" arg length is 0', () => {
    expect(cutText("", 20)).to.equal("Error");
  });

  it('Should return an error if "maxLength" arg is not a number', () => {
    expect(cutText("Lorem Impsum", undefined)).to.equal("Error");
    expect(cutText("Lorem Impsum", "abc")).to.equal("Error");
    expect(cutText("Lorem Impsum", {})).to.equal("Error");
    expect(cutText("Lorem Impsum", [])).to.equal("Error");
    expect(cutText("Lorem Impsum", function () {})).to.equal("Error");
  });
});
