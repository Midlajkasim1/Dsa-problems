// //create a Node 

// class Node{
//     constructor(data){
//         this.data = data; //value stored in the node
//         this.next = null; // Pointer to the next node
//     }
// }

// //linked list

// class linkedList {
//     constructor(){
//         this.head = null;
//     }

//     //add a new node to the end of the list
//     append (data){
//         const newNode= new Node(data);
//         if(!this.head){
//             this.head=newNode;
//             return;
//         }

//         let current = this.head;
//         while (current.next){
//             current= current.next
//         }
//       current.next = newNode; //Add the new node at the end
      
//     }
//     printList (){
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// //eg
// const list = new linkedList();

// list.append('apple');
// list.append('banana');
// list.append('strawberry');
// list.printList();
//////////////////////////////////////////////////////////////////////
// class Node{
//     constructor(data,next=null){
//         this.data = data
//         this.next = next
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//     }
//     appent(data){
//         this.head = new Node(data,this.head)
//     }
//     print(){
//         let current = this.head
//         let result = '';

//         while(current){
//             result += current.data +'-->'
//             current = current.next
//         }
//         result+='NULL'
//         console.log(result)
//     }
// }
// const ll = new linkedList()

// ll.appent(90)
// ll.appent(80)
// ll.appent(70)
// ll.print()

//pushfront
// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
   
// }

// class linkedlist{
//     constructor(){
//         this.head=null;
//     }

//     append(data){
//         let newNode = new Node(data);
//         newNode.next=this.head;
//         this.head =newNode;

//     }

//     print(){
//         let current = this.head;
//         let result = [];
//         while (current){
//             result.push(current.data);
//             current=current.next;
//         }
//         console.log(result.join('->')+'-> null');
        
//     }
// }

// //check
// let list = new linkedlist();
// list.append(90);
// list.append(43);
// list.append(54);
// list.print()

// push back

class Node{
    constructor(data){
        this.data = data;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;

    }
  append(data){
    let newNode =  new Node(data);
    if(!this.head){
        this.head = newNode
        return;
    }

    let current = this.head;
    while(current.next){
        current= current.next;
    }
  current.next = newNode;
  }
  print(){
    let current = this.head;
    let result = []
    while(current){
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join('->')+' -> null');
    
  }
}

let list  = new linkedList();
list.append(34);
list.append(44);
list.append(10);
list.print()