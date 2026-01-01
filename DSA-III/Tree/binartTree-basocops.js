class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;

    }
}
//inOrder traversal
function print(node){
    if(node==null)return
    print(node.left)
    console.log(node.data);
    print(node.right)
    
    
}
//preOrder traversal
function preOrder(node){
    if(node==null)return 
    console.log(node.data);   //tCxplty=O(n)
    preOrder(node.left);
    preOrder(node.right)
    
}
function postOrder(node){
    if(node==null)return 
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
    
}
//bfs
function levelOrder(root){
    if(root==null){
        return []
    }
    let q=[];
    let res=[];
    q.push(root);
    while(q.length>0){
        let len = q.length;
        let level=[];
        for(let i=0;i<len;i++){
            let node = q.shift();
            level.push(node.data);
            if(node.left)  q.push(node.left);
            if(node.right)  q.push(node.right)
        }
    res.push(level)
    }
    return res.join(' ')
}
//dfs in stack
function dfs(root){
    if(root ==null){
        return
    }
    let stack=[];
    stack.push(root);
    while(stack.length>0){
        let node=stack.pop();
        console.log(node.data);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left)
        
    }
}
//height of bt
function height(root){
    if(root==null)return -1
    let lheight= height(root.left);
    let rheight= height(root.right);
    return Math.max(lheight,rheight)+1
}

let root = new Node('1')
root.left= new Node('2');
root.right=new Node('3');
root.left.left=new Node('4')
root.left.right=new Node('5')
// print(root)
// preOrder(root)
// postOrder(root)
console.log(levelOrder(root));
// dfs(root)
console.log(height(root));


