const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];
input.shift();

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const answer = Array(T).fill(0);

for (let i = 0; i < T; i++) {
  let count = 0;

  const [M, N, K] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  input.shift();

  for (let j = 0; j < K; j++) {
    const [X, Y] = input[j].split(" ").map(Number);
    graph[Y][X] = 1;
  }

  input.splice(0, K);

  function DFS(x, y) {
    visited[y][x] = true;

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (!visited[ny][nx] && graph[ny][nx] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let k = 0; k < N; k++) {
    for (let v = 0; v < M; v++) {
      if (!visited[k][v] && graph[k][v] === 1) {
        answer[i] = ++count;
        DFS(v, k);
      }
    }
  }
}

console.log(answer.join("\n"));
