function isSameTree(p, q) {
    let smaeTree = true;

function checkSameNode(p,q){
    if(!p && !q){
        return ;
    }else if(!p || !p){
        smaeTree =  false;
        return;
    }else if(p.val !== q.val){
        smaeTree = false;
        return ; 
    }

    checkSameNode(p.left , q.left);
    checkSameNode(p.right, q.right);
    }
    checkSameNode(p,q)
    return smaeTree;
}

// function isSameTree(p, q) {
//     if (p === q) return true;
//         if (p === null && q !== null) {
//             return false;
//         };
//         if (p !== null && q === null) {
//             return false;
//         };
//         if (p.val !== q.val) {
//             return false;
//         };
//         return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//     }
// Time compexity = O(P+Q)  where p and q are number of nodes in each input trees.
// Space complexity = O(1)
module.exports = isSameTree;
