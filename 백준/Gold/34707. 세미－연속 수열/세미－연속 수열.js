const [[N, K], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  pop() {
    if (!this.heap.length) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (!this.heap.length) return top;
    this.heap[0] = last;
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return top;
  }
  peek() {
    return this.heap[0];
  }
}

class MaxHeap extends MinHeap {
  push(val) {
    super.push(-val);
  }
  pop() {
    return -super.pop();
  }
  peek() {
    return -super.peek();
  }
}

const count = new Map();
const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
let left = 0;

for (let right = 0; right < N; right++) {
  const val = arr[right];
  count.set(val, (count.get(val) || 0) + 1);
  minHeap.push(val);
  maxHeap.push(val);

  while (count.size > K) {
    const leftVal = arr[left];
    count.set(leftVal, count.get(leftVal) - 1);
    if (count.get(leftVal) === 0) count.delete(leftVal);
    left++;
  }

  if (count.size === K) {
    while (!count.has(minHeap.peek())) minHeap.pop();
    while (!count.has(maxHeap.peek())) maxHeap.pop();

    if (maxHeap.peek() - minHeap.peek() + 1 === K) {
      console.log("YES");
      console.log([...count.keys()].join(" "));
      process.exit(0);
    }
  }
}

console.log("NO");
