// Node constructor
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// Helper function to check the balance of the tree
function checkBalance(root) {
    if (!root) return 0; // Base case: empty node is balanced with height 0

    // Get the height of the left subtree
    let leftHeight = checkBalance(root.left);
    if (leftHeight === -1) return -1; // If left subtree is unbalanced, propagate -1

    // Get the height of the right subtree
    let rightHeight = checkBalance(root.right);
    if (rightHeight === -1) return -1; // If right subtree is unbalanced, propagate -1

    // If the height difference is greater than 1, the tree is unbalanced
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // Return the height of the tree rooted at this node
    return 1 + Math.max(leftHeight, rightHeight);
}

// Function to check if the tree is balanced
function isBalanced(root) {
    return checkBalance(root) !== -1;
}

// Create the tree
let root = new Node(50);
root.left = new Node(40);
root.right = new Node(78);

// Check if the tree is balanced
console.log(isBalanced(root)); // Output: false (because the tree is unbalanced)
