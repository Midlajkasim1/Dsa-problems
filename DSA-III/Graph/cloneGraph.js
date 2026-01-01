function Node(data){
    this.data=data;
    this.neighbors=[]
}
function cloneGraph(node){
    if(!node)return null;
    const visited=new Map();
    let q=[node]
    visited.set(node,new Node(node.data))
    while(q.length>0){
        let current=q.shift();
        let currentClone=visited.get(current)
        for(let neighbour of current.neighbors){
         if(!visited.has(neighbour)){
                visited.set(neighbour,new Node(neighbour.data))
            q.push(neighbour)
         }
                 currentClone.neighbors.push(visited.get(neighbour))

        }
    }
    return visited.get(node)
    
}
let node1= new Node(1);
let node2= new Node(2);
node1.neighbors.push(node2);
node2.neighbors.push(node1);
let clone = cloneGraph(node1);
console.log('original',node1);
console.log('clone',clone)


// Test output
console.log("Original:", node1);
console.log("Cloned:", cloned);
console.log("Original Neighbors:", node1.neighbors.map(n => n.data));
console.log("Cloned Neighbors:", cloned.neighbors.map(n => n.data ));
