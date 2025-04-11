const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [M, N, K] = input[0].split(" ").map(Number);
const graph = Array.from({ length: M }, () => Array(N).fill(0));
const arr = [];

for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let j = y1; j < y2; j++) {
    for (let k = x1; k < x2; k++) {
      graph[j][k] = 1;
    }
  }
}

const queue = [];
let count = 1;

function bfs() {
  while (queue.length) {
    const node = queue.shift();
    const [x, y] = node;
    graph[x][y] = 1;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < 4; i++) {
      const [x, y] = node;
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = 1;
        count++;
        queue.push([nx, ny]);
      }
    }
  }
  arr.push(count);
  count = 1;
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0) {
      queue.push([i, j]);
      bfs();
    }
  }
}

console.log(arr.length + "\n" + arr.sort((a, b) => a - b).join(" "));
