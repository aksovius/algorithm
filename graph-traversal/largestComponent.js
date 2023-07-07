/**
 * Finds the size of the largest connected component in an undirected graph.
 * @param {Object} graph - The adjacency list representation of the graph.
 * @returns {number} - The size of the largest connected component.
 */
const largestComponent = (graph) => {
    let longest = 0;
    for(let node in graph) {
        const size = exploreSize(graph, node);
        if (size > longest) longest = size;
    }
    console.log('longest :>> ', longest);
    return longest;
}

/**
 * Helper function to explore the graph and calculate the size of the connected component.
 * @param {Object} graph - The adjacency list representation of the graph.
 * @param {number|string} node - The current node being explored.
 * @param {Set} visited - A set to track visited nodes.
 * @returns {number} - The size of the connected component.
 */
const exploreSize = function(graph, node, visited = new Set()) {

    if (visited.has(node)) return 0;
    visited.add(node);

    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
    
}

largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }); // -> 4