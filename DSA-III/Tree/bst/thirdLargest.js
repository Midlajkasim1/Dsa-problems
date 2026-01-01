class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let temp = this.root;
        while (true) {
            if (data === temp.data) return undefined;
            if (data < temp.data) {
                if (!temp.left) {
                    temp.left = newNode;
                    return;
                }
                temp = temp.left;
            } else {
                if (!temp.right) {
                    temp.right = newNode;
                    return;
                }
                temp = temp.right;
            }
        }
    }

    thirdLargest() {
        let count = 0;
        let result = null;

        function reverseInOrder(node) {
            if (!node || count >= 3) return;

            reverseInOrder(node.right);

            count++;
            if (count === 3) {
                result = node.data;
                return;
            }

            reverseInOrder(node.left);
        }

        reverseInOrder(this.root);
        return result !== null ? result : "Less than 3 nodes in tree";
    }
}

// Example
let bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(60);
bst.insert(30);
bst.insert(44);
bst.insert(70);
bst.insert(65);

console.log("3rd Largest:", bst.thirdLargest());
