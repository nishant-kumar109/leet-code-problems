// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
// --- Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  const head = new ListNode(0);
  var point = head;
  var carry = 0;
  var helper = function (l1, l2, point) {
      if (l1 === null && l2 === null) {
          if (carry == 1) {
              point.next = new ListNode(1);
          }
          return head.next;
      }
      var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      if (sum > 9) {
          point.next = new ListNode(sum%10);
          carry = 1;
      } else {
          point.next = new ListNode(sum);
          carry = 0;
      }
      return helper(l1 ? l1.next : null, l2 ? l2.next : null, point.next);
  };
  return helper(l1, l2, point)
}
// Time complexity : O(max(m, n)). Assume that m and n represents the length of l1 and l2 respectively.

// Space complexity : O(max(m, n)). The length of the new list is at most max(m,n)+1. because 1 will be carry if last sum is more than 9.
module.exports = addTwoNumbers;
