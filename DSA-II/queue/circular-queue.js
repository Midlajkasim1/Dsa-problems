class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularQueue {
    constructor(data) {
        let newNode = new Node(data);
        this.first = newNode;
        this.last = newNode;
        this.last.next = this.first; // Make it circular
        this.length = 1;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            this.last.next = this.first; // Point to first node
        } else {
            this.last.next = newNode;
            this.last = newNode;
            this.last.next = this.first; // Maintain circular connection
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            let temp = this.first;
            this.first = null;
            this.last = null;
            this.length--;
            return temp;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.last.next = this.first; // Update circular connection
        this.length--;
        temp.next = null;
        return temp;
    }

    minValue() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.first;
        let minValue = current.data;
        // Traverse the circular queue once
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
        let current = this.first;
        // Print only length number of elements to avoid infinite loop
        for (let i = 0; i < this.length; i++) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join('->') + '->(back to first)');
    }
}

// Test the circular queue
let list = new CircularQueue(56);
list.enqueue(78);
list.enqueue(34);
list.enqueue(99);

console.log("Initial queue:");
list.print();         // 56->78->34->99->(back to first)

console.log("\nAfter dequeue:");
list.dequeue();
list.print();         // 78->34->99->(back to first)

console.log("\nMinimum value:");
console.log(list.minValue());  // 34