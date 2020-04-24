const reverseList = head => {
    let prev = null;
    let current  = head;

    while(current ){  // current !null
     let temp = current.next;

     // cange the direction 

     current.next = prev;

    //  move prev and current up by 1

    prev = current;
    current = temp;
    }
    return prev
};

// time complexity = O(n)  we traverse through the linked list just once  
//  space complexity = O(1) we are using prev and current regardless of size of LL


module.exports = reverseList;
