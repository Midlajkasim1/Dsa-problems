class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(data){
        let newNode = new Node(data)
        if(!this.root){
            this.root = newNode;
            return this
        }
        let temp= this.root;
    while(true){
        if(newNode.data<temp.data){
            if(temp.left==null){
                temp.left=newNode;
                return this
            }else{
                temp=temp.left
            }
        }else if(newNode.data>temp.data){
            if(temp.right==null){
                temp.right=newNode;
                return this
            }else{
                temp=temp.right
            }
        }
    }
    }
    inOrder(node){
        if(!node)return null
        this.inOrder(node.left)
        console.log(node.data);
        this.inOrder(node.right)
    }
    search(root,data){
        if(root==null || root.data ==data)return root
        if(root.data<data){
            return this.search(root.right,data)
        }
        return this.search(root.left,data)
    }
    balanced(root){
        if(root==null)return 0
        let left = this.balanced(root.left);
        if(left == -1)return -1
        let right = this.balanced(root.right)
        if(right == -1) return -1
        if(Math.abs(left-right)>1)return -1
        return 1+Math.max(left,right)
    }
    isBalanced(){
        return this.balanced(this.root)!==-1
    }
}
let bst = new BST()
bst.insert(50)
bst.insert(40)
bst.insert(60)
bst.insert(30)
bst.insert(45)
bst.insert(55)
// bst.inOrder(bst.root)
console.log(bst.search(bst.root,55)!=null?"value is found":'value not found');
console.log(bst.isBalanced()?'balanced':'not balanced');
