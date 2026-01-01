function hasCycleDirected(graph) {
  const visited = new Set();
  const path = new Set(); // recursion stack

  function dfs(node) {
    if (path.has(node)) return true;   // back-edge → cycle
    if (visited.has(node)) return false;

    visited.add(node);
    path.add(node);

    for (let neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }

    path.delete(node);
    return false;
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node)) return true;
    }
  }
  return false;
}
const graph = {
  A: ["B"],
  B: ["C"],
  C: ["A"]  // cycle
};

console.log(hasCycleDirected(graph)) // true
