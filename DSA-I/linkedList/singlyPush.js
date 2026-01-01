//push method add node to last of linked list
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedList{
    constructor(data){
        this.head = new Node(data);
        this.tail = this.head;
        this.length=1
    }
    push(data){
 let  newNode = new Node(data);
    if(!this.head){
        this.head=newNode;
        this.tail=newNode
    }
   this.tail.next = newNode;
   this.tail = newNode;
   this.length++
    }
    reverrecursion(node=this.head){
       if(!node || !node.next ){
        this.head=node;
        return node
       }
       let newHead= this.reverrecursion(node.next);
       node.next.next=node;
       node.next=null;
       return newHead;
    }
    reverseListRecursive() {
        this.head = this.reverseRecursively(this.head);
    }
    print(){
        let current=this.head;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next;
        }
        console.log(result.join('->')+'-> null');
        
    }
}
const printNode = new linkedList(3);

printNode.push(10);
printNode.push(40)
printNode.push(34)
printNode.push(70)
printNode.print()