// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;

    while(left <= right){
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;
    if (square === num) return true;
    else if (square > num) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};

// TIME COMPLEXITY = O(LOGN) IT'S A BINARY SEARCH
// SPACE COMPLEXITY = O(1)
module.exports = isPerfectSquare;