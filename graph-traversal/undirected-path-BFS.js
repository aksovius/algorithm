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
 * This function performs a Breadth-First Search (BFS) on a graph to check if there is a path between two nodes.
 *
 * @param {Object} graph - The graph to be traversed, represented as an adjacency list.
 * @param {string} src - The node from which the path search starts.
 * @param {string} dst - The node where the path should end.
 * @param {Set} visited - A Set containing nodes that have been visited during the BFS.
 *
 * @returns {boolean} - Returns true if there is a path from src to dst, and false otherwise.
 */

const hasPath = (graph, src, dst, visited) => {
    const queue = [src];
    visited.add(src);

    while(queue.length > 0) {
        const node = queue.shift();
        for (let neighbor of graph[node]) {
            if (neighbor === dst) return true;
            if (visited.has(neighbor)) continue;
            visited.add(neighbor);
            queue.push(neighbor);
        }
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