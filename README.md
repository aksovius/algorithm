# Algorithms Learning Repository

This repository contains code snippets, solutions and algorithms I am learning and practicing.

## Contents

This repository includes a variety of algorithms such as:

- Graph traversal algorithms
- And more will be added as I learn them

These algorithms are implemented in JavaScript and can be found in the respective directories.

## Graph Traversal Algorithms

Included in this repository are examples of graph traversal algorithms, such as:

### Breadth-First Search (BFS)

The BFS algorithm traverses the graph in a breadthward motion and uses a queue to remember to get the next vertex to start a complete breadth search. It visits nodes level by level. Refer to the file `breadthFirstPrint.js` for the implementation.

Example usage:

```javascript
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
};
breadthFirstPrint(graph, 'A'); // prints: 'A', 'B', 'C', 'D', 'E', 'F'
```

### Depth-First Search (DFS)

The DFS algorithm traverses the graph in a depthward motion. It visits nodes as far as possible along each branch before backtracking. Refer to the file `depthFirstPrint.js` for the implementation.

Example usage:

```javascript
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
};
depthFirstPrint(graph, 'A'); // prints: 'A', 'B', 'D', 'E', 'F', 'C'
```

## Getting Started

To run the examples, clone this repository and run the desired file using Node.js:

```
node breadthFirstPrint.js
node depthFirstPrint.js
```

## Contributing

This is a personal learning project, and contributions are not currently being accepted. However, constructive feedback and suggestions are always welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.