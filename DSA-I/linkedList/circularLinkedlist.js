class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class circularLinkedList{
    constructor(data){
        this.head=new Node(data);
        this.tail=this.head;
        this.head.next=this.head;
        this.length=1
    }
    push(data){
        let newNode = new Node(data);
        this.tail.next=newNode;
        this.tail=newNode;
        this.tail.next=this.head
        this.length++;

    }
    print(){
        let current=this.head;
        let result=[];
        do{
            result.push(current.data);
            current=current.next
        }while(current!==this.head){
            
          }
          console.log(result.join('->')+'-> head');

    }
}
let list=new circularLinkedList(73);
list.push(33)
list.print()