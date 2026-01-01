class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class linkedList{
    constructor(data){
      this.head=new Node(data);
      this.tail=this.head;
      this.length=1;
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
    reverse(){
        let prev=null;
        let current =this.head;
        let next=null;
        this.tail=this.head
        while(current){
            next=current.next
            current.next=prev;
            prev=current;
            current=next
        }
        this.head=prev
        return this;
    }
    removeNth(n){
        let temp=new Node(0)
        temp.next=this.head
        let fast=temp
        let slow=temp
        for(let i=0;i<=n;i++){
            fast=fast.next
        }
        while(fast){
            slow=slow.next
            fast=fast.next
        }
        let toDelete=slow.next
        slow.next=toDelete.next
        this.head=temp.next
        if(!slow.next)this.tail=slow
        this.length--
    }
  isPalindrome(){
    if(!this.head || !this.head.next)return true;
    let fast=this.head;
    let slow =this.head;
    let prevSlow=null;
    while(fast!==null && fast.next!==null){
        prevSlow=slow
        slow =slow.next;
        fast=fast.next.next;
    }
    prevSlow.next=null;
    let secondHalf=slow;

    let prev=null;
    let current=secondHalf;
    while(current){
        let next = current.next;
        current.next=prev;
        prev=current;
        current=next
    }
    secondHalf=prev;
    //compare
    let firstHalf =this.head;
    while(secondHalf){
        if(secondHalf.data !==firstHalf.data)return false
        firstHalf=firstHalf.next;
        secondHalf=secondHalf.next
    }
    return true
  }
  merge(otherlist){
    if(!this.head){
        this.head=otherlist.head;
        this.tail=otherlist.tail;
        this.length=otherlist.length

    }
    this.tail.next=otherlist.head;
    this.tail=otherlist.tail;
    this.length+=otherlist.length
    return this
  }
  sortAscending() {
    if (!this.head || this.length === 1) return this;

    // Step 1: Convert to array
    let arr = [];
    let current = this.head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    // Step 2: Sort array ascending
    arr.sort((a, b) => a - b);

    // Step 3: Rebuild list
    this.head = new Node(arr[0]);
    this.tail = this.head;
    this.length = 1;
    for (let i = 1; i < arr.length; i++) {
        this.push(arr[i]);
    }
    return this;
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
let list= new linkedList(5);
list.push(40);
list.push(20);
list.push(22);
list.push(60)
// list.reverse()
list.print()
// let list2 = new linkedList(34);
// list2.push(77);
// list.merge(list2);
// list.print()
// console.log(isPalindrome())