function levelOrder(root) {
    const res = [];

    function helper(node, depth){
        if(!node) return;

        if(!res[depth]){
            res[depth] = [];
        }

        res[depth].push(node.val);
        helper(node.left, depth+1);
        helper(node.right, depth+1);
    }

    helper(root, 0);
    return res;
}
// Time compexity = O(n)  We traverse through each nodes in  input tree.
// Space complexity = O(1)
module.exports = levelOrder;
