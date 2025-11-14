const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const adj = Array.from({ length: N + 1 }, () => []);
const deg = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [num, ...arr] = input[i].split(" ").map(Number);
  for (let j = 1; j < num; j++) {
    adj[arr[j - 1]].push(arr[j]);
    deg[arr[j]]++;
  }
}

const queue = [];
let head = 0;
const result = [];

const visited = Array(N + 1).fill(0);

function isCycle(x) {
  if (visited[x] === 1) return true;
  if (visited[x] === 2) return false;

  visited[x] = 1;

  for (let node of adj[x]) {
    if (isCycle(node)) return true;
  }
  visited[x] = 2;
  return false;
}

for (let i = 1; i < N + 1; i++) {
  if (isCycle(i)) {
    console.log(0);
    return;
  }
  if (deg[i] === 0) {
    queue.push(i);
  }
}

while (head < queue.length) {
  const idx = queue[head++];

  result.push(idx);

  for (const nxt of adj[idx]) {
    deg[nxt]--;

    if (deg[nxt] === 0) {
      queue.push(nxt);
    }
  }
}

console.log(result.length ? result.join("\n") : 0);
