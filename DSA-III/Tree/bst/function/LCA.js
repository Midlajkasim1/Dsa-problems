class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function lowestCommonAncestor(root, p, q) {
    // Base case: If root is null or root is one of p or q
    if (root === null || root === p || root === q) {
        return root;
    }

    // Recurse on the left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null, root is the LCA
    if (left !== null && right !== null) {
        return root;
    }

    // Otherwise, return the non-null child (either left or right)
    return left !== null ? left : right;
}

// Example usage:

// Constructing the binary tree
let root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.right = new TreeNode('F');

// Example nodes
let p = root.left.left;  // Node D
let q = root.left.right; // Node E

// Finding the LCA
let lca = lowestCommonAncestor(root, p, q);
console.log(`LCA of D and E is: ${lca.value}`);  // Output: LCA of D and E is: B

// Example with another pair
let p2 = root.left.left;  // Node D
let q2 = root.right.right; // Node F
let lca2 = lowestCommonAncestor(root, p2, q2);
console.log(`LCA of D and F is: ${lca2.value}`);  // Output: LCA of D and F is: A
