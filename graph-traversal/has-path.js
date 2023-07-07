// DFS
const hasPathDFS = (graph, src, dst) => { 
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
}
// BFS
const hasPathBFS = (graph, src, dst) => {
    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false; // if not path
}