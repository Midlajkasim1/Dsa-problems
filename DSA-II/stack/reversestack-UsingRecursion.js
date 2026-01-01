class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
    }

    pop() {
        if (!this.first) return null;
        const temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    isEmpty() {
        return this.length === 0;
    }

    insertBottom(data) {
        if (this.isEmpty()) {
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
        let curr = this.first;
        let result = [];
        while (curr) {
            result.push(curr.data);
            curr = curr.next;
        }
        console.log(result.join('-') + '-null');
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.print();      // 4-3-2-1-null
stack.reverse();
stack.print()


//reverse a stack using recursion

// let stack = []
// function insertAtBottom(x){
//     if(stack.length == 0){
//         stack.push(x)
//     }else{
//         let top = stack.pop()
//         insertAtBottom(x)
//         stack.push(top)
//     }
// }

// function reverse(){
//     if(stack.length>0){
//         let top = stack.pop()
//         reverse()
//         insertAtBottom(top)
//     }
// }
// stack.push('1')
// stack.push('2')
// stack.push('3')
// stack.push('4')
// console.log("before",stack)
// reverse()
// console.log('after',stack)