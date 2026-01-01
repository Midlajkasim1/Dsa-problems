class Node{
    constructor(data){
        this.data=data
        this.left=this.right=null
    }
}
let firstNode = new Node(3)
let secondNode = new Node(5)
let thirdNode = new Node(2);
let fourthNode = new Node(6);

firstNode.left=secondNode;
firstNode.right=thirdNode;
secondNode.left=fourthNode