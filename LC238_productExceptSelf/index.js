const productExceptSelf = nums => {
    let output = nums.map(n => 1);
    let product = 1;

    // Multiply from the left
    for(let i=0; i<nums.length; i++){
       output[i] = output[i]*product;
       product = product*nums[i]
    }

    product = 1; //reset

    // Multiply from the right
    for(let j=nums.length-1; j>=0; j--){
        output[j] = output[j]*product;
        product = product*nums[j]
    }

    return output;
};
// Time compexity = O(N) no nested for loops
// Space complexity = O(1) the output array doesnot count an extra array for the purpose of extra space complexity
module.exports = productExceptSelf;
