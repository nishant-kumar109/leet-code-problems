// Given a positive integer, output its complement number.
//  The complement strategy is to flip the bits of its binary representation.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str = num.toString(2);
    let binArr = str.split('')
    for(let i in binArr){
        if(binArr[i] == 0){
            binArr[i] = 1;
        }else if(binArr[i] == 1){
            binArr[i] = 0;
        }
    }
    str = binArr.join('')
    let result = bin2dec(str)
  return result;
};

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}

module.exports = findComplement;
