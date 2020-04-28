// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

// function twoSum(arr, target) {
//     var result = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++ ){
//             if(arr[j] == (target - arr[i])){
//                 result.push(i,j)
//             }
//         }
//     }
//     return result;
// }

function twoSum(arr, target){
    let visitedElement = {}  // {2:0, 7:1}
    let result = [];

    for(let i = 0; i< arr.length; i++){
        const num = arr[i];
        const compliment = target - num

        if(visitedElement[compliment] !== undefined){
            result.push(i);
            result.push(visitedElement[compliment])
        }

        visitedElement[num] = i;
    }

    return result;
    
    // Time compexity = O(N)  we traverse the list containing n elements onlyonce
                              // each lookup in hash table cost only one time.
    // Space complexity = O(N) number of key values pairs stored in hash table, stores atmost n elements.

}

module.exports = twoSum;
