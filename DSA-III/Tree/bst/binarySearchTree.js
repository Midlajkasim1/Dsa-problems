class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=null
    }
 insert(data){
  const newNode = new Node(data);
  if(this.root === null){
    this.root = newNode
    return this
  }
  let temp = this.root;
  while(true){
    if(newNode.data === temp.data){
        return undefined;
    }
    if(newNode.data <temp.data){
        if(temp.left===null){
            temp.left=newNode;
            return this
        }else{
            temp=temp.left
        }
    }else{
        if(temp.right===null){
            temp.right=newNode;
            return this
        }
        temp=temp.right
    }
  }

 }
 //includes
 includes(data){
    if(!this.root){
        return false
    }
    let temp = this.root
    
    while(temp){
        if(data<temp.data){
            temp=temp.left
        }else if(data>temp.data){
            temp=temp.right
        }else if(temp.data === data){
            return true
        }
    }
    return false
 }
 bfs(){  //breath first search
let current = this.root;
let queue=[];
let data=[]

 queue.push(current);
 while(queue.length){
    current = queue.shift();
    data.push(current.data)

    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right)
 }

return data
 }
 dfsPreOrder(node=this.root,data=[]){  //depth first search
if(!node)return data


   
   data.push(node.data)
   if(node.left) this.dfsPreOrder(node.left,data)
    if(node.right) this.dfsPreOrder(node.right,data)
        return data
 }
  dfsPostOrder(node=this.root,data=[]){
  if(!node)return data;
  if(node.left) this.dfsPostOrder(node.left,data);
  if(node.right) this.dfsPostOrder(node.right,data);
  data.push(node.data)
    return data
  }
  dfsInOrder(node=this.root,data=[]){
   if(this.root===null)return data;
   if(node.left) this.dfsInOrder(node.left,data);
   data.push(node.data);
   if(node.right) this.dfsInOrder(node.right,data);
   return data
  }
  min(root){
    if(!root.left){
        return root.data
    }else{
        return this.min(root.left)
    }
}
max(root){
    if(!root.right){
        return root.data
    }else{
        return this.max(root.right)
    }
}
delete(data){
    this.root = this.deleteNode(this.root,data)
}
deleteNode(root,data){
    if(root === null){
        return null
    }
    if(data<root.data){
        root.left=this.deleteNode(root.left,data)
    }else if(data>root.data){
        root.right=this.deleteNode(root.right,data)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.data=this.min(root.right);
        root.right=this.deleteNode(root.right,root.data)
    }
    return root
}
findHeight(node=this.root){
    if(!node)return -1
    let leftHeight =  this.findHeight(node.left);
    let rightHeight = this.findHeight(node.right);
    return Math.max(leftHeight,rightHeight)+1
}
//bfslevelOrder()
bfslevelOrder(){
    if(!this.root)return []
    const queue = [this.root];
    const result = []
    while(queue.length){
        const levelSize = queue.length
        const currentLevel =[];
        for(let i=0;i<levelSize;i++){
            const current = queue.shift();
            currentLevel.push(current.data)
            if(current.left) queue.push(current.left);
            if(current.right)queue.push(current.right)
        }
    result.push(currentLevel)
    }
    result.forEach(level =>console.log(level.join(" ")))
    return result
}

}

let tree= new Tree()
tree.insert(7)
tree.insert(2)

tree.insert(5)
tree.insert(8)
tree.insert(1)
console.log(tree.includes(8)==true?'found':'not found');
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
// console.log(tree.dfsPostOrder());
// console.log(tree.dfsInOrder());

// console.log(tree);
// tree.delete(2)
// console.log(tree.bfs());
console.log(tree.bfslevelOrder())
