const buildAdjacencyList = require("./buildAdjacencyList");


/**
 * Function: undirectedPath
 * This function checks if there is a path between two nodes in an undirected graph.
 *
 * @param {Array<Array<string>>} edges - An array of pairs representing the edges between nodes in the graph.
 * @param {string} nodeA - The node from which the path search starts.
 * @param {string} nodeB - The node where the path should end.
 *
 * @returns {boolean} - Returns true if there is a path from nodeA to nodeB, and false otherwise.
 *
 * @example
 * const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l']];
 * undirectedPath(edges, 'i', 'l'); // Returns true
 */

const undirectedPath = (edges, nodeA, nodeB) => {
    console.log('nodeA, nodeB :>> ', nodeA, nodeB);
    const graph = buildAdjacencyList(edges);

    const result = hasPath(graph, nodeA, nodeB, new Set());
    console.log(result);
    return  result;
};

/**
 * Function: hasPath
 * This function performs a Depth-First Search (DFS) on a graph to check if there is a path between two nodes.
 * It makes use of recursion to visit nodes deeply before backtracking.
 *
 * @param {Object} graph - The graph to be traversed, represented as an adjacency list.
 * @param {string} src - The node from which the path search starts.
 * @param {string} dst - The node where the path should end.
 * @param {Set} visited - A Set containing nodes that have been visited during the DFS.
 *
 * @returns {boolean} - Returns true if there is a path from src to dst, and false otherwise.
 */

const hasPath = (graph, src, dst, visited) => {

    if (src === dst) return true;
    if (visited.has(src)) return false; // already visited

    visited.add(src);

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited)) return true;
    }
    return false;
}


 const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m','k'],
    ['k', 'l'],
 ]

 undirectedPath(edges, 'i', 'l');