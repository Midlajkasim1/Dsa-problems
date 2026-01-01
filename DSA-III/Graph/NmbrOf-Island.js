var numIslands = function(grid) {
    let count = 0;  // Count of islands

    function dfs(i, j) {
        // If out of bounds or water, return
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;

        grid[i][j] = '0';  // Mark the land as visited

        // Visit all 4 directions
        dfs(i + 1, j);  // down
        dfs(i - 1, j);  // up
        dfs(i, j + 1);  // right
        dfs(i, j - 1);  // left
    }

    // Go through every cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;       // New island found
                dfs(i, j);     // Mark the whole island as visited
            }
        }
    }

    return count;
};
