class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(data){
        let newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return this
        }
        let temp=this.root;
        while(true){
            if(newNode.data == temp.data){
                return undefined
            }
            if(newNode.data<temp.data){
                if(temp.left==null){
                    temp.left=newNode
                }else{
                    temp=temp.left
                }
            }else if(newNode.data>temp.data){
                if(temp.right==null){
                    temp.right=newNode
                }else{
                    temp= temp.right
                }
            }
        }
    }
    closestValue(target){
        let closest = this.root.data
        let temp = this.root
        while(temp){
            if(Math.abs(temp.data-target)<Math.abs(closest-target)){
                closest=temp.data
            }
            if(target<temp.data){
                temp=temp.left
            }else if(target>temp.data){
                temp=temp.right
            }else{
                return temp.data
            }
        }
        return closest
    }
}
let bst = new BST();
bst.insert(50);
bst.insert(40);

bst.insert(60);

bst.insert(30);

bst.insert(45);
console.log("inserted");
console.log(bst.closestValue(47));



