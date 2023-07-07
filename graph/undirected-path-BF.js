const undirectedPath = (edges, nodeA, nodeB) => {
    console.log('nodeA, nodeB :>> ', nodeA, nodeB);
    const graph = buldGraph(edges);

    const result = hasPath(graph, nodeA, nodeB, new Set());
    console.log(result);
    return  result;
};

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

const buldGraph =(edges) => {
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

 const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m','k'],
    ['k', 'l'],
 ]

 undirectedPath(edges, 'i', 'l');