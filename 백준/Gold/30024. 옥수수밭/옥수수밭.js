class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.size() - 1;
    const lastNode = this.heap[i];

    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2);
      if (lastNode[0] > this.heap[parentIndex][0]) {
        this.heap[i] = this.heap[parentIndex];
        i = parentIndex;
      } else {
        break;
      }
    }

    this.heap[i] = lastNode;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop();

    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return rootNode;
  }

  heapifyDown() {
    let i = 0;
    const heapSize = this.size();

    while (true) {
      let swapIndex = i;
      const left = i * 2 + 1;
      const right = i * 2 + 2;

      if (left < heapSize && this.heap[i][0] < this.heap[left][0]) {
        swapIndex = left;
      }

      if (right < heapSize && this.heap[swapIndex][0] < this.heap[right][0]) {
        swapIndex = right;
      }

      if (swapIndex === i) break;

      [this.heap[i], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[i],
      ];

      i = swapIndex;
    }
  }

  peek() {
    return this.heap[0];
  }
}

const [[N, M], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [K] = input.pop();

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const pq = new PriorityQueue();
const visited = Array.from({ length: N }, () => Array(M).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i === 0 || i === N - 1 || j === 0 || j === M - 1) {
      pq.enqueue([input[i][j], i, j]);
      visited[i][j] = true;
    }
  }
}

let count = 0;
let purchase = 0;
const position = [];

while (!pq.isEmpty()) {
  const [value, x, y] = pq.dequeue();

  position.push([x + 1, y + 1]);

  count++;
  purchase += value;

  if (count === K) break;

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (visited[nx][ny]) continue;

    visited[nx][ny] = true;

    pq.enqueue([input[nx][ny], nx, ny]);
  }
}

console.log(position.map((item) => item.join(" ")).join("\n"));
