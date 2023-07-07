/**
 * Function: hasPathDFS
 * This function performs a Depth-First Search (DFS) on a graph to check if there is a path between two nodes.
 *
 * @param {Object} graph - The graph to be traversed, represented as an adjacency list. 
 *                         Each key in the object is a node, and its value is an array of neighboring nodes.
 * @param {string | number} src - The node from which the path search starts. 
 *                                It should be a key present in the `graph` object.
 * @param {string | number} dst - The node where the path should end.
 *
 * @returns {boolean} - Returns true if there is a path from src to dst, and false otherwise.
 *
 * @example
 * let graph = { 'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']};
 * hasPathDFS(graph, 'A', 'E'); // Returns true
 */
const hasPathDFS = (graph, src, dst) => { 
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPathDFS(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
}

/**
 * Function: hasPathBFS
 * This function performs a Breadth-First Search (BFS) on a graph to check if there is a path between two nodes.
 *
 * @param {Object} graph - The graph to be traversed, represented as an adjacency list. 
 *                         Each key in the object is a node, and its value is an array of neighboring nodes.
 * @param {string | number} src - The node from which the path search starts. 
 *                                It should be a key present in the `graph` object.
 * @param {string | number} dst - The node where the path should end.
 *
 * @returns {boolean} - Returns true if there is a path from src to dst, and false otherwise.
 *
 * @example
 * let graph = { 'A': ['B', 'C'], 'B': ['A', 'D', 'E'], 'C': ['A', 'F'], 'D': ['B'], 'E': ['B', 'F'], 'F': ['C', 'E']};
 * hasPathBFS(graph, 'A', 'F'); // Returns true
 */
const hasPathBFS = (graph, src, dst) => {
    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false; // if no path
}
