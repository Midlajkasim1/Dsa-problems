// 1. Define the TreeNode structure
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 2. Function to find kth smallest element using in-order traversal
function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
}

// 3. Create a sample BST:
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

// 4. Call the function
const k = 3;
console.log("Kth Smallest Element:", kthSmallest(root, k)); // Output: 3




////////////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val === undefined ? 0 : val;
 *     this.left = left === undefined ? null : left;
 *     this.right = right === undefined ? null : right;
 * }
 */

// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// var kthSmallest = function(root, k) {
//     let result = null;
//     let count = 0;

//     // In-order traversal
//     function inorder(node) {
//         if (!node) return;
        
//         inorder(node.left); // Traverse left subtree
        
//         count++;
//         if (count === k) {
//             result = node.val;  // Found the kth smallest
//             return;
//         }
        
//         inorder(node.right); // Traverse right subtree
//     }

//     inorder(root);  // Start the traversal
//     return result;
// };
