var letterCombinations = function(digits) {
  const hashMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

    if(digits.length === 0) return []
    else if(digits.length === 1) return hashMap[digits[0]]
    
    prev = hashMap[digits[0]]
    // loop on all tree levels
    for(let i = 1; i < digits.length; i++) {
        next = []
        currDigits = hashMap[digits[i]]
        // loop on previous level
        for(let j = 0; j < prev.length; j++) {
            // loop on current level
            for(let k = 0; k < currDigits.length; k++) {
                next.push(prev[j] + currDigits[k])
            }
        }
        
        prev = next
    }
    return prev
};

module.exports = letterCombinations;
