function mergeTwoLists(l1, l2) {
    let dummyHead = {next : null};
    let tail = dummyHead;

    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            tail = tail.next;
            l1 = l1.next;
        }else{
            tail.next = l2;
            tail = tail.next;
            l2 = l2.next;
        }
    }

    tail.next = l1 || l2;
    return dummyHead.next;
}

//  time complexity = O(n + m)  n and m are the length of the crossponding link lists   
//  space complexity = O(1) we are using three nodes regardless of size of LL

module.exports = mergeTwoLists;
