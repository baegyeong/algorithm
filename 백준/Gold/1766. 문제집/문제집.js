const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();

    return top;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;

    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);

      if (this.heap[parent] <= this.heap[idx]) break;

      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }
  }
}

const [[N, M], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const adj = Array.from({ length: N + 1 }, () => []);
const deg = Array(N + 1).fill(0);

for (const [a, b] of input) {
  adj[a].push(b);
  deg[b]++;
}

const pq = new MinHeap();

for (let i = 1; i <= N; i++) {
  if (deg[i] === 0) pq.push(i);
}

const result = [];

while (pq.size()) {
  const cur = pq.pop();

  result.push(cur);

  for (const nxt of adj[cur]) {
    deg[nxt]--;
    if (deg[nxt] === 0) pq.push(nxt);
  }
}

console.log(result.join(" "));
