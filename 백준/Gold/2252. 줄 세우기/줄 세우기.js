const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const adj = Array.from({ length: N + 1 }, () => []);
const deg = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  adj[a].push(b);
  deg[b]++;
}

const queue = [];
let head = 0;

for (let i = 1; i <= N; i++) {
  if (deg[i] === 0) queue.push(i);
}

let result = [];

while (head < queue.length) {
  const cur = queue[head++];

  result.push(cur);

  for (const nxt of adj[cur]) {
    deg[nxt]--;
    if (deg[nxt] === 0) queue.push(nxt);
  }
}

console.log(result.join(" "));
