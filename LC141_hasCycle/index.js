function hasCycle(head) {
    let slow = head;
    let fast  = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast ){
            return true;
        }
    }

    return false;
}

//  time complexity = O(n)  we traverse through the linked list   
//  space complexity = O(1) we are using two nodes regardless of size of LL



module.exports = hasCycle;
