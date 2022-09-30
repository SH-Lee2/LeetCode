/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 경마장의 빠른 말과 느린 말을 생각해보면 쉽다. 
// 빠른 말이 느린말을 따라잡는다면 그 경마장은 원형 사이클이란 뜻이다.
// 하지만 못 따라잡는다면 원형 사이클이 아니다.
var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        
        if(fast === slow) return true
    }
    
    return false
};