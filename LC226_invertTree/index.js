function invertTree(root) {
    function helper(node){
        if(!node) return ; 

        const temp = node.left;
        node.left = node.right;
        node.right = temp;


        helper(node.left);
        helper(node.right)
    }

    helper(root);
    return root;
}

// time complexity = O(n)
// space complexity = O(1)

module.exports = invertTree;
