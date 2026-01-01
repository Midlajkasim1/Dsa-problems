class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(data) {
        let newNode = new Node(data);
        this.first = newNode;
        this.length = 1;
    }

    push(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.first = newNode;
        } else {
            newNode.next = this.first;
        }
        this.first = newNode; 
        this.length++;
        return this;
    }


    pop() {
        if (this.length === 0) {
            this.first = undefined;
            return null;
        }
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    insertBottom(data) {
        if (this.length === 0) {
            this.push(data);
            return;
        }
        let temp = this.pop();
        this.insertBottom(data);
        this.push(temp.data);
    }

    reverse() {
        if (this.length <= 1) return;
        let temp = this.pop();
        this.reverse();
        this.insertBottom(temp.data);
    }

    print() {
        let current = this.first;
        while (current) { 
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join('-') + '-null');
    }
}

let list = new Stack(45);
list.push(54);
list.push(78);
list.print(); // 78-54-45-null
list.reverse();
list.print(); // 45-54-78-null
console.log(list.insertBottom(34));














//array
class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data); // adds to top
    }

    pop() {
        if (this.stack.length === 0) return null;
        return this.stack.pop(); // removes from top
    }

    insertBottom(data) {
        if (this.stack.length === 0) {
            this.push(data);
            return;
        }

        let temp = this.pop();
        this.insertBottom(data);
        this.push(temp); // restore
    }

    reverse() {
        if (this.stack.length <= 1) return;

        let temp = this.pop();
        this.reverse();
        this.insertBottom(temp);
    }

    print() {
        console.log(this.stack.join('-') + '-null');
    }
}
