/**
 * Function: breadthFirstPrint
 * This function performs a Breadth-First Search (BFS) on a graph and prints each node as it's visited.
 *
 * @param {Object} graph - The graph to be traversed, represented as an adjacency list. 
 *                         Each key in the object is a node, and its value is an array of neighboring nodes.
 *
 * @param {string | number} source - The node from which the search starts. 
 *                                   It should be a key present in the `graph` object.
 *
 * The function does not return anything. Instead, it logs to the console each node as it is visited.
 *
 * @example
 *   let graph = {
 *     'A': ['B', 'C'],
 *     'B': ['A', 'D', 'E'],
 *     'C': ['A', 'F'],
 *     'D': ['B'],
 *     'E': ['B', 'F'],
 *     'F': ['C', 'E'],
 *   };
 *   breadthFirstPrint(graph, 'A'); // prints: 'A', 'B', 'C', 'D', 'E', 'F'
 *
 * The traversal order is determined by the Breadth-First Search algorithm, 
 * which visits all of a node's neighbors before moving on to their neighbors. 
 * The 'source' node is visited first, followed by its neighbors, then their neighbors, and so on.
 *
 * The function uses a queue to track which nodes to visit next. 
 * It starts with the 'source' node, then adds all of its neighbors to the queue. 
 * Then it removes the first node from the queue, visits it, and adds its neighbors to the queue. 
 * This process continues until all nodes have been visited and the queue is empty.
 */
const breadthFirstPrint = (graph, source) => {
    const queue = [source]
    while (queue.length > 0) {
        const current = queue.shift() // remove first element
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

breadthFirstPrint(graph, 'a'); // a, c, b, e, d, f