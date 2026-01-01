class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class doublelist{
    constructor(data){
        this.head=new Node(data);
        this.tail=this.head;
        this.length=1;
    }
    push(data){
        let newNode=new Node(data);
        // if(!this.head){
        //     this.head=newNode;
        //     this.tail=newNode;
        // }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
       
    }
    print(){
        let current=this.head;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next
        }
        console.log(result.join('-> ')+'-> null')
    }
}
    let list =new doublelist(49);
// list.push(39);
list.print()