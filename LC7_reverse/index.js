// Given a 32-bit signed integer, reverse digits of an integer.
// For an int overflow, your code should just return 0.
// -------------------------
// reverse(123) --> 321
// reverse(120) --> 21
// reverse(-123) --> -321
// reverse(2147483649) --> 0
// reverse(-2147483649) --> 0

function reverse(x) {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
}

module.exports = reverse;
