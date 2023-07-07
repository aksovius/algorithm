/**
 * Function: buildAdjacencyList
 * This function constructs an adjacency list representation of a graph from a list of edges.
 *
 * @param {Array<Array<string>>} edges - An array of pairs representing the edges between nodes in the graph.
 *
 * @returns {Object} - Returns an adjacency list representation of the graph.
 *
 * @example
 * const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l']];
 * buildAdjacencyList(edges); // Returns { i: ['j', 'k'], j: ['i'], k: ['i', 'm', 'l'], m: ['k'], l: ['k']}
 */

const buildAdjacencyList =(edges) => {
    const graph = {}

    for (let edge of edges) {
        const [ a, b ] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return graph;
};

module.exports = buildAdjacencyList;