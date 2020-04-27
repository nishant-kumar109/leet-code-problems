function isValidBST(root) {

    let validity = true;
     function helper(node, min, max){
      if(!node) return;

      if(
          (min!== null && node.val<=min) ||

          (max!== null && node.val >= max)
      ) {
          validity = false;
          return;
      }
     helper(node.left, min, node.val)
     helper(node.right, node.val, max);

     }

     helper(root, null, null);
     return validity;

}

// time complexity = O(n) we traverse through every node in the tree

// space complexity = O(1)


module.exports = isValidBST;
