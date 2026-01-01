class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
function insertOrder(root,data){
    if(root==null){
        root= new Node(data)
        return root
    }
    let   q=[]
    q.push(root)
    while(q.length>0){
        let curr = q.shift()
        if(curr.left==null){
            curr.left = new Node(data)
            return root
        }else{
            q.push(curr.left)
        }
        if(curr.right == null){
            curr.right = new Node(data)
            return root
        }else{
            q.push(curr.right)
        }
    }
}
function inOrder(node){
    if(node==null)return 
    inOrder(node.left)
    console.log(node.data);
    inOrder(node.right)
    
}
let root= new Node(10);
root.left = new Node(11)
root.right = new Node(9)
root.left.left = new Node(12)
root.right.left = new Node(15)
root.right.left = new Node(8)
let data = 14
root = insertOrder(root,data)
inOrder(root)