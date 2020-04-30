function maxDepth(root) {
    let maxDepth = 0;

function dive(node, currentDepth){
    if(!node){
        maxDepth = Math.max(currentDepth-1, maxDepth);
        return;
    }

    dive(node.left, currentDepth+1);
    dive(node.right, currentDepth+1)
}
    dive(root, 1)
    return maxDepth;
}
// Time compexity = O(n)  We traverse through each nodes in  input tree.
// Space complexity = O(1)
module.exports = maxDepth;
