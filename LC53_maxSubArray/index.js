function maxSubArray(nums) {
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        const num = nums[i];

        nums[i] = Math.max(num, (num + nums[i-1]))
        max = Math.max(max,nums[i]);


    }
    return max;
}

// Time compexity = O(N)
// Space complexity = O(1)

module.exports = maxSubArray;
