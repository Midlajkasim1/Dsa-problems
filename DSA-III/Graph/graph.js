class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vtx){
        if(!this.adjacencyList[vtx]){
            this.adjacencyList[vtx]=[]
        }
        return false
    }
    //connection
    addEdges(vtx1,vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
            return true
        }
        return false
    }
    removeEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] &&  this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter((v)=>v!==vtx2)
        }
        return true
    }
    removeVertex(vtx){
        if(!this.adjacencyList[vtx]) return undefined;
        for(let neighbour of this.adjacencyList[vtx]){
           this.adjacencyList[neighbour] = this.adjacencyList[neighbour].filter ((v)=>v!==vtx)
        }
        delete this.adjacencyList[vtx];
        return this
    }
    bfs(start){
        let q=[];
        let visited = new Set();
        visited.add(start);
        q.push(start);
        while(q.length>0){
            let node = q.shift();
            console.log(node);
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    q.push(neighbour)
                }
            }
        }
    }
    dfs(start){
        let stack=[];
        let visited = new Set();
        stack.push(start);
        visited.add(start);
        while(stack.length>0){
            let node = stack.pop();
            console.log(node);
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    stack.push(neighbour)
                }
            }
        }
    }
    shortestPath(start,end){
        let q=[];
        let visited = new Set();
        q.push([start]);
        visited.add(start);
        while(q.length>0){
            let path=q.shift();
            let node = path[path.length-1];
            if(node==end){
                return path
            }
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    q.push([...path,neighbour])
                }
            }
        }
        return null
    }
    longestPath(start, end) {
        let q = [];
        let longest = [];
    
        q.push([start]);
    
        while (q.length > 0) {
            let path = q.shift();
            let node = path[path.length - 1];
    
            if (node === end && path.length > longest.length) {
                longest = path;
            }
    
            for (let neighbour of this.adjacencyList[node]) {
                if (!path.includes(neighbour)) {
                    q.push([...path, neighbour]);
                }
            }
        }
    
        return longest.length > 0 ? longest : null;
    }
    fullPath(start,end){
        let q=[];
        let res=[]
        q.push([start])
        while(q.length>0){
            let path=q.shift()
            let node=path[path.length-1]
            if(end==node)res.push(path)
            for(let neighbour of this.adjcencyList[node]){
                if(!path.includes(neighbour)){
                    q.push([...path,neighbour])
                }
            }
        }
        return res
    }
    cyclegraph(start,visited=new Set(),stack=new Set()){
        if(stack.has(start))return true;
        if(visited.has(start))return false
        stack.add(start)
        visited.add(start)
        for(let neighbour of this.adjcencyList[start]){
            if(this.cyclegraph(neighbour,visited,stack)){
                return true
            }
        }
        stack.delete(start)
        return false
    }
    
    display(){
        for(let vtx in this.adjacencyList){
            console.log(vtx +"->"+[...this.adjacencyList[vtx]])
        }
    }
    //check edge exist
    hasEdge(vtx1,vtx2){
        return(
            this.adjacencyList[vtx1].includes(vtx2) &&
            this.adjacencyList[vtx2].includes(vtx1)

        )
    }
 l
}

const g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")


g.addEdges("A","B")
g.addEdges("B","C")

g.addEdges("C","D")
g.addEdges("A","C")

// g.addEdges("C","D")


// g.removeVertex("D")
console.log(g);
// g.display()
g.bfs('A');
// g.dfs('B')
// console.log(g.longestPath("A", "D")); // null (D doesn’t exist)
// // g.removeEdge('A','B')

// // console.log(g);
// console.log(g.hasEdge("A","E"));

