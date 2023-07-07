/**
 * Counts the number of connected components in an undirected graph.
 * @param {Object} graph - The adjacency list representation of the graph.
 * @returns {number} - The count of connected components in the graph.
 */
const connectedComponentsCount = (graph) => {

    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if(explore(graph, node, visited) === true) {
            count += 1;
        }
    }
    return count;
}
/**
 * Helper function to explore the graph and mark visited nodes.
 * @param {Object} graph - The adjacency list representation of the graph.
 * @param {number|string} current - The current node being explored.
 * @param {Set} visited - A set to track visited nodes.
 * @returns {boolean} - True if a new connected component is found, false otherwise.
 */
const explore = (graph, current, visited) => {

    if(visited.has(String(current))) return false; // convert int to string (JS key as string)
    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }
    return true;
}

graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}
console.log(connectedComponentsCount(graph)) //2