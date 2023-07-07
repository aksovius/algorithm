/**
 * Function: minimumIsland
 * This function finds the size of the smallest island in a grid.
 *
 * @param {Array<Array<string>>} grid - A 2D grid representation of a map where 'W' represents water and 'L' represents land.
 *
 * @returns {number} - Returns the size of the smallest island in the grid. If there are no islands, returns Infinity.
 *
 * @example
 * const grid = [
 *   ['L', 'W', 'W', 'L', 'W'],
 *   ['L', 'W', 'W', 'L', 'L'],
 *   ['W', 'W', 'L', 'L', 'W'],
 *   ['W', 'W', 'L', 'L', 'L'],
 *   ['L', 'L', 'W', 'W', 'L'],
 * ];
 * minimumIsland(grid); // Returns 2
 */
const minimumIsland = (grid) => {
    let minimum = Infinity;
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            const size = exploreSize(grid, r, c)
            if (size > 0 && size < minimum){
                minimum = size;  
            }
        }
    }
    return minimum;
}

/**
 * Function: exploreSize
 * This function performs a Depth-First Search (DFS) from a given position in the grid to find the size of an island.
 *
 * @param {Array<Array<string>>} grid - A 2D grid representation of a map where 'W' represents water and 'L' represents land.
 * @param {number} r - The row index from where the search starts.
 * @param {number} c - The column index from where the search starts.
 * @param {Set} visited - A Set containing positions that have been visited during the DFS.
 *
 * @returns {number} - Returns the size of an island in the grid.
 */
const exploreSize = (grid, r, c, visited = new Set()) => {
    
    // check bounds 
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !colInBounds) return 0;

    // check if watter
    if(grid[r][c] === 'W') return 0;

    // check is visited
    const pos = r + ',' + c;
    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, r - 1 , c, visited)
    size += exploreSize(grid, r + 1 , c, visited)
    size += exploreSize(grid, r, c - 1, visited)
    size += exploreSize(grid, r, c + 1, visited)
    return size;
}

const grid = [
['W', 'L', 'W', 'W', 'W'],
['W', 'L', 'W', 'W', 'W'],
['W', 'W', 'W', 'L', 'W'],
['W', 'W', 'L', 'L', 'W'],
['L', 'W', 'W', 'L', 'L'],
['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2