class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.first = null;
        this.length = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (!this.first || data < this.first.data) {
            // Insert at beginning if empty or higher priority
            newNode.next = this.first;
            this.first = newNode;
        } else {
            // Traverse and find the right position
            let current = this.first;
            while (current.next && current.next.data < data) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (!this.first) return undefined;
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp.data;
    }

    minvalue() {
        if (!this.first) return undefined;
        return this.first.data;
    }

    print() {
        let result = [];
        let current = this.first;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> ') + ' -> null');
    }
}

// ✅ Testing
let pq = new PriorityQueue();
pq.enqueue(56);
pq.enqueue(78);
pq.enqueue(34);
pq.enqueue(99);
pq.enqueue(12);

pq.print();               // Should be sorted: 12 -> 34 -> 56 -> 78 -> 99 -> null
console.log(pq.minvalue()); // 12
pq.dequeue();             // Remove 12
pq.print();               // 34 -> 56 -> 78 -> 99 -> null
