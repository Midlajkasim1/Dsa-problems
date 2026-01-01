const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
  };
function shortestPath(graph,start,end){
    let queue =[[start]]
    let visited = new Set([start]);
    while(queue.length>0){
      let path = queue.shift();
      let node = path[path.length-1]
      if(end==node){
        return path
      }
      for(let neighbour of graph[node] || []){
        if(!visited.has(neighbour)){
          visited.add(neighbour);
          queue.push([...path,neighbour])
        }
      }

    }
    return null

}  
console.log(shortestPath(graph,"A","F"))