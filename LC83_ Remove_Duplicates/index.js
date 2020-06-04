// Remove Duplicates From a List


//   Definition for singly-linked list.
 
//  function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//   }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


//  ============================================ only run the below code in leet code exercise 83 =================

var deleteDuplicates = (head)=>{
    let node = head;
    let newNode = new ListNode(null, node);
    
    while (node) {
        if (newNode.val === node.val)
            newNode.next = node.next;
        else 
        newNode = node;
        
        node = node.next;
    }
    
    return head;
    
};

//  ============================================ only run the above code in leet code exercise 83 =================


// module.exports = deleteDuplicates;