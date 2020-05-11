const findJudge = require("./index");

test("findJudge(2,[[1,2]]) returns 2", () => {
  expect(findJudge(2, [[1,2]])).toEqual(2);
});

test("findJudge(3, [[1,3],[2,3]]) returns 3", () => {
    expect(findJudge(3, [[1,3],[2,3]])).toEqual(3);
  });

  test("findJudge(3, [[1,3],[2,3],[3,1]]) returns -1", () => {
    expect(findJudge(3,[[1,3],[2,3],[3,1]])).toEqual(-1);
  });

  test("findJudge(3,[[1,2],[2,3]]) returns -1", () => {
    expect(findJudge(3, [[1,2],[2,3]])).toEqual(-1);
  });

  test("findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]]) returns 3", () => {
    expect(findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]])).toEqual(3);
  });
  