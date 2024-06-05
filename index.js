const data = [1, 2, 3, 4, 5, 6];
const allSum = data.reduce((prev, cur) => {
  return prev + cur;
}, 0);

class Graph {
  constructor() {
    this.adjList = {};
    this.sum = 0;
  }

  // Function to add an edge to the graph
  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    this.adjList[u].push(v);
  }

  // Function to perform Breadth First Search on a graph represented using adjacency list
  bfs(startNode) {
    // Create a queue for BFS
    const queue = [];
    const visited = new Array(Object.keys(this.adjList).length).fill(false);

    // Mark the current node as visited and enqueue it
    visited[startNode] = true;
    queue.push(startNode);

    // Iterate over the queue
    while (queue.length !== 0) {
      // Dequeue a vertex from queue and print it
      const currentNode = queue.shift();
      this.sum += data[currentNode];
      // console.log(currentNode + " ");

      // Get all adjacent vertices of the dequeued vertex currentNode
      // If an adjacent has not been visited, then mark it visited and enqueue it
      for (const neighbor of this.adjList[currentNode] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    console.log(this.sum);
    this.sum = 0;
  }
}

// Create a graph
const graph = new Graph();

// Add edges to the graph
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

console.log("Breadth First Traversal starting from vertex 0: ");
for (let i = 1; i < 6; i++) {
  console.log(allSum -graph.bfs(i);
}
