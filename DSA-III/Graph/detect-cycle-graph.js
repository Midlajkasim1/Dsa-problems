function hasCycleUndirected(graph) {
    let visited = new Set();

    function dfs(node, parent) {
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true; // cycle found
            }
        }
        return false;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node, -1)) return true;
        }
    }

    return false;
}

// Example (Undirected Graph)
let graph1 = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2]
};
console.log(hasCycleUndirected(graph1)); // true
