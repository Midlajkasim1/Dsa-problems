class Node{
    constructor(data){
        this.data=data;
        this.head=null
    }
}
class linkedList{
    constructor(arr){
        this.head=new Node(arr[0]);
        this.tail=this.head;
        this.length=1;
         for(let i=1;i<arr.length;i++){
        this.push(arr[i])
    }
    }
   
    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail=newNode
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this
    }
    print(){
        let current=this.head;
        let result=[];
        while(current){
            result.push(current.data);
            current=current.next
        }
        console.log(result.join('->')+'-> null')
    }
}
let list= new linkedList([4,5,6,7,8,9]);
list.print()