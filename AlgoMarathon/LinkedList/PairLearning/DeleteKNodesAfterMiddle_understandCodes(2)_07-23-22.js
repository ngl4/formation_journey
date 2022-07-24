
    function findMiddle(head) {
      const dummy = new Node("dummy", head);
      let middle = dummy;
      let curr = head;
    
      while (curr !== null) {
          middle = middle.next;
          curr = curr.next;
          curr = curr ? curr.next : null;
      }
    
      return middle;
    }
    
    function removeKAfterMiddle(head, k)  {
      const middle = findMiddle(head);
    
      let curr = middle;
      while (curr && k >= 0) {
        curr = curr.next;
        k--;
      }
    
      middle.next = curr;
      return head;
    }