class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack class
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
}

// Conversion function
function stackToQueue(stack) {
    const queue = new Queue();
    const tempStack = new Stack();
    
    // Reverse stack into tempStack
    while (stack.length > 0) {
        tempStack.push(stack.pop().data);
    }
    
    // Build queue from tempStack
    while (tempStack.length > 0) {
        queue.enqueue(tempStack.pop().data);
    }
    
    return queue;
}

// Test
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

let queue = stackToQueue(stack);

// Verify result by printing queue
let result = [];
let current = queue.front;
while (current) {
    result.push(current.data);
    current = current.next;
}
console.log("Converted Queue: front->" + result.join('->') + "->rear");