class Node{
    constructor(data){
        this.data = data;
        this.next= null
    }
} 

 class linkedList{
    constructor(data){
        this.head=new Node(data);
        this.tail=this.head;
        this.length=1;
    }
 }
 const newList = new linkedList(1);
 console.log(newList);
 