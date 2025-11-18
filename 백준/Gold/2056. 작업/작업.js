const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const taskTime = [0];
const graph = Array.from({ length: N + 1 }, () => []);
const deg = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const item = input[i].split(" ").map(Number);
  taskTime.push(item[0]);

  deg[i] = item[1];

  const adj = item.slice(2);
  for (const x of adj) {
    graph[x].push(i);
  }
}

const queue = [];
for (let i = 1; i < deg.length; i++) {
  if (deg[i] === 0) {
    queue.push(i);
  }
}

const jobTime = Array(N + 1).fill(0);

while (queue.length) {
  const node = queue.shift();

  jobTime[node] += taskTime[node];

  for (const nxt of graph[node]) {
    deg[nxt]--;
    jobTime[nxt] = Math.max(jobTime[nxt], jobTime[node]);

    if (deg[nxt] === 0) {
      queue.push(nxt);
    }
  }
}

console.log(Math.max(...jobTime));
