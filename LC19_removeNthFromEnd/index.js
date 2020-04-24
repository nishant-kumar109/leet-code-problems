function removeNthFromEnd(head, n) {
    let dummyHead = {next: head}
    let slow = dummyHead;
    let fast = dummyHead;

    // move fast n node ahead of slow

    for(let i=1; i <= n; i++){
        fast = fast.next;
    }

    // move slow and fast up one node at a time untill fast is last
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    } 

    slow.next = slow.next.next;
    return dummyHead.next;

}


//  time complexity = O(n)
//  space complexity = O(1)

module.exports = removeNthFromEnd;
