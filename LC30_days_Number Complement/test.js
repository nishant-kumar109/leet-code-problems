const findCompliment = require("./index");

test("findCompliment(5) returns 2", () => {
  expect(findCompliment(5)).toEqual('2');
});

test("findCompliment(1) returns 0", () => {
    expect(findCompliment(1)).toEqual('0');
  });