const containsDuplicate = nums => {
    let visited = {} // {4:true, 7:true, 1:true}

    for(let i = 0; i<nums.length; i++){
        const num = nums[i];
        if(visited[num]){
            return true;
        }else{
            visited[num] = true;
        }
    }

    return false;
};
// Time compexity = O(N)  we go through every element of the input array
// Space complexity = O(N) keys in Hash table equal to unique element of the input array
module.exports = containsDuplicate;
