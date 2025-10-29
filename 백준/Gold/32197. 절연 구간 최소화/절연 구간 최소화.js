class Deque {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }
  pushFront(x) {
    if (this.head === 0) {
      this.data.unshift(x);
      this.tail++;
    } else {
      this.data[--this.head] = x;
    }
  }
  pushBack(x) {
    this.data[this.tail++] = x;
  }
  popFront() {
    return this.data[this.head++];
  }
  isEmpty() {
    return this.head === this.tail;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const tracks = input.slice(1, M + 1).map((x) => x.split(" ").map(Number));
const [A, B] = input[M + 1].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (const track of tracks) {
  const [S, E, T] = track;
  graph[S].push([E, T]);
  graph[E].push([S, T]);
}

const dist = Array.from({ length: N + 1 }, () => Array(2).fill(Infinity));
const deque = new Deque();

for (const [next, feeding] of graph[A]) {
  dist[next][feeding] = 0;
  deque.pushBack([next, feeding]);
}

while (!deque.isEmpty()) {
  const [node, prev] = deque.popFront();

  for (const [next, feeding] of graph[node]) {
    let cost = 0;

    if (feeding !== prev) cost = 1;

    if (dist[next][feeding] > dist[node][prev] + cost) {
      dist[next][feeding] = dist[node][prev] + cost;

      if (cost === 0) {
        deque.pushFront([next, feeding]);
      } else {
        deque.pushBack([next, feeding]);
      }
    }
  }
}

const answer = Math.min(dist[B][0], dist[B][1]);
console.log(answer === Infinity ? -1 : answer);
