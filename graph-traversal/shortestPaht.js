const buildAdjacencyList = require('./buildAdjacencyList')

/**
 * Calculates the shortest path between two nodes in an undirected graph.
 * @param {Array} edges - An array of edges in the form [nodeA, nodeB].
 * @param {string} nodeA - The source node.
 * @param {string} nodeB - The destination node.
 * @returns {number} - The shortest path length between the nodes. Returns -1 if no path is found.
 */
const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildAdjacencyList(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === nodeB) return distance;
        for(let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1 ]);
            }
        }
    }
    return -1;
};


const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

console.log(shortestPath(edges, 'w', 'z')); // -> 2