class Node{
    constructor(data){
        this.data=data
        this.left=null;
        this.right=null;
    }
}

function deleteDeepest(root,dNode){
    let q=[]
    q.push(root)
    while(q.length!=0){
        let curr = q.shift()
        if(curr.left){
            if(curr.left==dNode){
                return curr.left =null
            }else{
                q.push(curr.left)
            }
        }
        if(curr.right){
            if(curr.right==dNode){
                return curr.right =null;
            }else{
                q.push(curr.right)
            }
        }
    }
}
function deletion(root,data){
    if(root==null)return null
    if(root.left == null && root.right==null){
        if(root.data==data)return null
    }
    let q=[]
    q.push(root)
    let curr =null;
    let keyNode = null
    while(q.length!=0){
        curr=q.shift()
        if(curr.data==data)keyNode=curr
        if(curr.left)q.push(curr.left)
        if(curr.right)q.push(curr.right)    
    }
if(keyNode!=null){
    let x = curr.data
    keyNode.data=x
    deleteDeepest(root,curr)
}
return root
}
function inOrder(node){
    if(node==null)return
    inOrder(node.left)
    console.log(node.data);
    inOrder(node.right)
    
}
let root = new Node(1)
root.left= new Node(2)
root.right=new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)
let data=6
console.log('before deletion');
inOrder(root)
root= deletion(root,data)
console.log('after deletion');
inOrder(root)


