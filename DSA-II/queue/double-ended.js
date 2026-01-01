class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularDeque {
    constructor(data) {
        let newNode = new Node(data);
        this.front = newNode;
        this.rear = newNode;
        this.rear.next = this.front; // Make it circular
        this.length = 1;
    }

    // Add to rear (like regular enqueue)
    enqueueRear(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.front = newNode;
            this.rear = newNode;
            this.rear.next = this.front;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.rear.next = this.front;
        }
        this.length++;
        return this;
    }

    // Add to front
    enqueueFront(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.front = newNode;
            this.rear = newNode;
            this.rear.next = this.front;
        } else {
            newNode.next = this.front;
            this.front = newNode;
            this.rear.next = this.front; // Maintain circular connection
        }
        this.length++;
        return this;
    }

    // Remove from front (like regular dequeue)
    dequeueFront() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            let temp = this.front;
            this.front = null;
            this.rear = null;
            this.length--;
            return temp;
        }
        let temp = this.front;
        this.front = this.front.next;
        this.rear.next = this.front;
        this.length--;
        temp.next = null;
        return temp;
    }

    // Remove from rear
    dequeueRear() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            let temp = this.front;
            this.front = null;
            this.rear = null;
            this.length--;
            return temp;
        }
        let current = this.front;
        // Find the node before rear
        for (let i = 0; i < this.length - 2; i++) {
            current = current.next;
        }
        let temp = this.rear;
        this.rear = current;
        this.rear.next = this.front;
        this.length--;
        temp.next = null;
        return temp;
    }

    minValue() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.front;
        let minValue = current.data;
        for (let i = 0; i < this.length; i++) {
            if (current.data < minValue) {
                minValue = current.data;
            }
            current = current.next;
        }
        return minValue;
    }

    print() {
        if (this.length === 0) {
            console.log("empty");
            return;
        }
        let result = [];
        let current = this.front;
        for (let i = 0; i < this.length; i++) {
            result.push(current.data);
            current = current.next;
        }
        console.log(`front->${result.join('->')}->rear->(back to front)`);
    }
}

// Test the circular deque
let deque = new CircularDeque(56);
deque.enqueueRear(78);
deque.enqueueFront(34);
deque.enqueueRear(99);

console.log("Initial deque:");
deque.print();         // front->34->56->78->99->rear->(back to front)

console.log("\nAfter dequeueFront:");
deque.dequeueFront();
deque.print();         // front->56->78->99->rear->(back to front)

console.log("\nAfter dequeueRear:");
deque.dequeueRear();
deque.print();         // front->56->78->rear->(back to front)

console.log("\nMinimum value:");
console.log(deque.minValue());  // 56