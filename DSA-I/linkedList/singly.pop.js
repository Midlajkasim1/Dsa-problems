class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedlist {
    constructor(data) {
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1
    }
    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
             this.tail = newNode      // time complexity = o(n)  
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }

    pop() {

        if (!this.head) {
            return null;
        }
        let temp = this.head;
        let prev = this.head; 
        while (temp.next) {
            prev = temp
            temp = prev.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length == 0) {
            this.head = null;
            this.tail = null
        }

        return temp
    }

    unshift(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head     //Txty= O(1)
        this.head = newNode;
        this.length++
        return this;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--

        if (this.length === 0) {
            this.tail = null;
        }
        return temp;

    }
    firstGet() {
        return this.head
    }
    lastElement() {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        while (temp) {
            if (!temp.next) {
                return temp;
            }
            temp = temp.next;
        }

    }
    getthroughIndex(index) {
        let counter = 0;
        let temp = this.head;
        while (temp) {
            if (counter === index) {
                return temp;
            }
            counter++;
            temp = temp.next;
        }
        return null;
    }
    set(index, value) {
        let temp = this.getthroughIndex(index);
        if (temp) {
            temp.data = value;
            return true
        }
        return false
    }
    insert(index, value) {
      
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }

        const newNode = new Node(value);
        const temp = this.getthroughIndex(index - 1); // Get node before insertion point
        if (temp) {
            newNode.next = temp.next; // Link new node to the next node
            temp.next = newNode;      // Link previous node to new node
            this.length++;
            return true;
        }
        return false; // Safety fallback
    }
    size(){
        let counter=0;
        let temp=this.head;
        while(temp){
        counter++;
        temp=temp.next
        }
        return counter;
    }
    // clear(){
    //     this.head =null;
    // }
    //find middle node
    middle(){
        if(!this.head){
            return null;
        }
        let slow =this.head;
        let fast=this.head;
      while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
    toArray() {
        let current = this.head;
        let result = [];
    
        while (current) { // Traverse the linked list
            result.push(current.data);
            current = current.next;
        }
    
        return result; // Return the array
    }
    delete(value) {
        if (!this.head) return; // If list is empty, do nothing

        // Case 1: If head is the node to delete
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;                         //tmpxty=O(n)
            return;
        }

        let current = this.head;
        let prev = null;

        // Traverse the list to find the node to delete
        while (current && current.data !== value) {
            prev = current;
            current = current.next;
        }

        // If value not found, do nothing
        if (!current) return;

        // Case 2: Deleting a middle or last node
        prev.next = current.next;

        // Case 3: If deleting the last node, update the tail
        if (current === this.tail) {
            this.tail = prev;
        }

        this.length--;
    }
    reversestr(str) {
        if (!str || str.length === 0) return '';

        // Build list from string
        this.head = null;
        this.tail = null;
        this.length = 0;
        for (let i = 0; i < str.length; i++) {
            let newNode = new Node(str[i]);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
        }

        // Reverse the list
        let current = this.head;
        let prev = null;
        let next = null;
        this.tail = this.head;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;

        // Build reversed string
        let result = '';
        current = this.head;
        while (current) {
            result += current.data;
            current = current.next;
        }
        return result; // Fixed: Return string, not this
    }
    hasCycle() {
        let slow = this.head;
        let fast = this.head;
    
        while (fast !== null && fast.next !== null) {
            slow = slow.next;       // Move slow pointer one step
            fast = fast.next.next;   // Move fast pointer two steps
    
            if (slow === fast) {  // If they meet, cycle exists
                return true;
            }
        }
    
        return false; // If fast reaches null, no cycle
    }
    //remove adjustcent elements
    removeDuplicates() {
        let current = this.head;
    
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next; // Skip duplicate node
                this.length--; // Decrease length
            } else {
                current = current.next; // Move to next node
            }
        }
    }
    deleteMiddle() {
        if (!this.head || !this.head.next) {
            this.head = null; // If the list has 0 or 1 node, delete the head
            return;
        }
    
        let slow = this.head, fast = this.head;
        let prev = null; // To track the node before slow
    
        // Step 1: Find the middle using slow & fast pointers
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
    
        // Step 2: Delete the middle node
        prev.next = slow.next;
        this.length--;
    }
    //remove any duplicate
    removeDuplicate() {
        if (!this.head) return;
    
        let seen = new Set();
        let current = this.head;
        let prev = null;
    
        while (current) {
            if (seen.has(current.data)) {
                // Duplicate → remove node
                prev.next = current.next;
                this.length--;
    
                if (!prev.next) {
                    this.tail = prev;
                }
    
                current = current.next;
            } else {
                // First time seeing this value
                seen.add(current.data);
                prev = current;
                current = current.next;
            }
        }
    }
    
    
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join('->') + '-> null');

    }
}
const mylinkedlist = new linkedlist(1);
mylinkedlist.push(10);
mylinkedlist.push(80);
mylinkedlist.push(30);
mylinkedlist.push(60);
// mylinkedlist.unshift(30);
// console.log(mylinkedlist.toArray()
// );
// mylinkedlist.insert(2,77)
// console.log(mylinkedlist.size());
// console.log(mylinkedlist.middle().data);
console.log(mylinkedlist.reversestr('hello'));
// mylinkedlist.print()

// console.log(mylinkedlist.lastElement());
// console.log(mylinkedlist.getthroughIndex(2));

// mylinkedlist.shift()
// console.log(mylinkedlist);



// console.log(mylinkedlist);

// console.log(mylinkedlist);
