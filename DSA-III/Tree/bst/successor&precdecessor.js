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
    const newNode=new Node(data)
    if(this.root==null){
        this.root=newNode;
        return this
    }
    let temp=this.root;
    while(true){
        if(newNode.data==temp.data){
            return undefined
        }
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
   successor(root,data){
    let succ=null
    let temp = root;
//key smallest aan so left 1 aakumundaka
while(temp){
    if(data<temp.data){
        succ=temp.data
        temp=temp.left
    }else if(data>temp.data){
        temp=temp.right
    }else{
        if(temp.right){
            return this.findMin(temp.right).data
        }
        break
    }
}
return succ
   }
   findMin(node){
    while(node.left){
        node=node.left;
    }
    return node
   }
   predecessor(root,data){
    let pred=null;
    let temp=root
    while(temp){
        if(temp.data<data){
            pred=temp.data;
            temp=temp.right
        }else if(temp.data>data){
            temp=temp.left
        }else{
            if(temp.left){
                return this.findMax(temp.left).data
            }
            break
        }
    }
    return pred
   }
   findMax(node){
  while(node.right){
    node=node.right
  }
  return node
   }
}
let tree=new BST();
tree.insert(9);
tree.insert(4)
tree.insert(5)
tree.insert(8)
tree.insert(11);
console.log('successor',tree.successor(tree.root,8));
console.log('predecessor',tree.predecessor(tree.root,5));


