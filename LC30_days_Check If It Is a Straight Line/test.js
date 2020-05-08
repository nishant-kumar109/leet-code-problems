const checkStraightLine = require('./index');

test("checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]) returns true", () => {
    expect(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])).toEqual(true);
  });
  
  test("checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]) returns false", () => {
      expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])).toEqual(false);
    });