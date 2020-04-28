function maxArea(height) {
    let maxArea = 0;
    let start  = 0;
    let end = height.length-1;

    while(start<end){
        let currentArea = Math.min(height[start], height[end]) * (end - start);
        maxArea = Math.max(currentArea, maxArea);

        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }

    return maxArea;
}
 // Time compexity = O(N)  each numbers is visited once
// Space complexity = O(1) number of key values pairs stored in hash table, stores atmost n elements.

module.exports = maxArea;
