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
var deleteDuplicates = function(head) {
    let curNode = head
    
    while(curNode && curNode.next){
        if(curNode.val === curNode.next.val){
            curNode.next  = curNode.next.next
        }else{
            curNode = curNode.next
        }
    }
    
    return head
};