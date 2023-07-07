/**
 * Counts the number of islands in a grid.
 * @param {Array} grid - A 2D grid represented as an array of arrays.
 * @returns {number} - The count of islands in the grid.
 */
const islandCount =  (grid) => {
    const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            if (explore(grid, r, c, visited)) count++; // increment counter
        }
    }
    return count;
};

/**
 * Helper function to explore the grid and mark visited positions.
 * @param {Array} grid - A 2D grid represented as an array of arrays.
 * @param {number} r - The row index of the current position.
 * @param {number} c - The column index of the current position.
 * @param {Set} visited - A set to track visited positions.
 * @returns {boolean} - True if the current position is part of an island, false otherwise.
 */
const explore = (grid, r, c, visited) => {
    const rowInBounds = 0 <= r && r < grid.length
    const colInBounds = 0 <= c && c < grid.length

    if (!rowInBounds || !colInBounds) return false; // check if we in bounds
 
    if (grid[r][c] === 'W') return false; // check if Water

    const pos = r + ',' + c; 
    if(visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
};


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
  console.log(islandCount(grid)); // -> 3