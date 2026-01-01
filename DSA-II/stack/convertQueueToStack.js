class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue class
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.front;
        if (this.length === 1) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }
        temp.next = null;
        this.length--;
        return temp;
    }
}

// Stack class (now complete with pop method)
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

// Conversion function
function queueToStack(queue) {
    const stack = new Stack();
    const tempStack = new Stack();
    
    // Step 1: Dequeue all elements to tempStack (reverses order)
    while (queue.length > 0) {
        tempStack.push(queue.dequeue().data);
    }
    
    // Step 2: Push all elements to final stack (reverses again)
    while (tempStack.length > 0) {
        stack.push(tempStack.pop().data);
    }
    
    return stack;
}

// Test
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// Convert queue to stack
let stack = queueToStack(queue);

// Verify result by printing stack
let result = [];
let current = stack.top;
while (current) {
    result.push(current.data);
    current = current.next;
}
console.log("Converted Stack: top->" + result.join('->') + "->null");