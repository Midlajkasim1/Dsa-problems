class Node{
   constructor(data){
    this.data=data
    this.left=null
    this.right=null;
   } 
}
class BST{
    constructor(){
        this.root=null
    }
    validBst(node=this.root,min=-Infinity,max=Infinity){
        if(!node)return true
        if(node.data<min || node.data>=max)return false
        return this.validBst(node.left,min,node.data)&&this.validBst(node.right,node.data,max)
    }
}
let bst = new BST()
bst.root = new Node(10)
bst.root.left = new Node(8);  
bst.root.right = new Node(70)
console.log(bst.validBst());

