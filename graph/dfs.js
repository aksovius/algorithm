/**
 * Function: depthFirstPrint
 * This function performs a Depth-First Search (DFS) on a graph and prints each node as it's visited.
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
 *   depthFirstPrint(graph, 'A'); // prints: 'A', 'B', 'D', 'E', 'F', 'C'
 *
 * The traversal order is determined by the Depth-First Search algorithm, 
 * which visits a node's neighbors as deeply as possible before moving on to the next neighbor. 
 * The 'source' node is visited first, then the first neighbor in its list, then the first neighbor of that neighbor, and so on.
 *
 * The function uses recursion to implement the DFS algorithm. 
 * It starts with the 'source' node, then recursively visits the first unvisited neighbor of the current node. 
 * The recursion continues until it reaches a node with no unvisited neighbors, 
 * at which point it returns to the previous call and continues with the next neighbor.
 */


// const depthFirstPrint = (graph, source) => {
//     const stack = [source]

//     while (stack.length > 0) {
//         const current = stack.pop() // remove last element
//         console.log(current)
//         for (let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }
// }

const depthFirstPrint = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]) {
        depthFirstPrint(graph, neighbor)
    }

}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph, 'a');