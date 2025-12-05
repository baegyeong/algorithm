const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const visited = Array.from({ length: N }, () => Array(M).fill(false));

function bfs(i, j) {
  const queue = [[i, j]];
  visited[i][j] = true;

  let head = 0;

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (const [dx, dy] of directions) {
      const nx = (dx + x + N) % N;
      const ny = (dy + y + M) % M;

      if (input[nx][ny] === 1) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

let zone = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j]) continue;
    if (input[i][j] === 1) continue;

    visited[i][j] = true;
    bfs(i, j);
    zone++;
  }
}

console.log(zone);
