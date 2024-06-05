class Graph {
  constructor(allSum, data) {
    this.adjList = {};
    this.sum = 0;
    this.min = 1000;
    this.allSum = allSum;
    this.data = data;
  }

  addEdge(u, v) {
    if (!this.adjList[u]) this.adjList[u] = [];
    if (!this.adjList[v]) this.adjList[v] = [];

    // For an undirected graph, add edges from u to v and from v to u
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }

  bfs(startNode) {
    const queue = [];
    const visited = new Array(Object.keys(this.adjList).length).fill(false);

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length !== 0) {
      const currentNode = queue.shift();
      this.sum += this.data[currentNode];
      console.log(currentNode + 1);
      for (const neighbor of this.adjList[currentNode] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    const tmp = Math.abs(this.allSum - 2 * this.sum);
    if (tmp < this.min) {
      this.min = tmp;
    }
    // console.log(this.min);
    this.sum = 0;
  }
}

function cutMain(data, edges, i) {
  const allSum = data.reduce((prev, cur) => {
    return prev + cur;
  }, 0);

  const newEdges = edges.map((edge) => [edge[0] - 1, edge[1] - 1]);

  const graph = new Graph(allSum, data);
  graph.data = data;

  newEdges.forEach((edge) => {
    graph.addEdge(edge[0], edge[1]);
  });

  graph.bfs(i);

  return graph;
}

function main() {
  //   const data = [100, 200, 100, 500, 100, 600];
  //   const edges = [
  //     [1, 2],
  //     [2, 3],
  //     [2, 5],
  //     [4, 5],
  //     [5, 6],
  //   ];
  const data = [205, 573, 985, 242, 830, 514, 592, 263, 142, 915];
  const edges = [
    [2, 8],
    [10, 5],
    [1, 7],
    [6, 9],
    [4, 3],
    [8, 10],
    [5, 1],
    [7, 6],
    [9, 4],
  ];

  //   cutMain(data, edges, edges[i][1]);

  //   graph = cutMain(data, edges, 0);
  let graph;
  for (let i = 0; i < edges.length; i++) {
    let tmpEdges = edges.slice();
    tmpEdges.splice(i, 1);
    graph = cutMain(data, tmpEdges, edges[i][0]);
  }

  console.log(graph.min);
}

main();

// const data = [205, 573, 985, 242, 830, 514, 592, 263, 142, 915];
// const edges = [
//   [2, 8],
//   [10, 5],
//   [1, 7],
//   [6, 9],
//   [4, 3],
//   [8, 10],
//   [5, 1],
//   [7, 6],
//   [9, 4],
// ];
