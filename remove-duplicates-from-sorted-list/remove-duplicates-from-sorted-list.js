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
    if(!head) return head
    
    let preNode = head
    let curNode = head.next 
    
    while(curNode){
        if(preNode.val === curNode.val){
            preNode.next = curNode.next
            curNode = curNode.next
        }
        else{
            preNode = preNode.next
            curNode = curNode.next 
        }

    }
    return head
};