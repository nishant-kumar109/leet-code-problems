const isPerfectSquare = require("./index");

test("isPerfectSquare(16) returns true", () => {
  expect(isPerfectSquare(16)).toEqual(true);
});

test("isPerfectSquare(14) returns false", () => {
    expect(isPerfectSquare(14)).toEqual(false);
  });