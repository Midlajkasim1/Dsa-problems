class Node{
    constructor(data){
        this.data=data
        this.left=null;
        this.right=null

    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(data){
        let newNode= new Node(data)
        if(!this.root){
            this.root = newNode
        }
        let temp =this.root;
        while(true){
            if(newNode.data == temp.data){
                return undefined
            }
            if(newNode.data<temp.data){
                if(temp.left==null){
                    temp.left=newNode;
                }else{
                    temp=temp.left
                }

            }else if(newNode.data>temp.data){
                if(temp.right==null){
                    temp.right=newNode
                }else{
                    temp=temp.right
                }
            }
        }
    }
    secondlargest(){
        let temp = this.root;
        let prev = null;
        while(temp.right){
            prev=temp;
            temp=temp.right
        }
        if(temp.left){
            temp = temp.left
            while(temp.right){
                temp=temp.right
            }
            return temp.data
        }
        return prev.data
    }
}
let bst = new BST()
bst.insert(50);
bst.insert(40);


bst.insert(60);
bst.insert(30);

bst.insert(44);;
console.log(bst.secondlargest());


