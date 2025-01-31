const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 1; i <= N; i++) {
  graph[i - 1] = input[i].split("").map(Number);
}

const visited = Array.from({ length: N }, () => Array(M).fill(0));

const directions = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];

const queue = [[0, 0]];
visited[0][0] = 1;

while (queue.length) {
  const [x, y] = queue.shift();

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (graph[nx][ny] === 1 && !visited[nx][ny]) {
      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(visited[N - 1][M - 1]);
