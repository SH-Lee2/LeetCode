/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
  * 중앙에 위치하는 노드를 찾고 삭제한다.
*/
var deleteMiddle = function(head) {
    if(!head.next) return head.next
    
    let slow = head
    let fast = head
    let preNode = head
    
    while(fast && fast.next){
        preNode = slow
        slow = slow.next
        fast = fast.next.next
    }
    
    const nodeToRemove = slow 
    preNode.next = nodeToRemove.next 
    nodeToRemove.next = null 
    
    return head
};