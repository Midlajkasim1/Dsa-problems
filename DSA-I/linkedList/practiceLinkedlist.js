// class Node{
// constructor(data){
//     this.data= data;
//     this.next=null;

// }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//     }
//     append(data){
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode
//     }

//     print(){
//         let current = this.head;
//         let result = []
//       while(current){
//       result.push(current.data);
//       current = current.next;
//       }
//       console.log(result.join('->')+ '-> null');
      

//     }
// }

// let list = new linkedList();
// list.append(65);
// list.append(10);
// list.append(30);
// list.print()

////////////////////////////////
// class Node{
//     constructor(data){
//         this.data =data;
//         this.next = null;

//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null;

//     }

//     append(data){
//         const newNode = new Node(data);
//         if(this.head==null){
//            this.head = newNode;
//            return;
//         }
//         let current = this.head;
//         while(current.next){
//             current = current.next;

//         }
//         current.next = newNode
//     }
//     print(){
//         let  current = this.head;
//         let result = [];
//         while(current){
//             result.push(current.data)
//             current = current.next
//         }
//         console.log(result.join('->')+'-> null');
        
//     }
// }

// let list = new linkedList();
// list.append(22);
// list.append(98);
// list.append(90);
// list.print()

///
